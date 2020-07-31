import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from 'api-common-protos/google/rpc/status_pb';


export class Application extends jspb.Message {
  getProject(): Ref.Project | undefined;
  setProject(value?: Ref.Project): Application;
  hasProject(): boolean;
  clearProject(): Application;

  getName(): string;
  setName(value: string): Application;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    project?: Ref.Project.AsObject,
    name: string,
  }
}

export class Project extends jspb.Message {
  getName(): string;
  setName(value: string): Project;

  getApplicationsList(): Array<Application>;
  setApplicationsList(value: Array<Application>): Project;
  clearApplicationsList(): Project;
  addApplications(value?: Application, index?: number): Application;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    name: string,
    applicationsList: Array<Application.AsObject>,
  }
}

export class Workspace extends jspb.Message {
  getName(): string;
  setName(value: string): Workspace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Workspace.AsObject;
  static toObject(includeInstance: boolean, msg: Workspace): Workspace.AsObject;
  static serializeBinaryToWriter(message: Workspace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Workspace;
  static deserializeBinaryFromReader(message: Workspace, reader: jspb.BinaryReader): Workspace;
}

export namespace Workspace {
  export type AsObject = {
    name: string,
  }
}

export class Ref extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ref.AsObject;
  static toObject(includeInstance: boolean, msg: Ref): Ref.AsObject;
  static serializeBinaryToWriter(message: Ref, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ref;
  static deserializeBinaryFromReader(message: Ref, reader: jspb.BinaryReader): Ref;
}

export namespace Ref {
  export type AsObject = {
  }

  export class Application extends jspb.Message {
    getApplication(): string;
    setApplication(value: string): Application;

    getProject(): string;
    setProject(value: string): Application;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Application.AsObject;
    static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
    static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Application;
    static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
  }

  export namespace Application {
    export type AsObject = {
      application: string,
      project: string,
    }
  }


  export class Project extends jspb.Message {
    getProject(): string;
    setProject(value: string): Project;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Project.AsObject;
    static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
    static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Project;
    static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
  }

  export namespace Project {
    export type AsObject = {
      project: string,
    }
  }


  export class Workspace extends jspb.Message {
    getWorkspace(): string;
    setWorkspace(value: string): Workspace;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Workspace.AsObject;
    static toObject(includeInstance: boolean, msg: Workspace): Workspace.AsObject;
    static serializeBinaryToWriter(message: Workspace, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Workspace;
    static deserializeBinaryFromReader(message: Workspace, reader: jspb.BinaryReader): Workspace;
  }

  export namespace Workspace {
    export type AsObject = {
      workspace: string,
    }
  }


  export class Runner extends jspb.Message {
    getAny(): Ref.RunnerAny | undefined;
    setAny(value?: Ref.RunnerAny): Runner;
    hasAny(): boolean;
    clearAny(): Runner;

    getId(): Ref.RunnerId | undefined;
    setId(value?: Ref.RunnerId): Runner;
    hasId(): boolean;
    clearId(): Runner;

    getTargetCase(): Runner.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Runner.AsObject;
    static toObject(includeInstance: boolean, msg: Runner): Runner.AsObject;
    static serializeBinaryToWriter(message: Runner, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Runner;
    static deserializeBinaryFromReader(message: Runner, reader: jspb.BinaryReader): Runner;
  }

  export namespace Runner {
    export type AsObject = {
      any?: Ref.RunnerAny.AsObject,
      id?: Ref.RunnerId.AsObject,
    }

    export enum TargetCase { 
      TARGET_NOT_SET = 0,
      ANY = 1,
      ID = 2,
    }
  }


  export class RunnerId extends jspb.Message {
    getId(): string;
    setId(value: string): RunnerId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunnerId.AsObject;
    static toObject(includeInstance: boolean, msg: RunnerId): RunnerId.AsObject;
    static serializeBinaryToWriter(message: RunnerId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunnerId;
    static deserializeBinaryFromReader(message: RunnerId, reader: jspb.BinaryReader): RunnerId;
  }

  export namespace RunnerId {
    export type AsObject = {
      id: string,
    }
  }


  export class RunnerAny extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunnerAny.AsObject;
    static toObject(includeInstance: boolean, msg: RunnerAny): RunnerAny.AsObject;
    static serializeBinaryToWriter(message: RunnerAny, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunnerAny;
    static deserializeBinaryFromReader(message: RunnerAny, reader: jspb.BinaryReader): RunnerAny;
  }

  export namespace RunnerAny {
    export type AsObject = {
    }
  }

}

export class Component extends jspb.Message {
  getType(): Component.Type;
  setType(value: Component.Type): Component;

  getName(): string;
  setName(value: string): Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Component.AsObject;
  static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
  static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Component;
  static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
}

export namespace Component {
  export type AsObject = {
    type: Component.Type,
    name: string,
  }

  export enum Type { 
    UNKNOWN = 0,
    BUILDER = 1,
    REGISTRY = 2,
  }
}

export class Status extends jspb.Message {
  getState(): Status.State;
  setState(value: Status.State): Status;

  getDetails(): string;
  setDetails(value: string): Status;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): Status;
  hasError(): boolean;
  clearError(): Status;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Status;
  hasStartTime(): boolean;
  clearStartTime(): Status;

  getCompleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompleteTime(value?: google_protobuf_timestamp_pb.Timestamp): Status;
  hasCompleteTime(): boolean;
  clearCompleteTime(): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    state: Status.State,
    details: string,
    error?: google_rpc_status_pb.Status.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum State { 
    UNKNOWN = 0,
    RUNNING = 1,
    SUCCESS = 2,
    ERROR = 3,
  }
}

export class StatusFilter extends jspb.Message {
  getFiltersList(): Array<StatusFilter.Filter>;
  setFiltersList(value: Array<StatusFilter.Filter>): StatusFilter;
  clearFiltersList(): StatusFilter;
  addFilters(value?: StatusFilter.Filter, index?: number): StatusFilter.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StatusFilter): StatusFilter.AsObject;
  static serializeBinaryToWriter(message: StatusFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusFilter;
  static deserializeBinaryFromReader(message: StatusFilter, reader: jspb.BinaryReader): StatusFilter;
}

export namespace StatusFilter {
  export type AsObject = {
    filtersList: Array<StatusFilter.Filter.AsObject>,
  }

  export class Filter extends jspb.Message {
    getState(): Status.State;
    setState(value: Status.State): Filter;

    getFilterCase(): Filter.FilterCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      state: Status.State,
    }

    export enum FilterCase { 
      FILTER_NOT_SET = 0,
      STATE = 2,
    }
  }

}

export class OperationOrder extends jspb.Message {
  getOrder(): OperationOrder.Order;
  setOrder(value: OperationOrder.Order): OperationOrder;

  getDesc(): boolean;
  setDesc(value: boolean): OperationOrder;

  getLimit(): number;
  setLimit(value: number): OperationOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOrder.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOrder): OperationOrder.AsObject;
  static serializeBinaryToWriter(message: OperationOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOrder;
  static deserializeBinaryFromReader(message: OperationOrder, reader: jspb.BinaryReader): OperationOrder;
}

export namespace OperationOrder {
  export type AsObject = {
    order: OperationOrder.Order,
    desc: boolean,
    limit: number,
  }

  export enum Order { 
    UNSET = 0,
    START_TIME = 1,
    COMPLETE_TIME = 2,
  }
}

export class QueueJobRequest extends jspb.Message {
  getJob(): Job | undefined;
  setJob(value?: Job): QueueJobRequest;
  hasJob(): boolean;
  clearJob(): QueueJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueJobRequest): QueueJobRequest.AsObject;
  static serializeBinaryToWriter(message: QueueJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueJobRequest;
  static deserializeBinaryFromReader(message: QueueJobRequest, reader: jspb.BinaryReader): QueueJobRequest;
}

export namespace QueueJobRequest {
  export type AsObject = {
    job?: Job.AsObject,
  }
}

export class QueueJobResponse extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): QueueJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueJobResponse): QueueJobResponse.AsObject;
  static serializeBinaryToWriter(message: QueueJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueJobResponse;
  static deserializeBinaryFromReader(message: QueueJobResponse, reader: jspb.BinaryReader): QueueJobResponse;
}

export namespace QueueJobResponse {
  export type AsObject = {
    jobId: string,
  }
}

export class ValidateJobRequest extends jspb.Message {
  getJob(): Job | undefined;
  setJob(value?: Job): ValidateJobRequest;
  hasJob(): boolean;
  clearJob(): ValidateJobRequest;

  getDisableAssign(): boolean;
  setDisableAssign(value: boolean): ValidateJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateJobRequest): ValidateJobRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateJobRequest;
  static deserializeBinaryFromReader(message: ValidateJobRequest, reader: jspb.BinaryReader): ValidateJobRequest;
}

export namespace ValidateJobRequest {
  export type AsObject = {
    job?: Job.AsObject,
    disableAssign: boolean,
  }
}

export class ValidateJobResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): ValidateJobResponse;

  getValidationError(): google_rpc_status_pb.Status | undefined;
  setValidationError(value?: google_rpc_status_pb.Status): ValidateJobResponse;
  hasValidationError(): boolean;
  clearValidationError(): ValidateJobResponse;

  getAssignable(): boolean;
  setAssignable(value: boolean): ValidateJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateJobResponse): ValidateJobResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateJobResponse;
  static deserializeBinaryFromReader(message: ValidateJobResponse, reader: jspb.BinaryReader): ValidateJobResponse;
}

export namespace ValidateJobResponse {
  export type AsObject = {
    valid: boolean,
    validationError?: google_rpc_status_pb.Status.AsObject,
    assignable: boolean,
  }
}

