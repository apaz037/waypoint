// Package ceb contains the core logic for the custom entrypoint binary ("ceb").
package ceb

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"strconv"

	"github.com/hashicorp/go-hclog"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/hashicorp/waypoint/internal/server"
	pb "github.com/hashicorp/waypoint/internal/server/gen"
)

const (
	envDeploymentId   = "WAYPOINT_DEPLOYMENT_ID"
	envServerAddr     = "WAYPOINT_SERVER_ADDR"
	envServerInsecure = "WAYPOINT_SERVER_INSECURE"
)

const (
	DefaultPort                = 5000
	DefaultWaypointControlAddr = "control.alpha.waypoint.run"
)

// CEB represents the state of a running CEB.
type CEB struct {
	id       string
	logger   hclog.Logger
	context  context.Context
	client   pb.WaypointClient
	childCmd *exec.Cmd
	execIdx  int64

	cleanupFunc func()
}

// Run runs a CEB with the given options.
//
// This will run until the context is cancelled. If the context is cancelled,
// we will attempt to gracefully exit the underlying program and attempt to
// clean up all resources.
func Run(ctx context.Context, os ...Option) error {
	// Create our ID
	id, err := server.Id()
	if err != nil {
		return status.Errorf(codes.Internal,
			"failed to generate unique ID: %s", err)
	}

	// Defaults, initialization
	ceb := &CEB{
		id:      id,
		logger:  hclog.L(),
		context: ctx,
	}
	defer ceb.Close()

	// Set our options
	var cfg config
	for _, o := range os {
		err := o(ceb, &cfg)
		if err != nil {
			return err
		}
	}

	ceb.logger.Info("entrypoint starting",
		"deployment_id", cfg.DeploymentId,
		"instance_id", ceb.id,
		"args", cfg.ExecArgs,
	)

	// Initialize our server connection
	if err := ceb.dialServer(ctx, &cfg); err != nil {
		return status.Errorf(codes.Aborted,
			"failed to connect to server: %s", err)
	}

	// Initialize our command
	if err := ceb.initChildCmd(ctx, &cfg); err != nil {
		return status.Errorf(codes.Aborted,
			"failed to connect to server: %s", err)
	}

	// Get our configuration and start the long-running stream for it.
	if err := ceb.initConfigStream(ctx, &cfg); err != nil {
		return err
	}

	// Initialize our log stream
	// NOTE(mitchellh): at some point we want this to be configurable
	// but for now we're just going for it.
	if err := ceb.initLogStream(ctx, &cfg); err != nil {
		return err
	}

	if err := ceb.initURLService(ctx, &cfg); err != nil {
		return err
	}

	// Run our subprocess
	errCh := ceb.execChildCmd(ctx)
	select {
	case err := <-errCh:
		return err

	case <-ctx.Done():
		ceb.logger.Info("received cancellation request, gracefully exiting")
		ceb.childCmd.Process.Kill()
		<-errCh
	}

	return nil
}

// Close cleans up any resources created by the CEB and should be called
// to gracefully exit.
func (ceb *CEB) Close() error {
	if f := ceb.cleanupFunc; f != nil {
		f()
	}

	return nil
}

// cleanup stacks cleanup functions to call when Close is called.
func (ceb *CEB) cleanup(f func()) {
	oldF := ceb.cleanupFunc
	ceb.cleanupFunc = func() {
		defer f()
		if oldF != nil {
			oldF()
		}
	}
}

type config struct {
	ExecArgs       []string
	DeploymentId   string
	ServerAddr     string
	ServerInsecure bool

	WaypointToken       string
	WaypointControlAddr string
	URLServicePort      int
	URLServiceLabels    string
}

type Option func(*CEB, *config) error

// WithEnvDefaults sets the configuration based on well-known accepted
// environment variables. If this is NOT called, then the environment variable
// based confiugration will be ignored.
func WithEnvDefaults() Option {
	return func(ceb *CEB, cfg *config) error {
		labels := os.Getenv("WAYPOINT_URL_LABELS")
		if labels != "" {
			cfg.URLServiceLabels = labels

			var port int

			portStr := os.Getenv("PORT")
			if portStr == "" {
				port = DefaultPort
				os.Setenv("PORT", strconv.Itoa(DefaultPort))
			} else {
				i, err := strconv.Atoi(portStr)
				if err != nil {
					return fmt.Errorf("Invalid value of PORT: %s", err)
				}

				port = i
			}

			cfg.URLServicePort = port

			controlAddr := os.Getenv("WAYPOINT_CONTROL_ADDR")
			if controlAddr == "" {
				controlAddr = DefaultWaypointControlAddr
			}

			cfg.WaypointControlAddr = controlAddr

			token := os.Getenv("WAYPOINT_TOKEN")
			if token == "" {
				return fmt.Errorf("No token provided via WAYPOINT_TOKEN.")
			}

			cfg.WaypointToken = token
		}

		cfg.DeploymentId = os.Getenv(envDeploymentId)
		cfg.ServerAddr = os.Getenv(envServerAddr)
		cfg.ServerInsecure = os.Getenv(envServerInsecure) != ""

		return nil
	}
}

// WithExec sets the binary and arguments for the child process that the
// ceb execs. If the first value is not absolute then we'll look for it on
// the PATH.
func WithExec(args []string) Option {
	return func(ceb *CEB, cfg *config) error {
		cfg.ExecArgs = args
		return nil
	}
}

// WithURLService indicates that the CEB should boot a connection to the
// Waypoint URL Service and forward HTTP traffic send to the given labels
// to the given localhost port.
func WithURLService(controlAddr, token string, port int, labels string) Option {
	return func(ceb *CEB, cfg *config) error {
		cfg.WaypointControlAddr = controlAddr
		cfg.WaypointToken = token
		cfg.URLServicePort = port
		cfg.URLServiceLabels = labels

		return nil
	}
}