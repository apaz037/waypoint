// source: google/api/usage.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.api.Usage', null, global);
goog.exportSymbol('proto.google.api.UsageRule', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Usage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Usage.repeatedFields_, null);
};
goog.inherits(proto.google.api.Usage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Usage.displayName = 'proto.google.api.Usage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.UsageRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.UsageRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.UsageRule.displayName = 'proto.google.api.UsageRule';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Usage.repeatedFields_ = [1,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Usage.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Usage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Usage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Usage.toObject = function(includeInstance, msg) {
  var f, obj = {
    requirementsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.google.api.UsageRule.toObject, includeInstance),
    producerNotificationChannel: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Usage}
 */
proto.google.api.Usage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Usage;
  return proto.google.api.Usage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Usage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Usage}
 */
proto.google.api.Usage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequirements(value);
      break;
    case 6:
      var value = new proto.google.api.UsageRule;
      reader.readMessage(value,proto.google.api.UsageRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducerNotificationChannel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Usage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Usage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Usage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Usage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.api.UsageRule.serializeBinaryToWriter
    );
  }
  f = message.getProducerNotificationChannel();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * repeated string requirements = 1;
 * @return {!Array<string>}
 */
proto.google.api.Usage.prototype.getRequirementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.api.Usage} returns this
 */
proto.google.api.Usage.prototype.setRequirementsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.api.Usage} returns this
 */
proto.google.api.Usage.prototype.addRequirements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Usage} returns this
 */
proto.google.api.Usage.prototype.clearRequirementsList = function() {
  return this.setRequirementsList([]);
};


/**
 * repeated UsageRule rules = 6;
 * @return {!Array<!proto.google.api.UsageRule>}
 */
proto.google.api.Usage.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.google.api.UsageRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.UsageRule, 6));
};


/**
 * @param {!Array<!proto.google.api.UsageRule>} value
 * @return {!proto.google.api.Usage} returns this
*/
proto.google.api.Usage.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.api.UsageRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.UsageRule}
 */
proto.google.api.Usage.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.api.UsageRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Usage} returns this
 */
proto.google.api.Usage.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};


/**
 * optional string producer_notification_channel = 7;
 * @return {string}
 */
proto.google.api.Usage.prototype.getProducerNotificationChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.Usage} returns this
 */
proto.google.api.Usage.prototype.setProducerNotificationChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.UsageRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.UsageRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.UsageRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.UsageRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowUnregisteredCalls: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    skipServiceControl: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.UsageRule}
 */
proto.google.api.UsageRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.UsageRule;
  return proto.google.api.UsageRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.UsageRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.UsageRule}
 */
proto.google.api.UsageRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowUnregisteredCalls(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipServiceControl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.UsageRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.UsageRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.UsageRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.UsageRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowUnregisteredCalls();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSkipServiceControl();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.UsageRule.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.UsageRule} returns this
 */
proto.google.api.UsageRule.prototype.setSelector = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool allow_unregistered_calls = 2;
 * @return {boolean}
 */
proto.google.api.UsageRule.prototype.getAllowUnregisteredCalls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.api.UsageRule} returns this
 */
proto.google.api.UsageRule.prototype.setAllowUnregisteredCalls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool skip_service_control = 3;
 * @return {boolean}
 */
proto.google.api.UsageRule.prototype.getSkipServiceControl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.api.UsageRule} returns this
 */
proto.google.api.UsageRule.prototype.setSkipServiceControl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.google.api);