export class Job extends jspb.Message {
  getId(): string;
  setId(value: string): Job;

  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): Job;
  hasApplication(): boolean;
  clearApplication(): Job;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): Job;
  hasWorkspace(): boolean;
  clearWorkspace(): Job;

  getTargetRunner(): Ref.Runner | undefined;
  setTargetRunner(value?: Ref.Runner): Job;
  hasTargetRunner(): boolean;
  clearTargetRunner(): Job;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Job;

  getLocal(): Job.Local | undefined;
  setLocal(value?: Job.Local): Job;
  hasLocal(): boolean;
  clearLocal(): Job;

  getNoop(): Job.Noop | undefined;
  setNoop(value?: Job.Noop): Job;
  hasNoop(): boolean;
  clearNoop(): Job;

  getBuild(): Job.BuildOp | undefined;
  setBuild(value?: Job.BuildOp): Job;
  hasBuild(): boolean;
  clearBuild(): Job;

  getPush(): Job.PushOp | undefined;
  setPush(value?: Job.PushOp): Job;
  hasPush(): boolean;
  clearPush(): Job;

  getDeploy(): Job.DeployOp | undefined;
  setDeploy(value?: Job.DeployOp): Job;
  hasDeploy(): boolean;
  clearDeploy(): Job;

  getDestroyDeploy(): Job.DestroyDeployOp | undefined;
  setDestroyDeploy(value?: Job.DestroyDeployOp): Job;
  hasDestroyDeploy(): boolean;
  clearDestroyDeploy(): Job;

  getRelease(): Job.ReleaseOp | undefined;
  setRelease(value?: Job.ReleaseOp): Job;
  hasRelease(): boolean;
  clearRelease(): Job;

  getValidate(): Job.ValidateOp | undefined;
  setValidate(value?: Job.ValidateOp): Job;
  hasValidate(): boolean;
  clearValidate(): Job;

  getState(): Job.State;
  setState(value: Job.State): Job;

  getAssignedRunner(): Ref.RunnerId | undefined;
  setAssignedRunner(value?: Ref.RunnerId): Job;
  hasAssignedRunner(): boolean;
  clearAssignedRunner(): Job;

  getQueueTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueueTime(value?: google_protobuf_timestamp_pb.Timestamp): Job;
  hasQueueTime(): boolean;
  clearQueueTime(): Job;

  getAssignTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAssignTime(value?: google_protobuf_timestamp_pb.Timestamp): Job;
  hasAssignTime(): boolean;
  clearAssignTime(): Job;

  getAckTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAckTime(value?: google_protobuf_timestamp_pb.Timestamp): Job;
  hasAckTime(): boolean;
  clearAckTime(): Job;

  getCompleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompleteTime(value?: google_protobuf_timestamp_pb.Timestamp): Job;
  hasCompleteTime(): boolean;
  clearCompleteTime(): Job;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): Job;
  hasError(): boolean;
  clearError(): Job;

  getResult(): Job.Result | undefined;
  setResult(value?: Job.Result): Job;
  hasResult(): boolean;
  clearResult(): Job;

  getDataSourceCase(): Job.DataSourceCase;

  getOperationCase(): Job.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    id: string,
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
    targetRunner?: Ref.Runner.AsObject,
    labelsMap: Array<[string, string]>,
    local?: Job.Local.AsObject,
    noop?: Job.Noop.AsObject,
    build?: Job.BuildOp.AsObject,
    push?: Job.PushOp.AsObject,
    deploy?: Job.DeployOp.AsObject,
    destroyDeploy?: Job.DestroyDeployOp.AsObject,
    release?: Job.ReleaseOp.AsObject,
    validate?: Job.ValidateOp.AsObject,
    state: Job.State,
    assignedRunner?: Ref.RunnerId.AsObject,
    queueTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assignTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ackTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    error?: google_rpc_status_pb.Status.AsObject,
    result?: Job.Result.AsObject,
  }

  export class Result extends jspb.Message {
    getBuild(): Job.BuildResult | undefined;
    setBuild(value?: Job.BuildResult): Result;
    hasBuild(): boolean;
    clearBuild(): Result;

    getPush(): Job.PushResult | undefined;
    setPush(value?: Job.PushResult): Result;
    hasPush(): boolean;
    clearPush(): Result;

    getDeploy(): Job.DeployResult | undefined;
    setDeploy(value?: Job.DeployResult): Result;
    hasDeploy(): boolean;
    clearDeploy(): Result;

    getRelease(): Job.ReleaseResult | undefined;
    setRelease(value?: Job.ReleaseResult): Result;
    hasRelease(): boolean;
    clearRelease(): Result;

    getValidate(): Job.ValidateResult | undefined;
    setValidate(value?: Job.ValidateResult): Result;
    hasValidate(): boolean;
    clearValidate(): Result;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      build?: Job.BuildResult.AsObject,
      push?: Job.PushResult.AsObject,
      deploy?: Job.DeployResult.AsObject,
      release?: Job.ReleaseResult.AsObject,
      validate?: Job.ValidateResult.AsObject,
    }
  }


  export class Local extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Local.AsObject;
    static toObject(includeInstance: boolean, msg: Local): Local.AsObject;
    static serializeBinaryToWriter(message: Local, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Local;
    static deserializeBinaryFromReader(message: Local, reader: jspb.BinaryReader): Local;
  }

  export namespace Local {
    export type AsObject = {
    }
  }


  export class Noop extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Noop.AsObject;
    static toObject(includeInstance: boolean, msg: Noop): Noop.AsObject;
    static serializeBinaryToWriter(message: Noop, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Noop;
    static deserializeBinaryFromReader(message: Noop, reader: jspb.BinaryReader): Noop;
  }

  export namespace Noop {
    export type AsObject = {
    }
  }


  export class ValidateOp extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateOp.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateOp): ValidateOp.AsObject;
    static serializeBinaryToWriter(message: ValidateOp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateOp;
    static deserializeBinaryFromReader(message: ValidateOp, reader: jspb.BinaryReader): ValidateOp;
  }

  export namespace ValidateOp {
    export type AsObject = {
    }
  }


  export class ValidateResult extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateResult.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateResult): ValidateResult.AsObject;
    static serializeBinaryToWriter(message: ValidateResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateResult;
    static deserializeBinaryFromReader(message: ValidateResult, reader: jspb.BinaryReader): ValidateResult;
  }

  export namespace ValidateResult {
    export type AsObject = {
    }
  }


  export class BuildOp extends jspb.Message {
    getDisablePush(): boolean;
    setDisablePush(value: boolean): BuildOp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildOp.AsObject;
    static toObject(includeInstance: boolean, msg: BuildOp): BuildOp.AsObject;
    static serializeBinaryToWriter(message: BuildOp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildOp;
    static deserializeBinaryFromReader(message: BuildOp, reader: jspb.BinaryReader): BuildOp;
  }

  export namespace BuildOp {
    export type AsObject = {
      disablePush: boolean,
    }
  }


  export class BuildResult extends jspb.Message {
    getBuild(): Build | undefined;
    setBuild(value?: Build): BuildResult;
    hasBuild(): boolean;
    clearBuild(): BuildResult;

    getPush(): PushedArtifact | undefined;
    setPush(value?: PushedArtifact): BuildResult;
    hasPush(): boolean;
    clearPush(): BuildResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildResult.AsObject;
    static toObject(includeInstance: boolean, msg: BuildResult): BuildResult.AsObject;
    static serializeBinaryToWriter(message: BuildResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildResult;
    static deserializeBinaryFromReader(message: BuildResult, reader: jspb.BinaryReader): BuildResult;
  }

  export namespace BuildResult {
    export type AsObject = {
      build?: Build.AsObject,
      push?: PushedArtifact.AsObject,
    }
  }


  export class PushOp extends jspb.Message {
    getBuild(): Build | undefined;
    setBuild(value?: Build): PushOp;
    hasBuild(): boolean;
    clearBuild(): PushOp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushOp.AsObject;
    static toObject(includeInstance: boolean, msg: PushOp): PushOp.AsObject;
    static serializeBinaryToWriter(message: PushOp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushOp;
    static deserializeBinaryFromReader(message: PushOp, reader: jspb.BinaryReader): PushOp;
  }

  export namespace PushOp {
    export type AsObject = {
      build?: Build.AsObject,
    }
  }


  export class PushResult extends jspb.Message {
    getArtifact(): PushedArtifact | undefined;
    setArtifact(value?: PushedArtifact): PushResult;
    hasArtifact(): boolean;
    clearArtifact(): PushResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushResult.AsObject;
    static toObject(includeInstance: boolean, msg: PushResult): PushResult.AsObject;
    static serializeBinaryToWriter(message: PushResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushResult;
    static deserializeBinaryFromReader(message: PushResult, reader: jspb.BinaryReader): PushResult;
  }

  export namespace PushResult {
    export type AsObject = {
      artifact?: PushedArtifact.AsObject,
    }
  }


  export class DeployOp extends jspb.Message {
    getArtifact(): PushedArtifact | undefined;
    setArtifact(value?: PushedArtifact): DeployOp;
    hasArtifact(): boolean;
    clearArtifact(): DeployOp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeployOp.AsObject;
    static toObject(includeInstance: boolean, msg: DeployOp): DeployOp.AsObject;
    static serializeBinaryToWriter(message: DeployOp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeployOp;
    static deserializeBinaryFromReader(message: DeployOp, reader: jspb.BinaryReader): DeployOp;
  }

  export namespace DeployOp {
    export type AsObject = {
      artifact?: PushedArtifact.AsObject,
    }
  }


  export class DeployResult extends jspb.Message {
    getDeployment(): Deployment | undefined;
    setDeployment(value?: Deployment): DeployResult;
    hasDeployment(): boolean;
    clearDeployment(): DeployResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeployResult.AsObject;
    static toObject(includeInstance: boolean, msg: DeployResult): DeployResult.AsObject;
    static serializeBinaryToWriter(message: DeployResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeployResult;
    static deserializeBinaryFromReader(message: DeployResult, reader: jspb.BinaryReader): DeployResult;
  }

  export namespace DeployResult {
    export type AsObject = {
      deployment?: Deployment.AsObject,
    }
  }


  export class DestroyDeployOp extends jspb.Message {
    getDeployment(): Deployment | undefined;
    setDeployment(value?: Deployment): DestroyDeployOp;
    hasDeployment(): boolean;
    clearDeployment(): DestroyDeployOp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DestroyDeployOp.AsObject;
    static toObject(includeInstance: boolean, msg: DestroyDeployOp): DestroyDeployOp.AsObject;
    static serializeBinaryToWriter(message: DestroyDeployOp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DestroyDeployOp;
    static deserializeBinaryFromReader(message: DestroyDeployOp, reader: jspb.BinaryReader): DestroyDeployOp;
  }

  export namespace DestroyDeployOp {
    export type AsObject = {
      deployment?: Deployment.AsObject,
    }
  }


  export class ReleaseOp extends jspb.Message {
    getTrafficSplit(): Release.Split | undefined;
    setTrafficSplit(value?: Release.Split): ReleaseOp;
    hasTrafficSplit(): boolean;
    clearTrafficSplit(): ReleaseOp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReleaseOp.AsObject;
    static toObject(includeInstance: boolean, msg: ReleaseOp): ReleaseOp.AsObject;
    static serializeBinaryToWriter(message: ReleaseOp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReleaseOp;
    static deserializeBinaryFromReader(message: ReleaseOp, reader: jspb.BinaryReader): ReleaseOp;
  }

  export namespace ReleaseOp {
    export type AsObject = {
      trafficSplit?: Release.Split.AsObject,
    }
  }


  export class ReleaseResult extends jspb.Message {
    getRelease(): Release | undefined;
    setRelease(value?: Release): ReleaseResult;
    hasRelease(): boolean;
    clearRelease(): ReleaseResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReleaseResult.AsObject;
    static toObject(includeInstance: boolean, msg: ReleaseResult): ReleaseResult.AsObject;
    static serializeBinaryToWriter(message: ReleaseResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReleaseResult;
    static deserializeBinaryFromReader(message: ReleaseResult, reader: jspb.BinaryReader): ReleaseResult;
  }

  export namespace ReleaseResult {
    export type AsObject = {
      release?: Release.AsObject,
    }
  }


  export enum State { 
    UNKNOWN = 0,
    QUEUED = 1,
    WAITING = 2,
    RUNNING = 3,
    ERROR = 4,
    SUCCESS = 5,
  }

  export enum DataSourceCase { 
    DATA_SOURCE_NOT_SET = 0,
    LOCAL = 20,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    NOOP = 50,
    BUILD = 51,
    PUSH = 52,
    DEPLOY = 53,
    DESTROY_DEPLOY = 54,
    RELEASE = 55,
    VALIDATE = 56,
  }
}

export class GetJobRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): GetJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    jobId: string,
  }
}

export class GetJobStreamRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): GetJobStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobStreamRequest): GetJobStreamRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobStreamRequest;
  static deserializeBinaryFromReader(message: GetJobStreamRequest, reader: jspb.BinaryReader): GetJobStreamRequest;
}

export namespace GetJobStreamRequest {
  export type AsObject = {
    jobId: string,
  }
}

export class GetJobStreamResponse extends jspb.Message {
  getOpen(): GetJobStreamResponse.Open | undefined;
  setOpen(value?: GetJobStreamResponse.Open): GetJobStreamResponse;
  hasOpen(): boolean;
  clearOpen(): GetJobStreamResponse;

  getState(): GetJobStreamResponse.State | undefined;
  setState(value?: GetJobStreamResponse.State): GetJobStreamResponse;
  hasState(): boolean;
  clearState(): GetJobStreamResponse;

  getTerminal(): GetJobStreamResponse.Terminal | undefined;
  setTerminal(value?: GetJobStreamResponse.Terminal): GetJobStreamResponse;
  hasTerminal(): boolean;
  clearTerminal(): GetJobStreamResponse;

  getError(): GetJobStreamResponse.Error | undefined;
  setError(value?: GetJobStreamResponse.Error): GetJobStreamResponse;
  hasError(): boolean;
  clearError(): GetJobStreamResponse;

  getComplete(): GetJobStreamResponse.Complete | undefined;
  setComplete(value?: GetJobStreamResponse.Complete): GetJobStreamResponse;
  hasComplete(): boolean;
  clearComplete(): GetJobStreamResponse;

  getEventCase(): GetJobStreamResponse.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobStreamResponse): GetJobStreamResponse.AsObject;
  static serializeBinaryToWriter(message: GetJobStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobStreamResponse;
  static deserializeBinaryFromReader(message: GetJobStreamResponse, reader: jspb.BinaryReader): GetJobStreamResponse;
}

export namespace GetJobStreamResponse {
  export type AsObject = {
    open?: GetJobStreamResponse.Open.AsObject,
    state?: GetJobStreamResponse.State.AsObject,
    terminal?: GetJobStreamResponse.Terminal.AsObject,
    error?: GetJobStreamResponse.Error.AsObject,
    complete?: GetJobStreamResponse.Complete.AsObject,
  }

  export class Open extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Open.AsObject;
    static toObject(includeInstance: boolean, msg: Open): Open.AsObject;
    static serializeBinaryToWriter(message: Open, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Open;
    static deserializeBinaryFromReader(message: Open, reader: jspb.BinaryReader): Open;
  }

  export namespace Open {
    export type AsObject = {
    }
  }


  export class State extends jspb.Message {
    getPrevious(): Job.State;
    setPrevious(value: Job.State): State;

    getCurrent(): Job.State;
    setCurrent(value: Job.State): State;

    getJob(): Job | undefined;
    setJob(value?: Job): State;
    hasJob(): boolean;
    clearJob(): State;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): State.AsObject;
    static toObject(includeInstance: boolean, msg: State): State.AsObject;
    static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): State;
    static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
  }

  export namespace State {
    export type AsObject = {
      previous: Job.State,
      current: Job.State,
      job?: Job.AsObject,
    }
  }


  export class Terminal extends jspb.Message {
    getEventsList(): Array<GetJobStreamResponse.Terminal.Event>;
    setEventsList(value: Array<GetJobStreamResponse.Terminal.Event>): Terminal;
    clearEventsList(): Terminal;
    addEvents(value?: GetJobStreamResponse.Terminal.Event, index?: number): GetJobStreamResponse.Terminal.Event;

    getBuffered(): boolean;
    setBuffered(value: boolean): Terminal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Terminal.AsObject;
    static toObject(includeInstance: boolean, msg: Terminal): Terminal.AsObject;
    static serializeBinaryToWriter(message: Terminal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Terminal;
    static deserializeBinaryFromReader(message: Terminal, reader: jspb.BinaryReader): Terminal;
  }

  export namespace Terminal {
    export type AsObject = {
      eventsList: Array<GetJobStreamResponse.Terminal.Event.AsObject>,
      buffered: boolean,
    }

    export class Event extends jspb.Message {
      getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Event;
      hasTimestamp(): boolean;
      clearTimestamp(): Event;

      getLine(): GetJobStreamResponse.Terminal.Event.Line | undefined;
      setLine(value?: GetJobStreamResponse.Terminal.Event.Line): Event;
      hasLine(): boolean;
      clearLine(): Event;

      getStatus(): GetJobStreamResponse.Terminal.Event.Status | undefined;
      setStatus(value?: GetJobStreamResponse.Terminal.Event.Status): Event;
      hasStatus(): boolean;
      clearStatus(): Event;

      getNamedValues(): GetJobStreamResponse.Terminal.Event.NamedValues | undefined;
      setNamedValues(value?: GetJobStreamResponse.Terminal.Event.NamedValues): Event;
      hasNamedValues(): boolean;
      clearNamedValues(): Event;

      getRaw(): GetJobStreamResponse.Terminal.Event.Raw | undefined;
      setRaw(value?: GetJobStreamResponse.Terminal.Event.Raw): Event;
      hasRaw(): boolean;
      clearRaw(): Event;

      getTable(): GetJobStreamResponse.Terminal.Event.Table | undefined;
      setTable(value?: GetJobStreamResponse.Terminal.Event.Table): Event;
      hasTable(): boolean;
      clearTable(): Event;

      getStepGroup(): GetJobStreamResponse.Terminal.Event.StepGroup | undefined;
      setStepGroup(value?: GetJobStreamResponse.Terminal.Event.StepGroup): Event;
      hasStepGroup(): boolean;
      clearStepGroup(): Event;

      getStep(): GetJobStreamResponse.Terminal.Event.Step | undefined;
      setStep(value?: GetJobStreamResponse.Terminal.Event.Step): Event;
      hasStep(): boolean;
      clearStep(): Event;

      getEventCase(): Event.EventCase;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Event.AsObject;
      static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
      static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Event;
      static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
    }

    export namespace Event {
      export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        line?: GetJobStreamResponse.Terminal.Event.Line.AsObject,
        status?: GetJobStreamResponse.Terminal.Event.Status.AsObject,
        namedValues?: GetJobStreamResponse.Terminal.Event.NamedValues.AsObject,
        raw?: GetJobStreamResponse.Terminal.Event.Raw.AsObject,
        table?: GetJobStreamResponse.Terminal.Event.Table.AsObject,
        stepGroup?: GetJobStreamResponse.Terminal.Event.StepGroup.AsObject,
        step?: GetJobStreamResponse.Terminal.Event.Step.AsObject,
      }

      export class Status extends jspb.Message {
        getStatus(): string;
        setStatus(value: string): Status;

        getMsg(): string;
        setMsg(value: string): Status;

        getStep(): boolean;
        setStep(value: boolean): Status;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Status.AsObject;
        static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
        static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Status;
        static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
      }

      export namespace Status {
        export type AsObject = {
          status: string,
          msg: string,
          step: boolean,
        }
      }


      export class Line extends jspb.Message {
        getMsg(): string;
        setMsg(value: string): Line;

        getStyle(): string;
        setStyle(value: string): Line;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Line.AsObject;
        static toObject(includeInstance: boolean, msg: Line): Line.AsObject;
        static serializeBinaryToWriter(message: Line, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Line;
        static deserializeBinaryFromReader(message: Line, reader: jspb.BinaryReader): Line;
      }

      export namespace Line {
        export type AsObject = {
          msg: string,
          style: string,
        }
      }


      export class Raw extends jspb.Message {
        getData(): Uint8Array | string;
        getData_asU8(): Uint8Array;
        getData_asB64(): string;
        setData(value: Uint8Array | string): Raw;

        getStderr(): boolean;
        setStderr(value: boolean): Raw;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Raw.AsObject;
        static toObject(includeInstance: boolean, msg: Raw): Raw.AsObject;
        static serializeBinaryToWriter(message: Raw, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Raw;
        static deserializeBinaryFromReader(message: Raw, reader: jspb.BinaryReader): Raw;
      }

      export namespace Raw {
        export type AsObject = {
          data: Uint8Array | string,
          stderr: boolean,
        }
      }


      export class NamedValue extends jspb.Message {
        getName(): string;
        setName(value: string): NamedValue;

        getValue(): string;
        setValue(value: string): NamedValue;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NamedValue.AsObject;
        static toObject(includeInstance: boolean, msg: NamedValue): NamedValue.AsObject;
        static serializeBinaryToWriter(message: NamedValue, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NamedValue;
        static deserializeBinaryFromReader(message: NamedValue, reader: jspb.BinaryReader): NamedValue;
      }

      export namespace NamedValue {
        export type AsObject = {
          name: string,
          value: string,
        }
      }


      export class NamedValues extends jspb.Message {
        getValuesList(): Array<GetJobStreamResponse.Terminal.Event.NamedValue>;
        setValuesList(value: Array<GetJobStreamResponse.Terminal.Event.NamedValue>): NamedValues;
        clearValuesList(): NamedValues;
        addValues(value?: GetJobStreamResponse.Terminal.Event.NamedValue, index?: number): GetJobStreamResponse.Terminal.Event.NamedValue;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NamedValues.AsObject;
        static toObject(includeInstance: boolean, msg: NamedValues): NamedValues.AsObject;
        static serializeBinaryToWriter(message: NamedValues, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NamedValues;
        static deserializeBinaryFromReader(message: NamedValues, reader: jspb.BinaryReader): NamedValues;
      }

      export namespace NamedValues {
        export type AsObject = {
          valuesList: Array<GetJobStreamResponse.Terminal.Event.NamedValue.AsObject>,
        }
      }


      export class TableEntry extends jspb.Message {
        getValue(): string;
        setValue(value: string): TableEntry;

        getColor(): string;
        setColor(value: string): TableEntry;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TableEntry.AsObject;
        static toObject(includeInstance: boolean, msg: TableEntry): TableEntry.AsObject;
        static serializeBinaryToWriter(message: TableEntry, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TableEntry;
        static deserializeBinaryFromReader(message: TableEntry, reader: jspb.BinaryReader): TableEntry;
      }

      export namespace TableEntry {
        export type AsObject = {
          value: string,
          color: string,
        }
      }


      export class TableRow extends jspb.Message {
        getEntriesList(): Array<GetJobStreamResponse.Terminal.Event.TableEntry>;
        setEntriesList(value: Array<GetJobStreamResponse.Terminal.Event.TableEntry>): TableRow;
        clearEntriesList(): TableRow;
        addEntries(value?: GetJobStreamResponse.Terminal.Event.TableEntry, index?: number): GetJobStreamResponse.Terminal.Event.TableEntry;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TableRow.AsObject;
        static toObject(includeInstance: boolean, msg: TableRow): TableRow.AsObject;
        static serializeBinaryToWriter(message: TableRow, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TableRow;
        static deserializeBinaryFromReader(message: TableRow, reader: jspb.BinaryReader): TableRow;
      }

      export namespace TableRow {
        export type AsObject = {
          entriesList: Array<GetJobStreamResponse.Terminal.Event.TableEntry.AsObject>,
        }
      }


      export class Table extends jspb.Message {
        getHeadersList(): Array<string>;
        setHeadersList(value: Array<string>): Table;
        clearHeadersList(): Table;
        addHeaders(value: string, index?: number): Table;

        getRowsList(): Array<GetJobStreamResponse.Terminal.Event.TableRow>;
        setRowsList(value: Array<GetJobStreamResponse.Terminal.Event.TableRow>): Table;
        clearRowsList(): Table;
        addRows(value?: GetJobStreamResponse.Terminal.Event.TableRow, index?: number): GetJobStreamResponse.Terminal.Event.TableRow;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Table.AsObject;
        static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
        static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Table;
        static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
      }

      export namespace Table {
        export type AsObject = {
          headersList: Array<string>,
          rowsList: Array<GetJobStreamResponse.Terminal.Event.TableRow.AsObject>,
        }
      }


      export class StepGroup extends jspb.Message {
        getClose(): boolean;
        setClose(value: boolean): StepGroup;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StepGroup.AsObject;
        static toObject(includeInstance: boolean, msg: StepGroup): StepGroup.AsObject;
        static serializeBinaryToWriter(message: StepGroup, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StepGroup;
        static deserializeBinaryFromReader(message: StepGroup, reader: jspb.BinaryReader): StepGroup;
      }

      export namespace StepGroup {
        export type AsObject = {
          close: boolean,
        }
      }


      export class Step extends jspb.Message {
        getId(): number;
        setId(value: number): Step;

        getClose(): boolean;
        setClose(value: boolean): Step;

        getMsg(): string;
        setMsg(value: string): Step;

        getStatus(): string;
        setStatus(value: string): Step;

        getOutput(): Uint8Array | string;
        getOutput_asU8(): Uint8Array;
        getOutput_asB64(): string;
        setOutput(value: Uint8Array | string): Step;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Step.AsObject;
        static toObject(includeInstance: boolean, msg: Step): Step.AsObject;
        static serializeBinaryToWriter(message: Step, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Step;
        static deserializeBinaryFromReader(message: Step, reader: jspb.BinaryReader): Step;
      }

      export namespace Step {
        export type AsObject = {
          id: number,
          close: boolean,
          msg: string,
          status: string,
          output: Uint8Array | string,
        }
      }


      export enum EventCase { 
        EVENT_NOT_SET = 0,
        LINE = 2,
        STATUS = 3,
        NAMED_VALUES = 4,
        RAW = 5,
        TABLE = 6,
        STEP_GROUP = 7,
        STEP = 8,
      }
    }

  }


  export class Error extends jspb.Message {
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): Error;
    hasError(): boolean;
    clearError(): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      error?: google_rpc_status_pb.Status.AsObject,
    }
  }


  export class Complete extends jspb.Message {
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): Complete;
    hasError(): boolean;
    clearError(): Complete;

    getResult(): Job.Result | undefined;
    setResult(value?: Job.Result): Complete;
    hasResult(): boolean;
    clearResult(): Complete;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Complete.AsObject;
    static toObject(includeInstance: boolean, msg: Complete): Complete.AsObject;
    static serializeBinaryToWriter(message: Complete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Complete;
    static deserializeBinaryFromReader(message: Complete, reader: jspb.BinaryReader): Complete;
  }

  export namespace Complete {
    export type AsObject = {
      error?: google_rpc_status_pb.Status.AsObject,
      result?: Job.Result.AsObject,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    OPEN = 1,
    STATE = 2,
    TERMINAL = 3,
    ERROR = 4,
    COMPLETE = 5,
  }
}

export class Runner extends jspb.Message {
  getId(): string;
  setId(value: string): Runner;

  getByIdOnly(): boolean;
  setByIdOnly(value: boolean): Runner;

  getComponentsList(): Array<Component>;
  setComponentsList(value: Array<Component>): Runner;
  clearComponentsList(): Runner;
  addComponents(value?: Component, index?: number): Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Runner.AsObject;
  static toObject(includeInstance: boolean, msg: Runner): Runner.AsObject;
  static serializeBinaryToWriter(message: Runner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Runner;
  static deserializeBinaryFromReader(message: Runner, reader: jspb.BinaryReader): Runner;
}

export namespace Runner {
  export type AsObject = {
    id: string,
    byIdOnly: boolean,
    componentsList: Array<Component.AsObject>,
  }
}

export class RunnerConfigRequest extends jspb.Message {
  getOpen(): RunnerConfigRequest.Open | undefined;
  setOpen(value?: RunnerConfigRequest.Open): RunnerConfigRequest;
  hasOpen(): boolean;
  clearOpen(): RunnerConfigRequest;

  getEventCase(): RunnerConfigRequest.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunnerConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunnerConfigRequest): RunnerConfigRequest.AsObject;
  static serializeBinaryToWriter(message: RunnerConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunnerConfigRequest;
  static deserializeBinaryFromReader(message: RunnerConfigRequest, reader: jspb.BinaryReader): RunnerConfigRequest;
}

export namespace RunnerConfigRequest {
  export type AsObject = {
    open?: RunnerConfigRequest.Open.AsObject,
  }

  export class Open extends jspb.Message {
    getRunner(): Runner | undefined;
    setRunner(value?: Runner): Open;
    hasRunner(): boolean;
    clearRunner(): Open;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Open.AsObject;
    static toObject(includeInstance: boolean, msg: Open): Open.AsObject;
    static serializeBinaryToWriter(message: Open, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Open;
    static deserializeBinaryFromReader(message: Open, reader: jspb.BinaryReader): Open;
  }

  export namespace Open {
    export type AsObject = {
      runner?: Runner.AsObject,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    OPEN = 1,
  }
}

export class RunnerConfigResponse extends jspb.Message {
  getConfig(): RunnerConfig | undefined;
  setConfig(value?: RunnerConfig): RunnerConfigResponse;
  hasConfig(): boolean;
  clearConfig(): RunnerConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunnerConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunnerConfigResponse): RunnerConfigResponse.AsObject;
  static serializeBinaryToWriter(message: RunnerConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunnerConfigResponse;
  static deserializeBinaryFromReader(message: RunnerConfigResponse, reader: jspb.BinaryReader): RunnerConfigResponse;
}

export namespace RunnerConfigResponse {
  export type AsObject = {
    config?: RunnerConfig.AsObject,
  }
}

export class RunnerConfig extends jspb.Message {
  getConfigVarsList(): Array<ConfigVar>;
  setConfigVarsList(value: Array<ConfigVar>): RunnerConfig;
  clearConfigVarsList(): RunnerConfig;
  addConfigVars(value?: ConfigVar, index?: number): ConfigVar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunnerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RunnerConfig): RunnerConfig.AsObject;
  static serializeBinaryToWriter(message: RunnerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunnerConfig;
  static deserializeBinaryFromReader(message: RunnerConfig, reader: jspb.BinaryReader): RunnerConfig;
}

export namespace RunnerConfig {
  export type AsObject = {
    configVarsList: Array<ConfigVar.AsObject>,
  }
}

export class RunnerJobStreamRequest extends jspb.Message {
  getRequest(): RunnerJobStreamRequest.Request | undefined;
  setRequest(value?: RunnerJobStreamRequest.Request): RunnerJobStreamRequest;
  hasRequest(): boolean;
  clearRequest(): RunnerJobStreamRequest;

  getAck(): RunnerJobStreamRequest.Ack | undefined;
  setAck(value?: RunnerJobStreamRequest.Ack): RunnerJobStreamRequest;
  hasAck(): boolean;
  clearAck(): RunnerJobStreamRequest;

  getComplete(): RunnerJobStreamRequest.Complete | undefined;
  setComplete(value?: RunnerJobStreamRequest.Complete): RunnerJobStreamRequest;
  hasComplete(): boolean;
  clearComplete(): RunnerJobStreamRequest;

  getError(): RunnerJobStreamRequest.Error | undefined;
  setError(value?: RunnerJobStreamRequest.Error): RunnerJobStreamRequest;
  hasError(): boolean;
  clearError(): RunnerJobStreamRequest;

  getTerminal(): GetJobStreamResponse.Terminal | undefined;
  setTerminal(value?: GetJobStreamResponse.Terminal): RunnerJobStreamRequest;
  hasTerminal(): boolean;
  clearTerminal(): RunnerJobStreamRequest;

  getEventCase(): RunnerJobStreamRequest.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunnerJobStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunnerJobStreamRequest): RunnerJobStreamRequest.AsObject;
  static serializeBinaryToWriter(message: RunnerJobStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunnerJobStreamRequest;
  static deserializeBinaryFromReader(message: RunnerJobStreamRequest, reader: jspb.BinaryReader): RunnerJobStreamRequest;
}

export namespace RunnerJobStreamRequest {
  export type AsObject = {
    request?: RunnerJobStreamRequest.Request.AsObject,
    ack?: RunnerJobStreamRequest.Ack.AsObject,
    complete?: RunnerJobStreamRequest.Complete.AsObject,
    error?: RunnerJobStreamRequest.Error.AsObject,
    terminal?: GetJobStreamResponse.Terminal.AsObject,
  }

  export class Request extends jspb.Message {
    getRunnerId(): string;
    setRunnerId(value: string): Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      runnerId: string,
    }
  }


  export class Ack extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ack.AsObject;
    static toObject(includeInstance: boolean, msg: Ack): Ack.AsObject;
    static serializeBinaryToWriter(message: Ack, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ack;
    static deserializeBinaryFromReader(message: Ack, reader: jspb.BinaryReader): Ack;
  }

  export namespace Ack {
    export type AsObject = {
    }
  }


  export class Complete extends jspb.Message {
    getResult(): Job.Result | undefined;
    setResult(value?: Job.Result): Complete;
    hasResult(): boolean;
    clearResult(): Complete;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Complete.AsObject;
    static toObject(includeInstance: boolean, msg: Complete): Complete.AsObject;
    static serializeBinaryToWriter(message: Complete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Complete;
    static deserializeBinaryFromReader(message: Complete, reader: jspb.BinaryReader): Complete;
  }

  export namespace Complete {
    export type AsObject = {
      result?: Job.Result.AsObject,
    }
  }


  export class Error extends jspb.Message {
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): Error;
    hasError(): boolean;
    clearError(): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      error?: google_rpc_status_pb.Status.AsObject,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    REQUEST = 1,
    ACK = 2,
    COMPLETE = 3,
    ERROR = 4,
    TERMINAL = 5,
  }
}

export class RunnerJobStreamResponse extends jspb.Message {
  getAssignment(): RunnerJobStreamResponse.JobAssignment | undefined;
  setAssignment(value?: RunnerJobStreamResponse.JobAssignment): RunnerJobStreamResponse;
  hasAssignment(): boolean;
  clearAssignment(): RunnerJobStreamResponse;

  getEventCase(): RunnerJobStreamResponse.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunnerJobStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunnerJobStreamResponse): RunnerJobStreamResponse.AsObject;
  static serializeBinaryToWriter(message: RunnerJobStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunnerJobStreamResponse;
  static deserializeBinaryFromReader(message: RunnerJobStreamResponse, reader: jspb.BinaryReader): RunnerJobStreamResponse;
}

export namespace RunnerJobStreamResponse {
  export type AsObject = {
    assignment?: RunnerJobStreamResponse.JobAssignment.AsObject,
  }

  export class JobAssignment extends jspb.Message {
    getJob(): Job | undefined;
    setJob(value?: Job): JobAssignment;
    hasJob(): boolean;
    clearJob(): JobAssignment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JobAssignment.AsObject;
    static toObject(includeInstance: boolean, msg: JobAssignment): JobAssignment.AsObject;
    static serializeBinaryToWriter(message: JobAssignment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JobAssignment;
    static deserializeBinaryFromReader(message: JobAssignment, reader: jspb.BinaryReader): JobAssignment;
  }

  export namespace JobAssignment {
    export type AsObject = {
      job?: Job.AsObject,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    ASSIGNMENT = 1,
  }
}

export class RunnerGetDeploymentConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunnerGetDeploymentConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunnerGetDeploymentConfigRequest): RunnerGetDeploymentConfigRequest.AsObject;
  static serializeBinaryToWriter(message: RunnerGetDeploymentConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunnerGetDeploymentConfigRequest;
  static deserializeBinaryFromReader(message: RunnerGetDeploymentConfigRequest, reader: jspb.BinaryReader): RunnerGetDeploymentConfigRequest;
}

export namespace RunnerGetDeploymentConfigRequest {
  export type AsObject = {
  }
}

export class RunnerGetDeploymentConfigResponse extends jspb.Message {
  getServerAddr(): string;
  setServerAddr(value: string): RunnerGetDeploymentConfigResponse;

  getServerInsecure(): boolean;
  setServerInsecure(value: boolean): RunnerGetDeploymentConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunnerGetDeploymentConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunnerGetDeploymentConfigResponse): RunnerGetDeploymentConfigResponse.AsObject;
  static serializeBinaryToWriter(message: RunnerGetDeploymentConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunnerGetDeploymentConfigResponse;
  static deserializeBinaryFromReader(message: RunnerGetDeploymentConfigResponse, reader: jspb.BinaryReader): RunnerGetDeploymentConfigResponse;
}

export namespace RunnerGetDeploymentConfigResponse {
  export type AsObject = {
    serverAddr: string,
    serverInsecure: boolean,
  }
}

export class GetRunnerRequest extends jspb.Message {
  getRunnerId(): string;
  setRunnerId(value: string): GetRunnerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRunnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRunnerRequest): GetRunnerRequest.AsObject;
  static serializeBinaryToWriter(message: GetRunnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRunnerRequest;
  static deserializeBinaryFromReader(message: GetRunnerRequest, reader: jspb.BinaryReader): GetRunnerRequest;
}

export namespace GetRunnerRequest {
  export type AsObject = {
    runnerId: string,
  }
}

export class SetServerConfigRequest extends jspb.Message {
  getConfig(): ServerConfig | undefined;
  setConfig(value?: ServerConfig): SetServerConfigRequest;
  hasConfig(): boolean;
  clearConfig(): SetServerConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetServerConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetServerConfigRequest): SetServerConfigRequest.AsObject;
  static serializeBinaryToWriter(message: SetServerConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetServerConfigRequest;
  static deserializeBinaryFromReader(message: SetServerConfigRequest, reader: jspb.BinaryReader): SetServerConfigRequest;
}

export namespace SetServerConfigRequest {
  export type AsObject = {
    config?: ServerConfig.AsObject,
  }
}

export class ServerConfig extends jspb.Message {
  getAdvertiseAddrsList(): Array<ServerConfig.AdvertiseAddr>;
  setAdvertiseAddrsList(value: Array<ServerConfig.AdvertiseAddr>): ServerConfig;
  clearAdvertiseAddrsList(): ServerConfig;
  addAdvertiseAddrs(value?: ServerConfig.AdvertiseAddr, index?: number): ServerConfig.AdvertiseAddr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ServerConfig): ServerConfig.AsObject;
  static serializeBinaryToWriter(message: ServerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerConfig;
  static deserializeBinaryFromReader(message: ServerConfig, reader: jspb.BinaryReader): ServerConfig;
}

export namespace ServerConfig {
  export type AsObject = {
    advertiseAddrsList: Array<ServerConfig.AdvertiseAddr.AsObject>,
  }

  export class AdvertiseAddr extends jspb.Message {
    getAddr(): string;
    setAddr(value: string): AdvertiseAddr;

    getInsecure(): boolean;
    setInsecure(value: boolean): AdvertiseAddr;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdvertiseAddr.AsObject;
    static toObject(includeInstance: boolean, msg: AdvertiseAddr): AdvertiseAddr.AsObject;
    static serializeBinaryToWriter(message: AdvertiseAddr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdvertiseAddr;
    static deserializeBinaryFromReader(message: AdvertiseAddr, reader: jspb.BinaryReader): AdvertiseAddr;
  }

  export namespace AdvertiseAddr {
    export type AsObject = {
      addr: string,
      insecure: boolean,
    }
  }

}

export class CreateHostnameRequest extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): CreateHostnameRequest;

  getTarget(): Hostname.Target | undefined;
  setTarget(value?: Hostname.Target): CreateHostnameRequest;
  hasTarget(): boolean;
  clearTarget(): CreateHostnameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHostnameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHostnameRequest): CreateHostnameRequest.AsObject;
  static serializeBinaryToWriter(message: CreateHostnameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHostnameRequest;
  static deserializeBinaryFromReader(message: CreateHostnameRequest, reader: jspb.BinaryReader): CreateHostnameRequest;
}

export namespace CreateHostnameRequest {
  export type AsObject = {
    hostname: string,
    target?: Hostname.Target.AsObject,
  }
}

export class CreateHostnameResponse extends jspb.Message {
  getHostname(): Hostname | undefined;
  setHostname(value?: Hostname): CreateHostnameResponse;
  hasHostname(): boolean;
  clearHostname(): CreateHostnameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHostnameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHostnameResponse): CreateHostnameResponse.AsObject;
  static serializeBinaryToWriter(message: CreateHostnameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHostnameResponse;
  static deserializeBinaryFromReader(message: CreateHostnameResponse, reader: jspb.BinaryReader): CreateHostnameResponse;
}

export namespace CreateHostnameResponse {
  export type AsObject = {
    hostname?: Hostname.AsObject,
  }
}

export class ListHostnamesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHostnamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListHostnamesRequest): ListHostnamesRequest.AsObject;
  static serializeBinaryToWriter(message: ListHostnamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHostnamesRequest;
  static deserializeBinaryFromReader(message: ListHostnamesRequest, reader: jspb.BinaryReader): ListHostnamesRequest;
}

export namespace ListHostnamesRequest {
  export type AsObject = {
  }
}

export class ListHostnamesResponse extends jspb.Message {
  getHostnamesList(): Array<Hostname>;
  setHostnamesList(value: Array<Hostname>): ListHostnamesResponse;
  clearHostnamesList(): ListHostnamesResponse;
  addHostnames(value?: Hostname, index?: number): Hostname;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHostnamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListHostnamesResponse): ListHostnamesResponse.AsObject;
  static serializeBinaryToWriter(message: ListHostnamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHostnamesResponse;
  static deserializeBinaryFromReader(message: ListHostnamesResponse, reader: jspb.BinaryReader): ListHostnamesResponse;
}

export namespace ListHostnamesResponse {
  export type AsObject = {
    hostnamesList: Array<Hostname.AsObject>,
  }
}

export class DeleteHostnameRequest extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): DeleteHostnameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHostnameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHostnameRequest): DeleteHostnameRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteHostnameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHostnameRequest;
  static deserializeBinaryFromReader(message: DeleteHostnameRequest, reader: jspb.BinaryReader): DeleteHostnameRequest;
}

export namespace DeleteHostnameRequest {
  export type AsObject = {
    hostname: string,
  }
}

export class Hostname extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): Hostname;

  getFqdn(): string;
  setFqdn(value: string): Hostname;

  getTargetLabelsMap(): jspb.Map<string, string>;
  clearTargetLabelsMap(): Hostname;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hostname.AsObject;
  static toObject(includeInstance: boolean, msg: Hostname): Hostname.AsObject;
  static serializeBinaryToWriter(message: Hostname, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hostname;
  static deserializeBinaryFromReader(message: Hostname, reader: jspb.BinaryReader): Hostname;
}

export namespace Hostname {
  export type AsObject = {
    hostname: string,
    fqdn: string,
    targetLabelsMap: Array<[string, string]>,
  }

  export class Target extends jspb.Message {
    getApplication(): Hostname.TargetApp | undefined;
    setApplication(value?: Hostname.TargetApp): Target;
    hasApplication(): boolean;
    clearApplication(): Target;

    getTargetCase(): Target.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Target.AsObject;
    static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
    static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Target;
    static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
  }

  export namespace Target {
    export type AsObject = {
      application?: Hostname.TargetApp.AsObject,
    }

    export enum TargetCase { 
      TARGET_NOT_SET = 0,
      APPLICATION = 20,
    }
  }


  export class TargetApp extends jspb.Message {
    getApplication(): Ref.Application | undefined;
    setApplication(value?: Ref.Application): TargetApp;
    hasApplication(): boolean;
    clearApplication(): TargetApp;

    getWorkspace(): Ref.Workspace | undefined;
    setWorkspace(value?: Ref.Workspace): TargetApp;
    hasWorkspace(): boolean;
    clearWorkspace(): TargetApp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetApp.AsObject;
    static toObject(includeInstance: boolean, msg: TargetApp): TargetApp.AsObject;
    static serializeBinaryToWriter(message: TargetApp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetApp;
    static deserializeBinaryFromReader(message: TargetApp, reader: jspb.BinaryReader): TargetApp;
  }

  export namespace TargetApp {
    export type AsObject = {
      application?: Ref.Application.AsObject,
      workspace?: Ref.Workspace.AsObject,
    }
  }

}

export class UpsertProjectRequest extends jspb.Message {
  getProject(): Project | undefined;
  setProject(value?: Project): UpsertProjectRequest;
  hasProject(): boolean;
  clearProject(): UpsertProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertProjectRequest): UpsertProjectRequest.AsObject;
  static serializeBinaryToWriter(message: UpsertProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertProjectRequest;
  static deserializeBinaryFromReader(message: UpsertProjectRequest, reader: jspb.BinaryReader): UpsertProjectRequest;
}

export namespace UpsertProjectRequest {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class UpsertProjectResponse extends jspb.Message {
  getProject(): Project | undefined;
  setProject(value?: Project): UpsertProjectResponse;
  hasProject(): boolean;
  clearProject(): UpsertProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertProjectResponse): UpsertProjectResponse.AsObject;
  static serializeBinaryToWriter(message: UpsertProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertProjectResponse;
  static deserializeBinaryFromReader(message: UpsertProjectResponse, reader: jspb.BinaryReader): UpsertProjectResponse;
}

export namespace UpsertProjectResponse {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class GetProjectRequest extends jspb.Message {
  getProject(): Ref.Project | undefined;
  setProject(value?: Ref.Project): GetProjectRequest;
  hasProject(): boolean;
  clearProject(): GetProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectRequest): GetProjectRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectRequest;
  static deserializeBinaryFromReader(message: GetProjectRequest, reader: jspb.BinaryReader): GetProjectRequest;
}

export namespace GetProjectRequest {
  export type AsObject = {
    project?: Ref.Project.AsObject,
  }
}

export class GetProjectResponse extends jspb.Message {
  getProject(): Project | undefined;
  setProject(value?: Project): GetProjectResponse;
  hasProject(): boolean;
  clearProject(): GetProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectResponse): GetProjectResponse.AsObject;
  static serializeBinaryToWriter(message: GetProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectResponse;
  static deserializeBinaryFromReader(message: GetProjectResponse, reader: jspb.BinaryReader): GetProjectResponse;
}

export namespace GetProjectResponse {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class ListProjectsResponse extends jspb.Message {
  getProjectsList(): Array<Ref.Project>;
  setProjectsList(value: Array<Ref.Project>): ListProjectsResponse;
  clearProjectsList(): ListProjectsResponse;
  addProjects(value?: Ref.Project, index?: number): Ref.Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectsResponse): ListProjectsResponse.AsObject;
  static serializeBinaryToWriter(message: ListProjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectsResponse;
  static deserializeBinaryFromReader(message: ListProjectsResponse, reader: jspb.BinaryReader): ListProjectsResponse;
}

export namespace ListProjectsResponse {
  export type AsObject = {
    projectsList: Array<Ref.Project.AsObject>,
  }
}

export class UpsertApplicationRequest extends jspb.Message {
  getProject(): Ref.Project | undefined;
  setProject(value?: Ref.Project): UpsertApplicationRequest;
  hasProject(): boolean;
  clearProject(): UpsertApplicationRequest;

  getName(): string;
  setName(value: string): UpsertApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertApplicationRequest): UpsertApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: UpsertApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertApplicationRequest;
  static deserializeBinaryFromReader(message: UpsertApplicationRequest, reader: jspb.BinaryReader): UpsertApplicationRequest;
}

export namespace UpsertApplicationRequest {
  export type AsObject = {
    project?: Ref.Project.AsObject,
    name: string,
  }
}

export class UpsertApplicationResponse extends jspb.Message {
  getApplication(): Application | undefined;
  setApplication(value?: Application): UpsertApplicationResponse;
  hasApplication(): boolean;
  clearApplication(): UpsertApplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertApplicationResponse): UpsertApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: UpsertApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertApplicationResponse;
  static deserializeBinaryFromReader(message: UpsertApplicationResponse, reader: jspb.BinaryReader): UpsertApplicationResponse;
}

export namespace UpsertApplicationResponse {
  export type AsObject = {
    application?: Application.AsObject,
  }
}

export class UpsertBuildRequest extends jspb.Message {
  getBuild(): Build | undefined;
  setBuild(value?: Build): UpsertBuildRequest;
  hasBuild(): boolean;
  clearBuild(): UpsertBuildRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertBuildRequest): UpsertBuildRequest.AsObject;
  static serializeBinaryToWriter(message: UpsertBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertBuildRequest;
  static deserializeBinaryFromReader(message: UpsertBuildRequest, reader: jspb.BinaryReader): UpsertBuildRequest;
}

export namespace UpsertBuildRequest {
  export type AsObject = {
    build?: Build.AsObject,
  }
}

export class UpsertBuildResponse extends jspb.Message {
  getBuild(): Build | undefined;
  setBuild(value?: Build): UpsertBuildResponse;
  hasBuild(): boolean;
  clearBuild(): UpsertBuildResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertBuildResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertBuildResponse): UpsertBuildResponse.AsObject;
  static serializeBinaryToWriter(message: UpsertBuildResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertBuildResponse;
  static deserializeBinaryFromReader(message: UpsertBuildResponse, reader: jspb.BinaryReader): UpsertBuildResponse;
}

export namespace UpsertBuildResponse {
  export type AsObject = {
    build?: Build.AsObject,
  }
}

export class ListBuildsRequest extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): ListBuildsRequest;
  hasApplication(): boolean;
  clearApplication(): ListBuildsRequest;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): ListBuildsRequest;
  hasWorkspace(): boolean;
  clearWorkspace(): ListBuildsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildsRequest): ListBuildsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBuildsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildsRequest;
  static deserializeBinaryFromReader(message: ListBuildsRequest, reader: jspb.BinaryReader): ListBuildsRequest;
}

export namespace ListBuildsRequest {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
  }
}

export class ListBuildsResponse extends jspb.Message {
  getBuildsList(): Array<Build>;
  setBuildsList(value: Array<Build>): ListBuildsResponse;
  clearBuildsList(): ListBuildsResponse;
  addBuilds(value?: Build, index?: number): Build;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildsResponse): ListBuildsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBuildsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildsResponse;
  static deserializeBinaryFromReader(message: ListBuildsResponse, reader: jspb.BinaryReader): ListBuildsResponse;
}

export namespace ListBuildsResponse {
  export type AsObject = {
    buildsList: Array<Build.AsObject>,
  }
}

export class GetLatestBuildRequest extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): GetLatestBuildRequest;
  hasApplication(): boolean;
  clearApplication(): GetLatestBuildRequest;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): GetLatestBuildRequest;
  hasWorkspace(): boolean;
  clearWorkspace(): GetLatestBuildRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestBuildRequest): GetLatestBuildRequest.AsObject;
  static serializeBinaryToWriter(message: GetLatestBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestBuildRequest;
  static deserializeBinaryFromReader(message: GetLatestBuildRequest, reader: jspb.BinaryReader): GetLatestBuildRequest;
}

export namespace GetLatestBuildRequest {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
  }
}

export class Build extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): Build;
  hasApplication(): boolean;
  clearApplication(): Build;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): Build;
  hasWorkspace(): boolean;
  clearWorkspace(): Build;

  getId(): string;
  setId(value: string): Build;

  getStatus(): Status | undefined;
  setStatus(value?: Status): Build;
  hasStatus(): boolean;
  clearStatus(): Build;

  getComponent(): Component | undefined;
  setComponent(value?: Component): Build;
  hasComponent(): boolean;
  clearComponent(): Build;

  getArtifact(): Artifact | undefined;
  setArtifact(value?: Artifact): Build;
  hasArtifact(): boolean;
  clearArtifact(): Build;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Build;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Build.AsObject;
  static toObject(includeInstance: boolean, msg: Build): Build.AsObject;
  static serializeBinaryToWriter(message: Build, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Build;
  static deserializeBinaryFromReader(message: Build, reader: jspb.BinaryReader): Build;
}

export namespace Build {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
    id: string,
    status?: Status.AsObject,
    component?: Component.AsObject,
    artifact?: Artifact.AsObject,
    labelsMap: Array<[string, string]>,
  }
}

export class Artifact extends jspb.Message {
  getArtifact(): google_protobuf_any_pb.Any | undefined;
  setArtifact(value?: google_protobuf_any_pb.Any): Artifact;
  hasArtifact(): boolean;
  clearArtifact(): Artifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifact.AsObject;
  static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
  static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifact;
  static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
  export type AsObject = {
    artifact?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class UpsertPushedArtifactRequest extends jspb.Message {
  getArtifact(): PushedArtifact | undefined;
  setArtifact(value?: PushedArtifact): UpsertPushedArtifactRequest;
  hasArtifact(): boolean;
  clearArtifact(): UpsertPushedArtifactRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPushedArtifactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPushedArtifactRequest): UpsertPushedArtifactRequest.AsObject;
  static serializeBinaryToWriter(message: UpsertPushedArtifactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPushedArtifactRequest;
  static deserializeBinaryFromReader(message: UpsertPushedArtifactRequest, reader: jspb.BinaryReader): UpsertPushedArtifactRequest;
}

export namespace UpsertPushedArtifactRequest {
  export type AsObject = {
    artifact?: PushedArtifact.AsObject,
  }
}

export class UpsertPushedArtifactResponse extends jspb.Message {
  getArtifact(): PushedArtifact | undefined;
  setArtifact(value?: PushedArtifact): UpsertPushedArtifactResponse;
  hasArtifact(): boolean;
  clearArtifact(): UpsertPushedArtifactResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPushedArtifactResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPushedArtifactResponse): UpsertPushedArtifactResponse.AsObject;
  static serializeBinaryToWriter(message: UpsertPushedArtifactResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPushedArtifactResponse;
  static deserializeBinaryFromReader(message: UpsertPushedArtifactResponse, reader: jspb.BinaryReader): UpsertPushedArtifactResponse;
}

export namespace UpsertPushedArtifactResponse {
  export type AsObject = {
    artifact?: PushedArtifact.AsObject,
  }
}

export class GetLatestPushedArtifactRequest extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): GetLatestPushedArtifactRequest;
  hasApplication(): boolean;
  clearApplication(): GetLatestPushedArtifactRequest;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): GetLatestPushedArtifactRequest;
  hasWorkspace(): boolean;
  clearWorkspace(): GetLatestPushedArtifactRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestPushedArtifactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestPushedArtifactRequest): GetLatestPushedArtifactRequest.AsObject;
  static serializeBinaryToWriter(message: GetLatestPushedArtifactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestPushedArtifactRequest;
  static deserializeBinaryFromReader(message: GetLatestPushedArtifactRequest, reader: jspb.BinaryReader): GetLatestPushedArtifactRequest;
}

export namespace GetLatestPushedArtifactRequest {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
  }
}

export class ListPushedArtifactsRequest extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): ListPushedArtifactsRequest;
  hasApplication(): boolean;
  clearApplication(): ListPushedArtifactsRequest;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): ListPushedArtifactsRequest;
  hasWorkspace(): boolean;
  clearWorkspace(): ListPushedArtifactsRequest;

  getStatusList(): Array<StatusFilter>;
  setStatusList(value: Array<StatusFilter>): ListPushedArtifactsRequest;
  clearStatusList(): ListPushedArtifactsRequest;
  addStatus(value?: StatusFilter, index?: number): StatusFilter;

  getOrder(): OperationOrder | undefined;
  setOrder(value?: OperationOrder): ListPushedArtifactsRequest;
  hasOrder(): boolean;
  clearOrder(): ListPushedArtifactsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPushedArtifactsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPushedArtifactsRequest): ListPushedArtifactsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPushedArtifactsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPushedArtifactsRequest;
  static deserializeBinaryFromReader(message: ListPushedArtifactsRequest, reader: jspb.BinaryReader): ListPushedArtifactsRequest;
}

export namespace ListPushedArtifactsRequest {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
    statusList: Array<StatusFilter.AsObject>,
    order?: OperationOrder.AsObject,
  }
}

export class ListPushedArtifactsResponse extends jspb.Message {
  getArtifactsList(): Array<PushedArtifact>;
  setArtifactsList(value: Array<PushedArtifact>): ListPushedArtifactsResponse;
  clearArtifactsList(): ListPushedArtifactsResponse;
  addArtifacts(value?: PushedArtifact, index?: number): PushedArtifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPushedArtifactsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPushedArtifactsResponse): ListPushedArtifactsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPushedArtifactsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPushedArtifactsResponse;
  static deserializeBinaryFromReader(message: ListPushedArtifactsResponse, reader: jspb.BinaryReader): ListPushedArtifactsResponse;
}

export namespace ListPushedArtifactsResponse {
  export type AsObject = {
    artifactsList: Array<PushedArtifact.AsObject>,
  }
}

export class PushedArtifact extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): PushedArtifact;
  hasApplication(): boolean;
  clearApplication(): PushedArtifact;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): PushedArtifact;
  hasWorkspace(): boolean;
  clearWorkspace(): PushedArtifact;

  getId(): string;
  setId(value: string): PushedArtifact;

  getStatus(): Status | undefined;
  setStatus(value?: Status): PushedArtifact;
  hasStatus(): boolean;
  clearStatus(): PushedArtifact;

  getComponent(): Component | undefined;
  setComponent(value?: Component): PushedArtifact;
  hasComponent(): boolean;
  clearComponent(): PushedArtifact;

  getArtifact(): Artifact | undefined;
  setArtifact(value?: Artifact): PushedArtifact;
  hasArtifact(): boolean;
  clearArtifact(): PushedArtifact;

  getBuildId(): string;
  setBuildId(value: string): PushedArtifact;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): PushedArtifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushedArtifact.AsObject;
  static toObject(includeInstance: boolean, msg: PushedArtifact): PushedArtifact.AsObject;
  static serializeBinaryToWriter(message: PushedArtifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushedArtifact;
  static deserializeBinaryFromReader(message: PushedArtifact, reader: jspb.BinaryReader): PushedArtifact;
}

export namespace PushedArtifact {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
    id: string,
    status?: Status.AsObject,
    component?: Component.AsObject,
    artifact?: Artifact.AsObject,
    buildId: string,
    labelsMap: Array<[string, string]>,
  }
}

export class GetDeploymentRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): GetDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentRequest): GetDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: GetDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentRequest;
  static deserializeBinaryFromReader(message: GetDeploymentRequest, reader: jspb.BinaryReader): GetDeploymentRequest;
}

export namespace GetDeploymentRequest {
  export type AsObject = {
    deploymentId: string,
  }
}

export class UpsertDeploymentRequest extends jspb.Message {
  getDeployment(): Deployment | undefined;
  setDeployment(value?: Deployment): UpsertDeploymentRequest;
  hasDeployment(): boolean;
  clearDeployment(): UpsertDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertDeploymentRequest): UpsertDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: UpsertDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertDeploymentRequest;
  static deserializeBinaryFromReader(message: UpsertDeploymentRequest, reader: jspb.BinaryReader): UpsertDeploymentRequest;
}

export namespace UpsertDeploymentRequest {
  export type AsObject = {
    deployment?: Deployment.AsObject,
  }
}

export class UpsertDeploymentResponse extends jspb.Message {
  getDeployment(): Deployment | undefined;
  setDeployment(value?: Deployment): UpsertDeploymentResponse;
  hasDeployment(): boolean;
  clearDeployment(): UpsertDeploymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertDeploymentResponse): UpsertDeploymentResponse.AsObject;
  static serializeBinaryToWriter(message: UpsertDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertDeploymentResponse;
  static deserializeBinaryFromReader(message: UpsertDeploymentResponse, reader: jspb.BinaryReader): UpsertDeploymentResponse;
}

export namespace UpsertDeploymentResponse {
  export type AsObject = {
    deployment?: Deployment.AsObject,
  }
}

export class ListDeploymentsRequest extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): ListDeploymentsRequest;
  hasApplication(): boolean;
  clearApplication(): ListDeploymentsRequest;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): ListDeploymentsRequest;
  hasWorkspace(): boolean;
  clearWorkspace(): ListDeploymentsRequest;

  getStatusList(): Array<StatusFilter>;
  setStatusList(value: Array<StatusFilter>): ListDeploymentsRequest;
  clearStatusList(): ListDeploymentsRequest;
  addStatus(value?: StatusFilter, index?: number): StatusFilter;

  getOrder(): OperationOrder | undefined;
  setOrder(value?: OperationOrder): ListDeploymentsRequest;
  hasOrder(): boolean;
  clearOrder(): ListDeploymentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeploymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeploymentsRequest): ListDeploymentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDeploymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeploymentsRequest;
  static deserializeBinaryFromReader(message: ListDeploymentsRequest, reader: jspb.BinaryReader): ListDeploymentsRequest;
}

export namespace ListDeploymentsRequest {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
    statusList: Array<StatusFilter.AsObject>,
    order?: OperationOrder.AsObject,
  }
}

export class ListDeploymentsResponse extends jspb.Message {
  getDeploymentsList(): Array<Deployment>;
  setDeploymentsList(value: Array<Deployment>): ListDeploymentsResponse;
  clearDeploymentsList(): ListDeploymentsResponse;
  addDeployments(value?: Deployment, index?: number): Deployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeploymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeploymentsResponse): ListDeploymentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDeploymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeploymentsResponse;
  static deserializeBinaryFromReader(message: ListDeploymentsResponse, reader: jspb.BinaryReader): ListDeploymentsResponse;
}

export namespace ListDeploymentsResponse {
  export type AsObject = {
    deploymentsList: Array<Deployment.AsObject>,
  }
}

export class Deployment extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): Deployment;
  hasApplication(): boolean;
  clearApplication(): Deployment;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): Deployment;
  hasWorkspace(): boolean;
  clearWorkspace(): Deployment;

  getId(): string;
  setId(value: string): Deployment;

  getState(): Deployment.State;
  setState(value: Deployment.State): Deployment;

  getStatus(): Status | undefined;
  setStatus(value?: Status): Deployment;
  hasStatus(): boolean;
  clearStatus(): Deployment;

  getComponent(): Component | undefined;
  setComponent(value?: Component): Deployment;
  hasComponent(): boolean;
  clearComponent(): Deployment;

  getArtifactId(): string;
  setArtifactId(value: string): Deployment;

  getDeployment(): google_protobuf_any_pb.Any | undefined;
  setDeployment(value?: google_protobuf_any_pb.Any): Deployment;
  hasDeployment(): boolean;
  clearDeployment(): Deployment;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Deployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployment.AsObject;
  static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
  static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployment;
  static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
}

export namespace Deployment {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
    id: string,
    state: Deployment.State,
    status?: Status.AsObject,
    component?: Component.AsObject,
    artifactId: string,
    deployment?: google_protobuf_any_pb.Any.AsObject,
    labelsMap: Array<[string, string]>,
  }

  export enum State { 
    UNKNOWN = 0,
    PENDING = 1,
    DEPLOY = 3,
    DESTROY = 4,
  }
}

export class UpsertReleaseRequest extends jspb.Message {
  getRelease(): Release | undefined;
  setRelease(value?: Release): UpsertReleaseRequest;
  hasRelease(): boolean;
  clearRelease(): UpsertReleaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertReleaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertReleaseRequest): UpsertReleaseRequest.AsObject;
  static serializeBinaryToWriter(message: UpsertReleaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertReleaseRequest;
  static deserializeBinaryFromReader(message: UpsertReleaseRequest, reader: jspb.BinaryReader): UpsertReleaseRequest;
}

export namespace UpsertReleaseRequest {
  export type AsObject = {
    release?: Release.AsObject,
  }
}

export class UpsertReleaseResponse extends jspb.Message {
  getRelease(): Release | undefined;
  setRelease(value?: Release): UpsertReleaseResponse;
  hasRelease(): boolean;
  clearRelease(): UpsertReleaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertReleaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertReleaseResponse): UpsertReleaseResponse.AsObject;
  static serializeBinaryToWriter(message: UpsertReleaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertReleaseResponse;
  static deserializeBinaryFromReader(message: UpsertReleaseResponse, reader: jspb.BinaryReader): UpsertReleaseResponse;
}

export namespace UpsertReleaseResponse {
  export type AsObject = {
    release?: Release.AsObject,
  }
}

export class Release extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): Release;
  hasApplication(): boolean;
  clearApplication(): Release;

  getWorkspace(): Ref.Workspace | undefined;
  setWorkspace(value?: Ref.Workspace): Release;
  hasWorkspace(): boolean;
  clearWorkspace(): Release;

  getId(): string;
  setId(value: string): Release;

  getStatus(): Status | undefined;
  setStatus(value?: Status): Release;
  hasStatus(): boolean;
  clearStatus(): Release;

  getComponent(): Component | undefined;
  setComponent(value?: Component): Release;
  hasComponent(): boolean;
  clearComponent(): Release;

  getRelease(): google_protobuf_any_pb.Any | undefined;
  setRelease(value?: google_protobuf_any_pb.Any): Release;
  hasRelease(): boolean;
  clearRelease(): Release;

  getTrafficSplit(): Release.Split | undefined;
  setTrafficSplit(value?: Release.Split): Release;
  hasTrafficSplit(): boolean;
  clearTrafficSplit(): Release;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): Release;

  getUrl(): string;
  setUrl(value: string): Release;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Release.AsObject;
  static toObject(includeInstance: boolean, msg: Release): Release.AsObject;
  static serializeBinaryToWriter(message: Release, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Release;
  static deserializeBinaryFromReader(message: Release, reader: jspb.BinaryReader): Release;
}

export namespace Release {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    workspace?: Ref.Workspace.AsObject,
    id: string,
    status?: Status.AsObject,
    component?: Component.AsObject,
    release?: google_protobuf_any_pb.Any.AsObject,
    trafficSplit?: Release.Split.AsObject,
    labelsMap: Array<[string, string]>,
    url: string,
  }

  export class Split extends jspb.Message {
    getTargetsList(): Array<Release.SplitTarget>;
    setTargetsList(value: Array<Release.SplitTarget>): Split;
    clearTargetsList(): Split;
    addTargets(value?: Release.SplitTarget, index?: number): Release.SplitTarget;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Split.AsObject;
    static toObject(includeInstance: boolean, msg: Split): Split.AsObject;
    static serializeBinaryToWriter(message: Split, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Split;
    static deserializeBinaryFromReader(message: Split, reader: jspb.BinaryReader): Split;
  }

  export namespace Split {
    export type AsObject = {
      targetsList: Array<Release.SplitTarget.AsObject>,
    }
  }


  export class SplitTarget extends jspb.Message {
    getDeploymentId(): string;
    setDeploymentId(value: string): SplitTarget;

    getPercent(): number;
    setPercent(value: number): SplitTarget;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SplitTarget.AsObject;
    static toObject(includeInstance: boolean, msg: SplitTarget): SplitTarget.AsObject;
    static serializeBinaryToWriter(message: SplitTarget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SplitTarget;
    static deserializeBinaryFromReader(message: SplitTarget, reader: jspb.BinaryReader): SplitTarget;
  }

  export namespace SplitTarget {
    export type AsObject = {
      deploymentId: string,
      percent: number,
    }
  }

}

export class GetLogStreamRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): GetLogStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogStreamRequest): GetLogStreamRequest.AsObject;
  static serializeBinaryToWriter(message: GetLogStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogStreamRequest;
  static deserializeBinaryFromReader(message: GetLogStreamRequest, reader: jspb.BinaryReader): GetLogStreamRequest;
}

export namespace GetLogStreamRequest {
  export type AsObject = {
    deploymentId: string,
  }
}

export class LogBatch extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): LogBatch;

  getInstanceId(): string;
  setInstanceId(value: string): LogBatch;

  getLinesList(): Array<LogBatch.Entry>;
  setLinesList(value: Array<LogBatch.Entry>): LogBatch;
  clearLinesList(): LogBatch;
  addLines(value?: LogBatch.Entry, index?: number): LogBatch.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogBatch.AsObject;
  static toObject(includeInstance: boolean, msg: LogBatch): LogBatch.AsObject;
  static serializeBinaryToWriter(message: LogBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogBatch;
  static deserializeBinaryFromReader(message: LogBatch, reader: jspb.BinaryReader): LogBatch;
}

export namespace LogBatch {
  export type AsObject = {
    deploymentId: string,
    instanceId: string,
    linesList: Array<LogBatch.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Entry;
    hasTimestamp(): boolean;
    clearTimestamp(): Entry;

    getLine(): string;
    setLine(value: string): Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      line: string,
    }
  }

}

export class ConfigVar extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): ConfigVar;
  hasApplication(): boolean;
  clearApplication(): ConfigVar;

  getProject(): Ref.Project | undefined;
  setProject(value?: Ref.Project): ConfigVar;
  hasProject(): boolean;
  clearProject(): ConfigVar;

  getRunner(): Ref.Runner | undefined;
  setRunner(value?: Ref.Runner): ConfigVar;
  hasRunner(): boolean;
  clearRunner(): ConfigVar;

  getName(): string;
  setName(value: string): ConfigVar;

  getValue(): string;
  setValue(value: string): ConfigVar;

  getScopeCase(): ConfigVar.ScopeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigVar.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigVar): ConfigVar.AsObject;
  static serializeBinaryToWriter(message: ConfigVar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigVar;
  static deserializeBinaryFromReader(message: ConfigVar, reader: jspb.BinaryReader): ConfigVar;
}

export namespace ConfigVar {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    project?: Ref.Project.AsObject,
    runner?: Ref.Runner.AsObject,
    name: string,
    value: string,
  }

  export enum ScopeCase { 
    SCOPE_NOT_SET = 0,
    APPLICATION = 3,
    PROJECT = 4,
    RUNNER = 5,
  }
}

export class ConfigSetRequest extends jspb.Message {
  getVariablesList(): Array<ConfigVar>;
  setVariablesList(value: Array<ConfigVar>): ConfigSetRequest;
  clearVariablesList(): ConfigSetRequest;
  addVariables(value?: ConfigVar, index?: number): ConfigVar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSetRequest): ConfigSetRequest.AsObject;
  static serializeBinaryToWriter(message: ConfigSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSetRequest;
  static deserializeBinaryFromReader(message: ConfigSetRequest, reader: jspb.BinaryReader): ConfigSetRequest;
}

export namespace ConfigSetRequest {
  export type AsObject = {
    variablesList: Array<ConfigVar.AsObject>,
  }
}

export class ConfigSetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSetResponse): ConfigSetResponse.AsObject;
  static serializeBinaryToWriter(message: ConfigSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSetResponse;
  static deserializeBinaryFromReader(message: ConfigSetResponse, reader: jspb.BinaryReader): ConfigSetResponse;
}

export namespace ConfigSetResponse {
  export type AsObject = {
  }
}

export class ConfigGetRequest extends jspb.Message {
  getApplication(): Ref.Application | undefined;
  setApplication(value?: Ref.Application): ConfigGetRequest;
  hasApplication(): boolean;
  clearApplication(): ConfigGetRequest;

  getProject(): Ref.Project | undefined;
  setProject(value?: Ref.Project): ConfigGetRequest;
  hasProject(): boolean;
  clearProject(): ConfigGetRequest;

  getRunner(): Ref.RunnerId | undefined;
  setRunner(value?: Ref.RunnerId): ConfigGetRequest;
  hasRunner(): boolean;
  clearRunner(): ConfigGetRequest;

  getPrefix(): string;
  setPrefix(value: string): ConfigGetRequest;

  getScopeCase(): ConfigGetRequest.ScopeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigGetRequest): ConfigGetRequest.AsObject;
  static serializeBinaryToWriter(message: ConfigGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigGetRequest;
  static deserializeBinaryFromReader(message: ConfigGetRequest, reader: jspb.BinaryReader): ConfigGetRequest;
}

export namespace ConfigGetRequest {
  export type AsObject = {
    application?: Ref.Application.AsObject,
    project?: Ref.Project.AsObject,
    runner?: Ref.RunnerId.AsObject,
    prefix: string,
  }

  export enum ScopeCase { 
    SCOPE_NOT_SET = 0,
    APPLICATION = 2,
    PROJECT = 3,
    RUNNER = 4,
  }
}

export class ConfigGetResponse extends jspb.Message {
  getVariablesList(): Array<ConfigVar>;
  setVariablesList(value: Array<ConfigVar>): ConfigGetResponse;
  clearVariablesList(): ConfigGetResponse;
  addVariables(value?: ConfigVar, index?: number): ConfigVar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigGetResponse): ConfigGetResponse.AsObject;
  static serializeBinaryToWriter(message: ConfigGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigGetResponse;
  static deserializeBinaryFromReader(message: ConfigGetResponse, reader: jspb.BinaryReader): ConfigGetResponse;
}

export namespace ConfigGetResponse {
  export type AsObject = {
    variablesList: Array<ConfigVar.AsObject>,
  }
}

export class ExecStreamRequest extends jspb.Message {
  getStart(): ExecStreamRequest.Start | undefined;
  setStart(value?: ExecStreamRequest.Start): ExecStreamRequest;
  hasStart(): boolean;
  clearStart(): ExecStreamRequest;

  getInput(): ExecStreamRequest.Input | undefined;
  setInput(value?: ExecStreamRequest.Input): ExecStreamRequest;
  hasInput(): boolean;
  clearInput(): ExecStreamRequest;

  getWinch(): ExecStreamRequest.WindowSize | undefined;
  setWinch(value?: ExecStreamRequest.WindowSize): ExecStreamRequest;
  hasWinch(): boolean;
  clearWinch(): ExecStreamRequest;

  getEventCase(): ExecStreamRequest.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStreamRequest): ExecStreamRequest.AsObject;
  static serializeBinaryToWriter(message: ExecStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStreamRequest;
  static deserializeBinaryFromReader(message: ExecStreamRequest, reader: jspb.BinaryReader): ExecStreamRequest;
}

export namespace ExecStreamRequest {
  export type AsObject = {
    start?: ExecStreamRequest.Start.AsObject,
    input?: ExecStreamRequest.Input.AsObject,
    winch?: ExecStreamRequest.WindowSize.AsObject,
  }

  export class Start extends jspb.Message {
    getDeploymentId(): string;
    setDeploymentId(value: string): Start;

    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): Start;
    clearArgsList(): Start;
    addArgs(value: string, index?: number): Start;

    getPty(): ExecStreamRequest.PTY | undefined;
    setPty(value?: ExecStreamRequest.PTY): Start;
    hasPty(): boolean;
    clearPty(): Start;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Start.AsObject;
    static toObject(includeInstance: boolean, msg: Start): Start.AsObject;
    static serializeBinaryToWriter(message: Start, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Start;
    static deserializeBinaryFromReader(message: Start, reader: jspb.BinaryReader): Start;
  }

  export namespace Start {
    export type AsObject = {
      deploymentId: string,
      argsList: Array<string>,
      pty?: ExecStreamRequest.PTY.AsObject,
    }
  }


  export class Input extends jspb.Message {
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Input;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
  }

  export namespace Input {
    export type AsObject = {
      data: Uint8Array | string,
    }
  }


  export class PTY extends jspb.Message {
    getEnable(): boolean;
    setEnable(value: boolean): PTY;

    getTerm(): string;
    setTerm(value: string): PTY;

    getWindowSize(): ExecStreamRequest.WindowSize | undefined;
    setWindowSize(value?: ExecStreamRequest.WindowSize): PTY;
    hasWindowSize(): boolean;
    clearWindowSize(): PTY;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PTY.AsObject;
    static toObject(includeInstance: boolean, msg: PTY): PTY.AsObject;
    static serializeBinaryToWriter(message: PTY, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PTY;
    static deserializeBinaryFromReader(message: PTY, reader: jspb.BinaryReader): PTY;
  }

  export namespace PTY {
    export type AsObject = {
      enable: boolean,
      term: string,
      windowSize?: ExecStreamRequest.WindowSize.AsObject,
    }
  }


  export class WindowSize extends jspb.Message {
    getRows(): number;
    setRows(value: number): WindowSize;

    getCols(): number;
    setCols(value: number): WindowSize;

    getWidth(): number;
    setWidth(value: number): WindowSize;

    getHeight(): number;
    setHeight(value: number): WindowSize;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WindowSize.AsObject;
    static toObject(includeInstance: boolean, msg: WindowSize): WindowSize.AsObject;
    static serializeBinaryToWriter(message: WindowSize, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WindowSize;
    static deserializeBinaryFromReader(message: WindowSize, reader: jspb.BinaryReader): WindowSize;
  }

  export namespace WindowSize {
    export type AsObject = {
      rows: number,
      cols: number,
      width: number,
      height: number,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    START = 1,
    INPUT = 2,
    WINCH = 3,
  }
}

export class ExecStreamResponse extends jspb.Message {
  getOutput(): ExecStreamResponse.Output | undefined;
  setOutput(value?: ExecStreamResponse.Output): ExecStreamResponse;
  hasOutput(): boolean;
  clearOutput(): ExecStreamResponse;

  getExit(): ExecStreamResponse.Exit | undefined;
  setExit(value?: ExecStreamResponse.Exit): ExecStreamResponse;
  hasExit(): boolean;
  clearExit(): ExecStreamResponse;

  getEventCase(): ExecStreamResponse.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStreamResponse): ExecStreamResponse.AsObject;
  static serializeBinaryToWriter(message: ExecStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStreamResponse;
  static deserializeBinaryFromReader(message: ExecStreamResponse, reader: jspb.BinaryReader): ExecStreamResponse;
}

export namespace ExecStreamResponse {
  export type AsObject = {
    output?: ExecStreamResponse.Output.AsObject,
    exit?: ExecStreamResponse.Exit.AsObject,
  }

  export class Exit extends jspb.Message {
    getCode(): number;
    setCode(value: number): Exit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Exit.AsObject;
    static toObject(includeInstance: boolean, msg: Exit): Exit.AsObject;
    static serializeBinaryToWriter(message: Exit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Exit;
    static deserializeBinaryFromReader(message: Exit, reader: jspb.BinaryReader): Exit;
  }

  export namespace Exit {
    export type AsObject = {
      code: number,
    }
  }


  export class Output extends jspb.Message {
    getChannel(): ExecStreamResponse.Output.Channel;
    setChannel(value: ExecStreamResponse.Output.Channel): Output;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
  }

  export namespace Output {
    export type AsObject = {
      channel: ExecStreamResponse.Output.Channel,
      data: Uint8Array | string,
    }

    export enum Channel { 
      UNKNOWN = 0,
      STDOUT = 1,
      STDERR = 2,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    OUTPUT = 1,
    EXIT = 2,
  }
}

export class EntrypointConfigRequest extends jspb.Message {
  getDeploymentId(): string;
  setDeploymentId(value: string): EntrypointConfigRequest;

  getInstanceId(): string;
  setInstanceId(value: string): EntrypointConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntrypointConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EntrypointConfigRequest): EntrypointConfigRequest.AsObject;
  static serializeBinaryToWriter(message: EntrypointConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntrypointConfigRequest;
  static deserializeBinaryFromReader(message: EntrypointConfigRequest, reader: jspb.BinaryReader): EntrypointConfigRequest;
}

export namespace EntrypointConfigRequest {
  export type AsObject = {
    deploymentId: string,
    instanceId: string,
  }
}

export class EntrypointConfigResponse extends jspb.Message {
  getConfig(): EntrypointConfig | undefined;
  setConfig(value?: EntrypointConfig): EntrypointConfigResponse;
  hasConfig(): boolean;
  clearConfig(): EntrypointConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntrypointConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EntrypointConfigResponse): EntrypointConfigResponse.AsObject;
  static serializeBinaryToWriter(message: EntrypointConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntrypointConfigResponse;
  static deserializeBinaryFromReader(message: EntrypointConfigResponse, reader: jspb.BinaryReader): EntrypointConfigResponse;
}

export namespace EntrypointConfigResponse {
  export type AsObject = {
    config?: EntrypointConfig.AsObject,
  }
}

export class EntrypointConfig extends jspb.Message {
  getExecList(): Array<EntrypointConfig.Exec>;
  setExecList(value: Array<EntrypointConfig.Exec>): EntrypointConfig;
  clearExecList(): EntrypointConfig;
  addExec(value?: EntrypointConfig.Exec, index?: number): EntrypointConfig.Exec;

  getEnvVarsList(): Array<ConfigVar>;
  setEnvVarsList(value: Array<ConfigVar>): EntrypointConfig;
  clearEnvVarsList(): EntrypointConfig;
  addEnvVars(value?: ConfigVar, index?: number): ConfigVar;

  getUrlService(): EntrypointConfig.URLService | undefined;
  setUrlService(value?: EntrypointConfig.URLService): EntrypointConfig;
  hasUrlService(): boolean;
  clearUrlService(): EntrypointConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntrypointConfig.AsObject;
  static toObject(includeInstance: boolean, msg: EntrypointConfig): EntrypointConfig.AsObject;
  static serializeBinaryToWriter(message: EntrypointConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntrypointConfig;
  static deserializeBinaryFromReader(message: EntrypointConfig, reader: jspb.BinaryReader): EntrypointConfig;
}

export namespace EntrypointConfig {
  export type AsObject = {
    execList: Array<EntrypointConfig.Exec.AsObject>,
    envVarsList: Array<ConfigVar.AsObject>,
    urlService?: EntrypointConfig.URLService.AsObject,
  }

  export class Exec extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): Exec;

    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): Exec;
    clearArgsList(): Exec;
    addArgs(value: string, index?: number): Exec;

    getPty(): ExecStreamRequest.PTY | undefined;
    setPty(value?: ExecStreamRequest.PTY): Exec;
    hasPty(): boolean;
    clearPty(): Exec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Exec.AsObject;
    static toObject(includeInstance: boolean, msg: Exec): Exec.AsObject;
    static serializeBinaryToWriter(message: Exec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Exec;
    static deserializeBinaryFromReader(message: Exec, reader: jspb.BinaryReader): Exec;
  }

  export namespace Exec {
    export type AsObject = {
      index: number,
      argsList: Array<string>,
      pty?: ExecStreamRequest.PTY.AsObject,
    }
  }


  export class URLService extends jspb.Message {
    getControlAddr(): string;
    setControlAddr(value: string): URLService;

    getToken(): string;
    setToken(value: string): URLService;

    getLabels(): string;
    setLabels(value: string): URLService;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): URLService.AsObject;
    static toObject(includeInstance: boolean, msg: URLService): URLService.AsObject;
    static serializeBinaryToWriter(message: URLService, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): URLService;
    static deserializeBinaryFromReader(message: URLService, reader: jspb.BinaryReader): URLService;
  }

  export namespace URLService {
    export type AsObject = {
      controlAddr: string,
      token: string,
      labels: string,
    }
  }

}

export class EntrypointLogBatch extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): EntrypointLogBatch;

  getLinesList(): Array<LogBatch.Entry>;
  setLinesList(value: Array<LogBatch.Entry>): EntrypointLogBatch;
  clearLinesList(): EntrypointLogBatch;
  addLines(value?: LogBatch.Entry, index?: number): LogBatch.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntrypointLogBatch.AsObject;
  static toObject(includeInstance: boolean, msg: EntrypointLogBatch): EntrypointLogBatch.AsObject;
  static serializeBinaryToWriter(message: EntrypointLogBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntrypointLogBatch;
  static deserializeBinaryFromReader(message: EntrypointLogBatch, reader: jspb.BinaryReader): EntrypointLogBatch;
}

export namespace EntrypointLogBatch {
  export type AsObject = {
    instanceId: string,
    linesList: Array<LogBatch.Entry.AsObject>,
  }
}

export class EntrypointExecRequest extends jspb.Message {
  getOpen(): EntrypointExecRequest.Open | undefined;
  setOpen(value?: EntrypointExecRequest.Open): EntrypointExecRequest;
  hasOpen(): boolean;
  clearOpen(): EntrypointExecRequest;

  getExit(): EntrypointExecRequest.Exit | undefined;
  setExit(value?: EntrypointExecRequest.Exit): EntrypointExecRequest;
  hasExit(): boolean;
  clearExit(): EntrypointExecRequest;

  getOutput(): EntrypointExecRequest.Output | undefined;
  setOutput(value?: EntrypointExecRequest.Output): EntrypointExecRequest;
  hasOutput(): boolean;
  clearOutput(): EntrypointExecRequest;

  getError(): EntrypointExecRequest.Error | undefined;
  setError(value?: EntrypointExecRequest.Error): EntrypointExecRequest;
  hasError(): boolean;
  clearError(): EntrypointExecRequest;

  getEventCase(): EntrypointExecRequest.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntrypointExecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EntrypointExecRequest): EntrypointExecRequest.AsObject;
  static serializeBinaryToWriter(message: EntrypointExecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntrypointExecRequest;
  static deserializeBinaryFromReader(message: EntrypointExecRequest, reader: jspb.BinaryReader): EntrypointExecRequest;
}

export namespace EntrypointExecRequest {
  export type AsObject = {
    open?: EntrypointExecRequest.Open.AsObject,
    exit?: EntrypointExecRequest.Exit.AsObject,
    output?: EntrypointExecRequest.Output.AsObject,
    error?: EntrypointExecRequest.Error.AsObject,
  }

  export class Open extends jspb.Message {
    getInstanceId(): string;
    setInstanceId(value: string): Open;

    getIndex(): number;
    setIndex(value: number): Open;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Open.AsObject;
    static toObject(includeInstance: boolean, msg: Open): Open.AsObject;
    static serializeBinaryToWriter(message: Open, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Open;
    static deserializeBinaryFromReader(message: Open, reader: jspb.BinaryReader): Open;
  }

  export namespace Open {
    export type AsObject = {
      instanceId: string,
      index: number,
    }
  }


  export class Exit extends jspb.Message {
    getCode(): number;
    setCode(value: number): Exit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Exit.AsObject;
    static toObject(includeInstance: boolean, msg: Exit): Exit.AsObject;
    static serializeBinaryToWriter(message: Exit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Exit;
    static deserializeBinaryFromReader(message: Exit, reader: jspb.BinaryReader): Exit;
  }

  export namespace Exit {
    export type AsObject = {
      code: number,
    }
  }


  export class Output extends jspb.Message {
    getChannel(): EntrypointExecRequest.Output.Channel;
    setChannel(value: EntrypointExecRequest.Output.Channel): Output;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
  }

  export namespace Output {
    export type AsObject = {
      channel: EntrypointExecRequest.Output.Channel,
      data: Uint8Array | string,
    }

    export enum Channel { 
      UNKNOWN = 0,
      STDOUT = 1,
      STDERR = 2,
    }
  }


  export class Error extends jspb.Message {
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): Error;
    hasError(): boolean;
    clearError(): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      error?: google_rpc_status_pb.Status.AsObject,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    OPEN = 1,
    EXIT = 2,
    OUTPUT = 3,
    ERROR = 4,
  }
}

export class EntrypointExecResponse extends jspb.Message {
  getInput(): Uint8Array | string;
  getInput_asU8(): Uint8Array;
  getInput_asB64(): string;
  setInput(value: Uint8Array | string): EntrypointExecResponse;

  getWinch(): ExecStreamRequest.WindowSize | undefined;
  setWinch(value?: ExecStreamRequest.WindowSize): EntrypointExecResponse;
  hasWinch(): boolean;
  clearWinch(): EntrypointExecResponse;

  getOpened(): boolean;
  setOpened(value: boolean): EntrypointExecResponse;

  getEventCase(): EntrypointExecResponse.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntrypointExecResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EntrypointExecResponse): EntrypointExecResponse.AsObject;
  static serializeBinaryToWriter(message: EntrypointExecResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntrypointExecResponse;
  static deserializeBinaryFromReader(message: EntrypointExecResponse, reader: jspb.BinaryReader): EntrypointExecResponse;
}

export namespace EntrypointExecResponse {
  export type AsObject = {
    input: Uint8Array | string,
    winch?: ExecStreamRequest.WindowSize.AsObject,
    opened: boolean,
  }

  export enum EventCase { 
    EVENT_NOT_SET = 0,
    INPUT = 1,
    WINCH = 2,
    OPENED = 3,
  }
}

export class TokenTransport extends jspb.Message {
  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): TokenTransport;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): TokenTransport;

  getKeyId(): string;
  setKeyId(value: string): TokenTransport;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): TokenTransport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenTransport.AsObject;
  static toObject(includeInstance: boolean, msg: TokenTransport): TokenTransport.AsObject;
  static serializeBinaryToWriter(message: TokenTransport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenTransport;
  static deserializeBinaryFromReader(message: TokenTransport, reader: jspb.BinaryReader): TokenTransport;
}

export namespace TokenTransport {
  export type AsObject = {
    body: Uint8Array | string,
    signature: Uint8Array | string,
    keyId: string,
    metadataMap: Array<[string, string]>,
  }
}

export class Token extends jspb.Message {
  getUser(): string;
  setUser(value: string): Token;

  getTokenId(): Uint8Array | string;
  getTokenId_asU8(): Uint8Array;
  getTokenId_asB64(): string;
  setTokenId(value: Uint8Array | string): Token;

  getValidUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValidUntil(value?: google_protobuf_timestamp_pb.Timestamp): Token;
  hasValidUntil(): boolean;
  clearValidUntil(): Token;

  getLogin(): boolean;
  setLogin(value: boolean): Token;

  getInvite(): boolean;
  setInvite(value: boolean): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    user: string,
    tokenId: Uint8Array | string,
    validUntil?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    login: boolean,
    invite: boolean,
  }
}

export class HMACKey extends jspb.Message {
  getId(): string;
  setId(value: string): HMACKey;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): HMACKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HMACKey.AsObject;
  static toObject(includeInstance: boolean, msg: HMACKey): HMACKey.AsObject;
  static serializeBinaryToWriter(message: HMACKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HMACKey;
  static deserializeBinaryFromReader(message: HMACKey, reader: jspb.BinaryReader): HMACKey;
}

export namespace HMACKey {
  export type AsObject = {
    id: string,
    key: Uint8Array | string,
  }
}

export class InviteTokenRequest extends jspb.Message {
  getDuration(): string;
  setDuration(value: string): InviteTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteTokenRequest): InviteTokenRequest.AsObject;
  static serializeBinaryToWriter(message: InviteTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteTokenRequest;
  static deserializeBinaryFromReader(message: InviteTokenRequest, reader: jspb.BinaryReader): InviteTokenRequest;
}

export namespace InviteTokenRequest {
  export type AsObject = {
    duration: string,
  }
}

export class NewTokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): NewTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewTokenResponse): NewTokenResponse.AsObject;
  static serializeBinaryToWriter(message: NewTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewTokenResponse;
  static deserializeBinaryFromReader(message: NewTokenResponse, reader: jspb.BinaryReader): NewTokenResponse;
}

export namespace NewTokenResponse {
  export type AsObject = {
    token: string,
  }
}

export class ConvertInviteTokenRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ConvertInviteTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertInviteTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertInviteTokenRequest): ConvertInviteTokenRequest.AsObject;
  static serializeBinaryToWriter(message: ConvertInviteTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertInviteTokenRequest;
  static deserializeBinaryFromReader(message: ConvertInviteTokenRequest, reader: jspb.BinaryReader): ConvertInviteTokenRequest;
}

export namespace ConvertInviteTokenRequest {
  export type AsObject = {
    token: string,
  }
}

