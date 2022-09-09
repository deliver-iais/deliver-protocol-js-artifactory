import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as protoPubV1Models000 from '../../pub/v1/models/uid.pb';
import * as protoPubV1Models003 from '../../pub/v1/models/location.pb';
import * as protoPubV1Models010 from '../../pub/v1/models/call.pb';
import * as protoPubV1Models013 from '../../pub/v1/models/seen.pb';
import * as protoPubV1Models014 from '../../pub/v1/models/activity.pb';
import * as protoPubV1Models015 from '../../pub/v1/models/message.pb';
import * as protoPubV1Models016 from '../../pub/v1/models/room-metadata.pb';
/**
 * Message implementation for proto.pub.v1.core.EstablishServerSideStreamReq
 */
export class EstablishServerSideStreamReq {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EstablishServerSideStreamReq to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        EstablishServerSideStreamReq.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new EstablishServerSideStreamReq();
        EstablishServerSideStreamReq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                default:
                    _reader.skipField();
            }
        }
        EstablishServerSideStreamReq.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) { }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        EstablishServerSideStreamReq.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {};
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {};
    }
}
EstablishServerSideStreamReq.id = 'proto.pub.v1.core.EstablishServerSideStreamReq';
/**
 * Message implementation for proto.pub.v1.core.SendClientPacketRes
 */
export class SendClientPacketRes {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SendClientPacketRes to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        SendClientPacketRes.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SendClientPacketRes();
        SendClientPacketRes.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                default:
                    _reader.skipField();
            }
        }
        SendClientPacketRes.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) { }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SendClientPacketRes.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {};
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {};
    }
}
SendClientPacketRes.id = 'proto.pub.v1.core.SendClientPacketRes';
/**
 * Message implementation for proto.pub.v1.core.Ping
 */
export class Ping {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Ping to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.lastPongTime = _value.lastPongTime;
        this.clientIsActive = _value.clientIsActive;
        this.shouldTriggerActiveUser = _value.shouldTriggerActiveUser;
        Ping.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Ping();
        Ping.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.lastPongTime = _instance.lastPongTime || '0';
        _instance.clientIsActive = _instance.clientIsActive || false;
        _instance.shouldTriggerActiveUser =
            _instance.shouldTriggerActiveUser || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.lastPongTime = _reader.readInt64String();
                    break;
                case 2:
                    _instance.clientIsActive = _reader.readBool();
                    break;
                case 3:
                    _instance.shouldTriggerActiveUser = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Ping.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.lastPongTime) {
            _writer.writeInt64String(1, _instance.lastPongTime);
        }
        if (_instance.clientIsActive) {
            _writer.writeBool(2, _instance.clientIsActive);
        }
        if (_instance.shouldTriggerActiveUser) {
            _writer.writeBool(3, _instance.shouldTriggerActiveUser);
        }
    }
    get lastPongTime() {
        return this._lastPongTime;
    }
    set lastPongTime(value) {
        this._lastPongTime = value;
    }
    get clientIsActive() {
        return this._clientIsActive;
    }
    set clientIsActive(value) {
        this._clientIsActive = value;
    }
    get shouldTriggerActiveUser() {
        return this._shouldTriggerActiveUser;
    }
    set shouldTriggerActiveUser(value) {
        this._shouldTriggerActiveUser = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Ping.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            lastPongTime: this.lastPongTime,
            clientIsActive: this.clientIsActive,
            shouldTriggerActiveUser: this.shouldTriggerActiveUser
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            lastPongTime: this.lastPongTime,
            clientIsActive: this.clientIsActive,
            shouldTriggerActiveUser: this.shouldTriggerActiveUser
        };
    }
}
Ping.id = 'proto.pub.v1.core.Ping';
/**
 * Message implementation for proto.pub.v1.core.Pong
 */
export class Pong {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Pong to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.packetId = _value.packetId;
        this.serverTime = _value.serverTime;
        this.streamInputCapabilityStatus = _value.streamInputCapabilityStatus;
        Pong.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Pong();
        Pong.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetId = _instance.packetId || '';
        _instance.serverTime = _instance.serverTime || '0';
        _instance.streamInputCapabilityStatus =
            _instance.streamInputCapabilityStatus || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.packetId = _reader.readString();
                    break;
                case 2:
                    _instance.serverTime = _reader.readInt64String();
                    break;
                case 3:
                    _instance.streamInputCapabilityStatus = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Pong.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.packetId) {
            _writer.writeString(1, _instance.packetId);
        }
        if (_instance.serverTime) {
            _writer.writeInt64String(2, _instance.serverTime);
        }
        if (_instance.streamInputCapabilityStatus) {
            _writer.writeEnum(3, _instance.streamInputCapabilityStatus);
        }
    }
    get packetId() {
        return this._packetId;
    }
    set packetId(value) {
        this._packetId = value;
    }
    get serverTime() {
        return this._serverTime;
    }
    set serverTime(value) {
        this._serverTime = value;
    }
    get streamInputCapabilityStatus() {
        return this._streamInputCapabilityStatus;
    }
    set streamInputCapabilityStatus(value) {
        this._streamInputCapabilityStatus = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Pong.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            packetId: this.packetId,
            serverTime: this.serverTime,
            streamInputCapabilityStatus: this.streamInputCapabilityStatus
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            packetId: this.packetId,
            serverTime: this.serverTime,
            streamInputCapabilityStatus: Pong.StreamInputCapabilityStatus[this.streamInputCapabilityStatus === null ||
                this.streamInputCapabilityStatus === undefined
                ? 0
                : this.streamInputCapabilityStatus]
        };
    }
}
Pong.id = 'proto.pub.v1.core.Pong';
(function (Pong) {
    let StreamInputCapabilityStatus;
    (function (StreamInputCapabilityStatus) {
        StreamInputCapabilityStatus[StreamInputCapabilityStatus["HIGH_AVAILABILITY"] = 0] = "HIGH_AVAILABILITY";
        StreamInputCapabilityStatus[StreamInputCapabilityStatus["NOT_AVAILABLE"] = 1] = "NOT_AVAILABLE";
        StreamInputCapabilityStatus[StreamInputCapabilityStatus["LOW_AVAILABILITY"] = 2] = "LOW_AVAILABILITY";
    })(StreamInputCapabilityStatus = Pong.StreamInputCapabilityStatus || (Pong.StreamInputCapabilityStatus = {}));
})(Pong || (Pong = {}));
/**
 * Message implementation for proto.pub.v1.core.ExpletivePacket
 */
export class ExpletivePacket {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExpletivePacket to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.body = _value.body;
        ExpletivePacket.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExpletivePacket();
        ExpletivePacket.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.body = _instance.body || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.body = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExpletivePacket.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.body) {
            _writer.writeString(1, _instance.body);
        }
    }
    get body() {
        return this._body;
    }
    set body(value) {
        this._body = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExpletivePacket.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            body: this.body
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            body: this.body
        };
    }
}
ExpletivePacket.id = 'proto.pub.v1.core.ExpletivePacket';
/**
 * Message implementation for proto.pub.v1.core.RoomPresenceTypeChanged
 */
export class RoomPresenceTypeChanged {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RoomPresenceTypeChanged to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.uid = _value.uid ? new protoPubV1Models000.Uid(_value.uid) : undefined;
        this.presenceType = _value.presenceType;
        RoomPresenceTypeChanged.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RoomPresenceTypeChanged();
        RoomPresenceTypeChanged.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.uid = _instance.uid || undefined;
        _instance.presenceType = _instance.presenceType || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.uid = new protoPubV1Models000.Uid();
                    _reader.readMessage(_instance.uid, protoPubV1Models000.Uid.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.presenceType = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RoomPresenceTypeChanged.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.uid) {
            _writer.writeMessage(1, _instance.uid, protoPubV1Models000.Uid.serializeBinaryToWriter);
        }
        if (_instance.presenceType) {
            _writer.writeEnum(2, _instance.presenceType);
        }
    }
    get uid() {
        return this._uid;
    }
    set uid(value) {
        this._uid = value;
    }
    get presenceType() {
        return this._presenceType;
    }
    set presenceType(value) {
        this._presenceType = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RoomPresenceTypeChanged.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            uid: this.uid ? this.uid.toObject() : undefined,
            presenceType: this.presenceType
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            uid: this.uid ? this.uid.toProtobufJSON(options) : null,
            presenceType: protoPubV1Models016.PresenceType[this.presenceType === null || this.presenceType === undefined
                ? 0
                : this.presenceType]
        };
    }
}
RoomPresenceTypeChanged.id = 'proto.pub.v1.core.RoomPresenceTypeChanged';
/**
 * Message implementation for proto.pub.v1.core.ErrorOnPacket
 */
export class ErrorOnPacket {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ErrorOnPacket to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.packetId = _value.packetId;
        this.error = _value.error;
        ErrorOnPacket.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ErrorOnPacket();
        ErrorOnPacket.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetId = _instance.packetId || '';
        _instance.error = _instance.error || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.packetId = _reader.readString();
                    break;
                case 2:
                    _instance.error = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ErrorOnPacket.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.packetId) {
            _writer.writeString(1, _instance.packetId);
        }
        if (_instance.error) {
            _writer.writeEnum(2, _instance.error);
        }
    }
    get packetId() {
        return this._packetId;
    }
    set packetId(value) {
        this._packetId = value;
    }
    get error() {
        return this._error;
    }
    set error(value) {
        this._error = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ErrorOnPacket.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            packetId: this.packetId,
            error: this.error
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            packetId: this.packetId,
            error: ErrorOnPacket.Error[this.error === null || this.error === undefined ? 0 : this.error]
        };
    }
}
ErrorOnPacket.id = 'proto.pub.v1.core.ErrorOnPacket';
(function (ErrorOnPacket) {
    let Error;
    (function (Error) {
        Error[Error["UNKNOWN"] = 0] = "UNKNOWN";
        Error[Error["BAD_REQUEST"] = 1] = "BAD_REQUEST";
        Error[Error["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
        Error[Error["PERMISSION_DENIED"] = 3] = "PERMISSION_DENIED";
        Error[Error["NOT_FOUND"] = 4] = "NOT_FOUND";
        Error[Error["CONFLICT"] = 5] = "CONFLICT";
        Error[Error["RESOURCE_EXHAUSTED"] = 6] = "RESOURCE_EXHAUSTED";
        Error[Error["INTERNAL"] = 7] = "INTERNAL";
        Error[Error["UNIMPLEMENTED"] = 8] = "UNIMPLEMENTED";
        Error[Error["UNAVAILABLE"] = 9] = "UNAVAILABLE";
        Error[Error["DEADLINE_EXCEEDED"] = 10] = "DEADLINE_EXCEEDED";
    })(Error = ErrorOnPacket.Error || (ErrorOnPacket.Error = {}));
})(ErrorOnPacket || (ErrorOnPacket = {}));
/**
 * Message implementation for proto.pub.v1.core.ServerPacket
 */
export class ServerPacket {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ServerPacket to deeply clone from
     */
    constructor(_value) {
        this._type = ServerPacket.TypeCase.none;
        _value = _value || {};
        this.error = _value.error ? new ErrorOnPacket(_value.error) : undefined;
        this.message = _value.message
            ? new protoPubV1Models015.Message(_value.message)
            : undefined;
        this.seen = _value.seen
            ? new protoPubV1Models013.Seen(_value.seen)
            : undefined;
        this.activity = _value.activity
            ? new protoPubV1Models014.Activity(_value.activity)
            : undefined;
        this.roomPresenceTypeChanged = _value.roomPresenceTypeChanged
            ? new RoomPresenceTypeChanged(_value.roomPresenceTypeChanged)
            : undefined;
        this.liveLocationStatusChanged = _value.liveLocationStatusChanged
            ? new protoPubV1Models003.LiveLocation(_value.liveLocationStatusChanged)
            : undefined;
        this.pong = _value.pong ? new Pong(_value.pong) : undefined;
        this.messageDeliveryAck = _value.messageDeliveryAck
            ? new protoPubV1Models015.MessageDeliveryAck(_value.messageDeliveryAck)
            : undefined;
        this.callOffer = _value.callOffer
            ? new protoPubV1Models010.CallOffer(_value.callOffer)
            : undefined;
        this.callAnswer = _value.callAnswer
            ? new protoPubV1Models010.CallAnswer(_value.callAnswer)
            : undefined;
        this.expletivePacket = _value.expletivePacket
            ? new ExpletivePacket(_value.expletivePacket)
            : undefined;
        this.packetPadding = _value.packetPadding;
        ServerPacket.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ServerPacket();
        ServerPacket.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.packetPadding = _instance.packetPadding || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.error = new ErrorOnPacket();
                    _reader.readMessage(_instance.error, ErrorOnPacket.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.message = new protoPubV1Models015.Message();
                    _reader.readMessage(_instance.message, protoPubV1Models015.Message.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.seen = new protoPubV1Models013.Seen();
                    _reader.readMessage(_instance.seen, protoPubV1Models013.Seen.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.activity = new protoPubV1Models014.Activity();
                    _reader.readMessage(_instance.activity, protoPubV1Models014.Activity.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.roomPresenceTypeChanged = new RoomPresenceTypeChanged();
                    _reader.readMessage(_instance.roomPresenceTypeChanged, RoomPresenceTypeChanged.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.liveLocationStatusChanged = new protoPubV1Models003.LiveLocation();
                    _reader.readMessage(_instance.liveLocationStatusChanged, protoPubV1Models003.LiveLocation.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.pong = new Pong();
                    _reader.readMessage(_instance.pong, Pong.deserializeBinaryFromReader);
                    break;
                case 9:
                    _instance.messageDeliveryAck = new protoPubV1Models015.MessageDeliveryAck();
                    _reader.readMessage(_instance.messageDeliveryAck, protoPubV1Models015.MessageDeliveryAck.deserializeBinaryFromReader);
                    break;
                case 10:
                    _instance.callOffer = new protoPubV1Models010.CallOffer();
                    _reader.readMessage(_instance.callOffer, protoPubV1Models010.CallOffer.deserializeBinaryFromReader);
                    break;
                case 11:
                    _instance.callAnswer = new protoPubV1Models010.CallAnswer();
                    _reader.readMessage(_instance.callAnswer, protoPubV1Models010.CallAnswer.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.expletivePacket = new ExpletivePacket();
                    _reader.readMessage(_instance.expletivePacket, ExpletivePacket.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.packetPadding = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ServerPacket.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.error) {
            _writer.writeMessage(1, _instance.error, ErrorOnPacket.serializeBinaryToWriter);
        }
        if (_instance.message) {
            _writer.writeMessage(2, _instance.message, protoPubV1Models015.Message.serializeBinaryToWriter);
        }
        if (_instance.seen) {
            _writer.writeMessage(3, _instance.seen, protoPubV1Models013.Seen.serializeBinaryToWriter);
        }
        if (_instance.activity) {
            _writer.writeMessage(4, _instance.activity, protoPubV1Models014.Activity.serializeBinaryToWriter);
        }
        if (_instance.roomPresenceTypeChanged) {
            _writer.writeMessage(5, _instance.roomPresenceTypeChanged, RoomPresenceTypeChanged.serializeBinaryToWriter);
        }
        if (_instance.liveLocationStatusChanged) {
            _writer.writeMessage(7, _instance.liveLocationStatusChanged, protoPubV1Models003.LiveLocation.serializeBinaryToWriter);
        }
        if (_instance.pong) {
            _writer.writeMessage(8, _instance.pong, Pong.serializeBinaryToWriter);
        }
        if (_instance.messageDeliveryAck) {
            _writer.writeMessage(9, _instance.messageDeliveryAck, protoPubV1Models015.MessageDeliveryAck.serializeBinaryToWriter);
        }
        if (_instance.callOffer) {
            _writer.writeMessage(10, _instance.callOffer, protoPubV1Models010.CallOffer.serializeBinaryToWriter);
        }
        if (_instance.callAnswer) {
            _writer.writeMessage(11, _instance.callAnswer, protoPubV1Models010.CallAnswer.serializeBinaryToWriter);
        }
        if (_instance.expletivePacket) {
            _writer.writeMessage(12, _instance.expletivePacket, ExpletivePacket.serializeBinaryToWriter);
        }
        if (_instance.packetPadding) {
            _writer.writeString(6, _instance.packetPadding);
        }
    }
    get error() {
        return this._error;
    }
    set error(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.error;
        }
        this._error = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (value !== undefined && value !== null) {
            this._error = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.message;
        }
        this._message = value;
    }
    get seen() {
        return this._seen;
    }
    set seen(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.seen;
        }
        this._seen = value;
    }
    get activity() {
        return this._activity;
    }
    set activity(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.activity;
        }
        this._activity = value;
    }
    get roomPresenceTypeChanged() {
        return this._roomPresenceTypeChanged;
    }
    set roomPresenceTypeChanged(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.roomPresenceTypeChanged;
        }
        this._roomPresenceTypeChanged = value;
    }
    get liveLocationStatusChanged() {
        return this._liveLocationStatusChanged;
    }
    set liveLocationStatusChanged(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.liveLocationStatusChanged;
        }
        this._liveLocationStatusChanged = value;
    }
    get pong() {
        return this._pong;
    }
    set pong(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._messageDeliveryAck = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.pong;
        }
        this._pong = value;
    }
    get messageDeliveryAck() {
        return this._messageDeliveryAck;
    }
    set messageDeliveryAck(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._callOffer = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.messageDeliveryAck;
        }
        this._messageDeliveryAck = value;
    }
    get callOffer() {
        return this._callOffer;
    }
    set callOffer(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callAnswer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.callOffer;
        }
        this._callOffer = value;
    }
    get callAnswer() {
        return this._callAnswer;
    }
    set callAnswer(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._expletivePacket = undefined;
            this._type = ServerPacket.TypeCase.callAnswer;
        }
        this._callAnswer = value;
    }
    get expletivePacket() {
        return this._expletivePacket;
    }
    set expletivePacket(value) {
        if (value !== undefined && value !== null) {
            this._error = this._message = this._seen = this._activity = this._roomPresenceTypeChanged = this._liveLocationStatusChanged = this._pong = this._messageDeliveryAck = this._callOffer = this._callAnswer = undefined;
            this._type = ServerPacket.TypeCase.expletivePacket;
        }
        this._expletivePacket = value;
    }
    get packetPadding() {
        return this._packetPadding;
    }
    set packetPadding(value) {
        this._packetPadding = value;
    }
    get type() {
        return this._type;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ServerPacket.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            error: this.error ? this.error.toObject() : undefined,
            message: this.message ? this.message.toObject() : undefined,
            seen: this.seen ? this.seen.toObject() : undefined,
            activity: this.activity ? this.activity.toObject() : undefined,
            roomPresenceTypeChanged: this.roomPresenceTypeChanged
                ? this.roomPresenceTypeChanged.toObject()
                : undefined,
            liveLocationStatusChanged: this.liveLocationStatusChanged
                ? this.liveLocationStatusChanged.toObject()
                : undefined,
            pong: this.pong ? this.pong.toObject() : undefined,
            messageDeliveryAck: this.messageDeliveryAck
                ? this.messageDeliveryAck.toObject()
                : undefined,
            callOffer: this.callOffer ? this.callOffer.toObject() : undefined,
            callAnswer: this.callAnswer ? this.callAnswer.toObject() : undefined,
            expletivePacket: this.expletivePacket
                ? this.expletivePacket.toObject()
                : undefined,
            packetPadding: this.packetPadding
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            error: this.error ? this.error.toProtobufJSON(options) : null,
            message: this.message ? this.message.toProtobufJSON(options) : null,
            seen: this.seen ? this.seen.toProtobufJSON(options) : null,
            activity: this.activity ? this.activity.toProtobufJSON(options) : null,
            roomPresenceTypeChanged: this.roomPresenceTypeChanged
                ? this.roomPresenceTypeChanged.toProtobufJSON(options)
                : null,
            liveLocationStatusChanged: this.liveLocationStatusChanged
                ? this.liveLocationStatusChanged.toProtobufJSON(options)
                : null,
            pong: this.pong ? this.pong.toProtobufJSON(options) : null,
            messageDeliveryAck: this.messageDeliveryAck
                ? this.messageDeliveryAck.toProtobufJSON(options)
                : null,
            callOffer: this.callOffer ? this.callOffer.toProtobufJSON(options) : null,
            callAnswer: this.callAnswer
                ? this.callAnswer.toProtobufJSON(options)
                : null,
            expletivePacket: this.expletivePacket
                ? this.expletivePacket.toProtobufJSON(options)
                : null,
            packetPadding: this.packetPadding
        };
    }
}
ServerPacket.id = 'proto.pub.v1.core.ServerPacket';
(function (ServerPacket) {
    let TypeCase;
    (function (TypeCase) {
        TypeCase[TypeCase["none"] = 0] = "none";
        TypeCase[TypeCase["error"] = 1] = "error";
        TypeCase[TypeCase["message"] = 2] = "message";
        TypeCase[TypeCase["seen"] = 3] = "seen";
        TypeCase[TypeCase["activity"] = 4] = "activity";
        TypeCase[TypeCase["roomPresenceTypeChanged"] = 5] = "roomPresenceTypeChanged";
        TypeCase[TypeCase["liveLocationStatusChanged"] = 6] = "liveLocationStatusChanged";
        TypeCase[TypeCase["pong"] = 7] = "pong";
        TypeCase[TypeCase["messageDeliveryAck"] = 8] = "messageDeliveryAck";
        TypeCase[TypeCase["callOffer"] = 9] = "callOffer";
        TypeCase[TypeCase["callAnswer"] = 10] = "callAnswer";
        TypeCase[TypeCase["expletivePacket"] = 11] = "expletivePacket";
    })(TypeCase = ServerPacket.TypeCase || (ServerPacket.TypeCase = {}));
})(ServerPacket || (ServerPacket = {}));
/**
 * Message implementation for proto.pub.v1.core.ClientPacket
 */
export class ClientPacket {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClientPacket to deeply clone from
     */
    constructor(_value) {
        this._type = ClientPacket.TypeCase.none;
        _value = _value || {};
        this.id = _value.id;
        this.message = _value.message
            ? new protoPubV1Models015.MessageByClient(_value.message)
            : undefined;
        this.seen = _value.seen
            ? new protoPubV1Models013.SeenByClient(_value.seen)
            : undefined;
        this.activity = _value.activity
            ? new protoPubV1Models014.ActivityByClient(_value.activity)
            : undefined;
        this.ping = _value.ping ? new Ping(_value.ping) : undefined;
        this.callOffer = _value.callOffer
            ? new protoPubV1Models010.CallOfferByClient(_value.callOffer)
            : undefined;
        this.callAnswer = _value.callAnswer
            ? new protoPubV1Models010.CallAnswerByClient(_value.callAnswer)
            : undefined;
        ClientPacket.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ClientPacket();
        ClientPacket.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.id = _instance.id || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.id = _reader.readString();
                    break;
                case 2:
                    _instance.message = new protoPubV1Models015.MessageByClient();
                    _reader.readMessage(_instance.message, protoPubV1Models015.MessageByClient.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.seen = new protoPubV1Models013.SeenByClient();
                    _reader.readMessage(_instance.seen, protoPubV1Models013.SeenByClient.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.activity = new protoPubV1Models014.ActivityByClient();
                    _reader.readMessage(_instance.activity, protoPubV1Models014.ActivityByClient.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.ping = new Ping();
                    _reader.readMessage(_instance.ping, Ping.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.callOffer = new protoPubV1Models010.CallOfferByClient();
                    _reader.readMessage(_instance.callOffer, protoPubV1Models010.CallOfferByClient.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.callAnswer = new protoPubV1Models010.CallAnswerByClient();
                    _reader.readMessage(_instance.callAnswer, protoPubV1Models010.CallAnswerByClient.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ClientPacket.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.id) {
            _writer.writeString(1, _instance.id);
        }
        if (_instance.message) {
            _writer.writeMessage(2, _instance.message, protoPubV1Models015.MessageByClient.serializeBinaryToWriter);
        }
        if (_instance.seen) {
            _writer.writeMessage(3, _instance.seen, protoPubV1Models013.SeenByClient.serializeBinaryToWriter);
        }
        if (_instance.activity) {
            _writer.writeMessage(4, _instance.activity, protoPubV1Models014.ActivityByClient.serializeBinaryToWriter);
        }
        if (_instance.ping) {
            _writer.writeMessage(5, _instance.ping, Ping.serializeBinaryToWriter);
        }
        if (_instance.callOffer) {
            _writer.writeMessage(6, _instance.callOffer, protoPubV1Models010.CallOfferByClient.serializeBinaryToWriter);
        }
        if (_instance.callAnswer) {
            _writer.writeMessage(7, _instance.callAnswer, protoPubV1Models010.CallAnswerByClient.serializeBinaryToWriter);
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (value !== undefined && value !== null) {
            this._seen = this._activity = this._ping = this._callOffer = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.message;
        }
        this._message = value;
    }
    get seen() {
        return this._seen;
    }
    set seen(value) {
        if (value !== undefined && value !== null) {
            this._message = this._activity = this._ping = this._callOffer = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.seen;
        }
        this._seen = value;
    }
    get activity() {
        return this._activity;
    }
    set activity(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._ping = this._callOffer = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.activity;
        }
        this._activity = value;
    }
    get ping() {
        return this._ping;
    }
    set ping(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._callOffer = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.ping;
        }
        this._ping = value;
    }
    get callOffer() {
        return this._callOffer;
    }
    set callOffer(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callAnswer = undefined;
            this._type = ClientPacket.TypeCase.callOffer;
        }
        this._callOffer = value;
    }
    get callAnswer() {
        return this._callAnswer;
    }
    set callAnswer(value) {
        if (value !== undefined && value !== null) {
            this._message = this._seen = this._activity = this._ping = this._callOffer = undefined;
            this._type = ClientPacket.TypeCase.callAnswer;
        }
        this._callAnswer = value;
    }
    get type() {
        return this._type;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ClientPacket.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            id: this.id,
            message: this.message ? this.message.toObject() : undefined,
            seen: this.seen ? this.seen.toObject() : undefined,
            activity: this.activity ? this.activity.toObject() : undefined,
            ping: this.ping ? this.ping.toObject() : undefined,
            callOffer: this.callOffer ? this.callOffer.toObject() : undefined,
            callAnswer: this.callAnswer ? this.callAnswer.toObject() : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            id: this.id,
            message: this.message ? this.message.toProtobufJSON(options) : null,
            seen: this.seen ? this.seen.toProtobufJSON(options) : null,
            activity: this.activity ? this.activity.toProtobufJSON(options) : null,
            ping: this.ping ? this.ping.toProtobufJSON(options) : null,
            callOffer: this.callOffer ? this.callOffer.toProtobufJSON(options) : null,
            callAnswer: this.callAnswer
                ? this.callAnswer.toProtobufJSON(options)
                : null
        };
    }
}
ClientPacket.id = 'proto.pub.v1.core.ClientPacket';
(function (ClientPacket) {
    let TypeCase;
    (function (TypeCase) {
        TypeCase[TypeCase["none"] = 0] = "none";
        TypeCase[TypeCase["message"] = 1] = "message";
        TypeCase[TypeCase["seen"] = 2] = "seen";
        TypeCase[TypeCase["activity"] = 3] = "activity";
        TypeCase[TypeCase["ping"] = 4] = "ping";
        TypeCase[TypeCase["callOffer"] = 5] = "callOffer";
        TypeCase[TypeCase["callAnswer"] = 6] = "callAnswer";
    })(TypeCase = ClientPacket.TypeCase || (ClientPacket.TypeCase = {}));
})(ClientPacket || (ClientPacket = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byb3RvL3NyYy9saWIvcHViL3YxL2NvcmUucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNEJBQTRCLENBQUM7QUFHbEUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGlDQUFpQyxDQUFDO0FBT3ZFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSw2QkFBNkIsQ0FBQztBQUduRSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxLQUFLLG1CQUFtQixNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEtBQUssbUJBQW1CLE1BQU0sc0NBQXNDLENBQUM7QUFDNUU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sNEJBQTRCO0lBcUR2Qzs7O09BR0c7SUFDSCxZQUNFLE1BQWdFO1FBRWhFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBM0REOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLDRCQUE0QixFQUFFLENBQUM7UUFDcEQsNEJBQTRCLENBQUMsMkJBQTJCLENBQ3RELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXVDLElBQUcsQ0FBQztJQUUvRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF1QyxFQUN2QyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEM7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQXVDLEVBQ3ZDLE9BQXFCLElBQ3BCLENBQUM7SUFhSjs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyw0QkFBNEIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkUsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O0FBakdNLCtCQUFFLEdBQUcsZ0RBQWdELENBQUM7QUErRy9EOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFtQjtJQXFEOUI7OztPQUdHO0lBQ0gsWUFBWSxNQUF1RDtRQUNqRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXpERDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQzNDLG1CQUFtQixDQUFDLDJCQUEyQixDQUM3QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUE4QixJQUFHLENBQUM7SUFFdEQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBOEIsRUFDOUIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsbUJBQW1CLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUE4QixFQUM5QixPQUFxQixJQUNwQixDQUFDO0lBV0o7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOztBQS9GTSxzQkFBRSxHQUFHLHVDQUF1QyxDQUFDO0FBNkd0RDs7R0FFRztBQUNILE1BQU0sT0FBTyxJQUFJO0lBd0VmOzs7T0FHRztJQUNILFlBQVksTUFBd0M7UUFDbEQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM1QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQS9FRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBZTtRQUNqQyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUM7UUFDN0QsU0FBUyxDQUFDLHVCQUF1QjtZQUMvQixTQUFTLENBQUMsdUJBQXVCLElBQUksS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUFDLFNBQWUsRUFBRSxPQUFxQjtRQUN2RSxPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNuRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDOUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdkQsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsU0FBZSxFQUFFLE9BQXFCO1FBQ25FLElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtZQUMxQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRTtZQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFpQkQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBMEI7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksdUJBQXVCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLHVCQUF1QixDQUFDLEtBQTBCO1FBQ3BELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUI7U0FDdEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtTQUN0RCxDQUFDO0lBQ0osQ0FBQzs7QUEvSU0sT0FBRSxHQUFHLHdCQUF3QixDQUFDO0FBcUt2Qzs7R0FFRztBQUNILE1BQU0sT0FBTyxJQUFJO0lBd0VmOzs7T0FHRztJQUNILFlBQVksTUFBd0M7UUFDbEQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1FBQ3RFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQS9FRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBZTtRQUNqQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7UUFDbkQsU0FBUyxDQUFDLDJCQUEyQjtZQUNuQyxTQUFTLENBQUMsMkJBQTJCLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUFDLFNBQWUsRUFBRSxPQUFxQjtRQUN2RSxPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLDJCQUEyQixHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDM0QsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsU0FBZSxFQUFFLE9BQXFCO1FBQ25FLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUN0QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDeEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLFNBQVMsQ0FBQywyQkFBMkIsRUFBRTtZQUN6QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFpQkQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUF5QjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSwyQkFBMkI7UUFHN0IsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQUksMkJBQTJCLENBQzdCLEtBQW1EO1FBRW5ELElBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLDJCQUEyQixFQUFFLElBQUksQ0FBQywyQkFBMkI7U0FDOUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsMkJBQTJCLEVBQ3pCLElBQUksQ0FBQywyQkFBMkIsQ0FDOUIsSUFBSSxDQUFDLDJCQUEyQixLQUFLLElBQUk7Z0JBQ3pDLElBQUksQ0FBQywyQkFBMkIsS0FBSyxTQUFTO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUNyQztTQUNKLENBQUM7SUFDSixDQUFDOztBQXpKTSxPQUFFLEdBQUcsd0JBQXdCLENBQUM7QUEySnZDLFdBQWMsSUFBSTtJQWtCaEIsSUFBWSwyQkFJWDtJQUpELFdBQVksMkJBQTJCO1FBQ3JDLHVHQUFxQixDQUFBO1FBQ3JCLCtGQUFpQixDQUFBO1FBQ2pCLHFHQUFvQixDQUFBO0lBQ3RCLENBQUMsRUFKVywyQkFBMkIsR0FBM0IsZ0NBQTJCLEtBQTNCLGdDQUEyQixRQUl0QztBQUNILENBQUMsRUF2QmEsSUFBSSxLQUFKLElBQUksUUF1QmpCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZUFBZTtJQWdFMUI7OztPQUdHO0lBQ0gsWUFBWSxNQUFtRDtRQUM3RCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBckVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLGVBQWUsQ0FBQywyQkFBMkIsQ0FDekMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBMEI7UUFDNUMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBMEIsRUFDMUIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdkI7U0FDRjtRQUVELGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQTBCLEVBQzFCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBYUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7SUFDSixDQUFDOztBQXJITSxrQkFBRSxHQUFHLG1DQUFtQyxDQUFDO0FBdUlsRDs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBdUI7SUFnRmxDOzs7T0FHRztJQUNILFlBQVksTUFBMkQ7UUFDckUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUF0RkQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUMvQyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FDakQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBa0M7UUFDcEQsU0FBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQztRQUMzQyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFrQyxFQUNsQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLEdBQUcsRUFDYixtQkFBbUIsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQ3BELENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNqQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLEdBQVUsRUFDcEIsbUJBQW1CLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUNoRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQWVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUMsS0FBMEM7UUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBbUQ7UUFDbEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQy9DLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3ZELFlBQVksRUFDVixtQkFBbUIsQ0FBQyxZQUFZLENBQzlCLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUztnQkFDM0QsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQ3RCO1NBQ0osQ0FBQztJQUNKLENBQUM7O0FBbkpNLDBCQUFFLEdBQUcsMkNBQTJDLENBQUM7QUF1SzFEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWE7SUF3RXhCOzs7T0FHRztJQUNILFlBQVksTUFBaUQ7UUFDM0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUE5RUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDckMsYUFBYSxDQUFDLDJCQUEyQixDQUN2QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF3QjtRQUMxQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXdCLEVBQ3hCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBd0IsRUFDeEIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNuQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBZUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUF5QjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFzQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQ0gsYUFBYSxDQUFDLEtBQUssQ0FDakIsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FDakU7U0FDSixDQUFDO0lBQ0osQ0FBQzs7QUF6SU0sZ0JBQUUsR0FBRyxpQ0FBaUMsQ0FBQztBQTJJaEQsV0FBYyxhQUFhO0lBZ0J6QixJQUFZLEtBWVg7SUFaRCxXQUFZLEtBQUs7UUFDZix1Q0FBVyxDQUFBO1FBQ1gsK0NBQWUsQ0FBQTtRQUNmLHVEQUFtQixDQUFBO1FBQ25CLDJEQUFxQixDQUFBO1FBQ3JCLDJDQUFhLENBQUE7UUFDYix5Q0FBWSxDQUFBO1FBQ1osNkRBQXNCLENBQUE7UUFDdEIseUNBQVksQ0FBQTtRQUNaLG1EQUFpQixDQUFBO1FBQ2pCLCtDQUFlLENBQUE7UUFDZiw0REFBc0IsQ0FBQTtJQUN4QixDQUFDLEVBWlcsS0FBSyxHQUFMLG1CQUFLLEtBQUwsbUJBQUssUUFZaEI7QUFDSCxDQUFDLEVBN0JhLGFBQWEsS0FBYixhQUFhLFFBNkIxQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQVk7SUFpT3ZCOzs7T0FHRztJQUNILFlBQVksTUFBZ0Q7UUFOcEQsVUFBSyxHQUEwQixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQU9oRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFDM0IsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDakQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUk7WUFDckIsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVE7WUFDN0IsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbkQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsdUJBQXVCO1lBQzNELENBQUMsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztZQUM3RCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyx5QkFBeUI7WUFDL0QsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztZQUN4RSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQjtZQUNqRCxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7WUFDdkUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7WUFDL0IsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDckQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVU7WUFDakMsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdkQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWU7WUFDM0MsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDN0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFuUUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXVCO1FBQ3pDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQXVCLEVBQ3ZCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO29CQUN0QyxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsS0FBSyxFQUNmLGFBQWEsQ0FBQywyQkFBMkIsQ0FDMUMsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3RELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxPQUFPLEVBQ2pCLG1CQUFtQixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FDeEQsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxJQUFJLEVBQ2QsbUJBQW1CLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUNyRCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDeEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLFFBQVEsRUFDbEIsbUJBQW1CLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUN6RCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7b0JBQ2xFLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyx1QkFBdUIsRUFDakMsdUJBQXVCLENBQUMsMkJBQTJCLENBQ3BELENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLHlCQUF5QixHQUFHLElBQUksbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQzdFLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyx5QkFBeUIsRUFDbkMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUM3RCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO29CQUN0RSxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUM1RSxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsa0JBQWtCLEVBQzVCLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUNuRSxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxFQUFFO29CQUNMLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDMUQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLFNBQVMsRUFDbkIsbUJBQW1CLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUMxRCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxFQUFFO29CQUNMLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDNUQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLFVBQVUsRUFDcEIsbUJBQW1CLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUMzRCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxFQUFFO29CQUNMLFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztvQkFDbEQsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLGVBQWUsRUFDekIsZUFBZSxDQUFDLDJCQUEyQixDQUM1QyxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMvQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBdUIsRUFDdkIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsS0FBWSxFQUN0QixhQUFhLENBQUMsdUJBQXVCLENBQ3RDLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLE9BQWMsRUFDeEIsbUJBQW1CLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUNwRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxJQUFXLEVBQ3JCLG1CQUFtQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FDakQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsUUFBZSxFQUN6QixtQkFBbUIsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQ3JELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLHVCQUF1QixFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsdUJBQThCLEVBQ3hDLHVCQUF1QixDQUFDLHVCQUF1QixDQUNoRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyx5QkFBeUIsRUFBRTtZQUN2QyxPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLHlCQUFnQyxFQUMxQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQ3pELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLElBQVcsRUFDckIsSUFBSSxDQUFDLHVCQUF1QixDQUM3QixDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtZQUNoQyxPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLGtCQUF5QixFQUNuQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FDL0QsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLEVBQUUsRUFDRixTQUFTLENBQUMsU0FBZ0IsRUFDMUIsbUJBQW1CLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUN0RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDeEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsRUFBRSxFQUNGLFNBQVMsQ0FBQyxVQUFpQixFQUMzQixtQkFBbUIsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQ3ZELENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUM3QixPQUFPLENBQUMsWUFBWSxDQUNsQixFQUFFLEVBQ0YsU0FBUyxDQUFDLGVBQXNCLEVBQ2hDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FDeEMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUF1REQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQy9OLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUE4QztRQUN4RCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQzdOLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUEyQztRQUNsRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQ2hPLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUErQztRQUMxRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQzVOLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSx1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQUksdUJBQXVCLENBQUMsS0FBMEM7UUFDcEUsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDN00sSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFBSSx5QkFBeUI7UUFHM0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUkseUJBQXlCLENBQzNCLEtBQW1EO1FBRW5ELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQzNNLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztTQUM5RDtRQUNELElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBdUI7UUFDOUIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUNoTyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUNwQixLQUF5RDtRQUV6RCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUNsTixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWdEO1FBQzVELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDM04sSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWlEO1FBQzlELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDMU4sSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksZUFBZSxDQUFDLEtBQWtDO1FBQ3BELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQ3JOLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQXlCO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNyRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUM5RCx1QkFBdUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO2dCQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRTtnQkFDekMsQ0FBQyxDQUFDLFNBQVM7WUFDYix5QkFBeUIsRUFBRSxJQUFJLENBQUMseUJBQXlCO2dCQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtnQkFDM0MsQ0FBQyxDQUFDLFNBQVM7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2dCQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtnQkFDcEMsQ0FBQyxDQUFDLFNBQVM7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNqRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNwRSxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRTtnQkFDakMsQ0FBQyxDQUFDLFNBQVM7WUFDYixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM3RCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzFELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN0RSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO2dCQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxJQUFJO1lBQ1IseUJBQXlCLEVBQUUsSUFBSSxDQUFDLHlCQUF5QjtnQkFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUN4RCxDQUFDLENBQUMsSUFBSTtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMxRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2dCQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxJQUFJO1lBQ1IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3pFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDekMsQ0FBQyxDQUFDLElBQUk7WUFDUixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxJQUFJO1lBQ1IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLENBQUM7SUFDSixDQUFDOztBQWxkTSxlQUFFLEdBQUcsZ0NBQWdDLENBQUM7QUFvZC9DLFdBQWMsWUFBWTtJQW9DeEIsSUFBWSxRQWFYO0lBYkQsV0FBWSxRQUFRO1FBQ2xCLHVDQUFRLENBQUE7UUFDUix5Q0FBUyxDQUFBO1FBQ1QsNkNBQVcsQ0FBQTtRQUNYLHVDQUFRLENBQUE7UUFDUiwrQ0FBWSxDQUFBO1FBQ1osNkVBQTJCLENBQUE7UUFDM0IsaUZBQTZCLENBQUE7UUFDN0IsdUNBQVEsQ0FBQTtRQUNSLG1FQUFzQixDQUFBO1FBQ3RCLGlEQUFhLENBQUE7UUFDYixvREFBZSxDQUFBO1FBQ2YsOERBQW9CLENBQUE7SUFDdEIsQ0FBQyxFQWJXLFFBQVEsR0FBUixxQkFBUSxLQUFSLHFCQUFRLFFBYW5CO0FBQ0gsQ0FBQyxFQWxEYSxZQUFZLEtBQVosWUFBWSxRQWtEekI7QUFFRDs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFZO0lBc0p2Qjs7O09BR0c7SUFDSCxZQUFZLE1BQWdEO1FBTnBELFVBQUssR0FBMEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFPaEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFDM0IsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDekQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUk7WUFDckIsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDbkQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVE7WUFDN0IsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUMzRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1lBQy9CLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDN0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVU7WUFDakMsQ0FBQyxDQUFDLElBQUksbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUMvRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBM0tEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUF1QjtRQUN6QyxTQUFTLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUF1QixFQUN2QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzlELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxPQUFPLEVBQ2pCLG1CQUFtQixDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FDaEUsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3hELE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxJQUFJLEVBQ2QsbUJBQW1CLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUM3RCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUNoRSxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsUUFBUSxFQUNsQixtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FDakUsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDdEUsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ2xFLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxTQUFTLEVBQ25CLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUNsRSxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUNwRSxPQUFPLENBQUMsV0FBVyxDQUNqQixTQUFTLENBQUMsVUFBVSxFQUNwQixtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FDbkUsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN2QjtTQUNGO1FBRUQsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBdUIsRUFDdkIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLE9BQWMsRUFDeEIsbUJBQW1CLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUM1RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxJQUFXLEVBQ3JCLG1CQUFtQixDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FDekQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsUUFBZSxFQUN6QixtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FDN0QsQ0FBQztTQUNIO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsSUFBVyxFQUNyQixJQUFJLENBQUMsdUJBQXVCLENBQzdCLENBQUM7U0FDSDtRQUNELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsWUFBWSxDQUNsQixDQUFDLEVBQ0QsU0FBUyxDQUFDLFNBQWdCLEVBQzFCLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUM5RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDeEIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxVQUFpQixFQUMzQixtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FDL0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQXFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLEtBQXlCO1FBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQXNEO1FBQ2hFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDMUYsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQW1EO1FBQzFELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDN0YsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQXVEO1FBQ2xFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDekYsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQXVCO1FBQzlCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDN0YsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQXdEO1FBQ3BFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDeEYsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQXlEO1FBQ3RFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDdkYsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUM5RCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNqRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ25FLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMxRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDdEUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzFELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN6RSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7O0FBeFNNLGVBQUUsR0FBRyxnQ0FBZ0MsQ0FBQztBQTBTL0MsV0FBYyxZQUFZO0lBMEJ4QixJQUFZLFFBUVg7SUFSRCxXQUFZLFFBQVE7UUFDbEIsdUNBQVEsQ0FBQTtRQUNSLDZDQUFXLENBQUE7UUFDWCx1Q0FBUSxDQUFBO1FBQ1IsK0NBQVksQ0FBQTtRQUNaLHVDQUFRLENBQUE7UUFDUixpREFBYSxDQUFBO1FBQ2IsbURBQWMsQ0FBQTtJQUNoQixDQUFDLEVBUlcsUUFBUSxHQUFSLHFCQUFRLEtBQVIscUJBQVEsUUFRbkI7QUFDSCxDQUFDLEVBbkNhLFlBQVksS0FBWixZQUFZLFFBbUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDAwIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvdWlkLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDEgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9maWxlLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDIgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9zdGlja2VyLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDMgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9sb2NhdGlvbi5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA0IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcGF5bWVudC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA1IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvcGVyc2lzdGVudC1ldmVudC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDA2IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvc2hhcmUtcHJpdmF0ZS1kYXRhLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDcgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9mb3JtLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDggZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9wb2xsLnBiJztcbmltcG9ydCAqIGFzIHByb3RvUHViVjFNb2RlbHMwMDkgZnJvbSAnLi4vLi4vcHViL3YxL21vZGVscy9tdWMucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMCBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL2NhbGwucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxMSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL21hcmt1cC5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEyIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvY2F0ZWdvcmllcy5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDEzIGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvc2Vlbi5wYic7XG5pbXBvcnQgKiBhcyBwcm90b1B1YlYxTW9kZWxzMDE0IGZyb20gJy4uLy4uL3B1Yi92MS9tb2RlbHMvYWN0aXZpdHkucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxNSBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL21lc3NhZ2UucGInO1xuaW1wb3J0ICogYXMgcHJvdG9QdWJWMU1vZGVsczAxNiBmcm9tICcuLi8uLi9wdWIvdjEvbW9kZWxzL3Jvb20tbWV0YWRhdGEucGInO1xuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5Fc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxXG4gKi9cbmV4cG9ydCBjbGFzcyBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEoKTtcbiAgICBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcSkge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFc3RhYmxpc2hTZXJ2ZXJTaWRlU3RyZWFtUmVxLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEuQXNPYmplY3Qge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEVzdGFibGlzaFNlcnZlclNpZGVTdHJlYW1SZXFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge31cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRXN0YWJsaXNoU2VydmVyU2lkZVN0cmVhbVJlcVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7fVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLlNlbmRDbGllbnRQYWNrZXRSZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbmRDbGllbnRQYWNrZXRSZXMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5TZW5kQ2xpZW50UGFja2V0UmVzJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2VuZENsaWVudFBhY2tldFJlcygpO1xuICAgIFNlbmRDbGllbnRQYWNrZXRSZXMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTZW5kQ2xpZW50UGFja2V0UmVzKSB7fVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNlbmRDbGllbnRQYWNrZXRSZXMsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2VuZENsaWVudFBhY2tldFJlcy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNlbmRDbGllbnRQYWNrZXRSZXMsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge31cblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFNlbmRDbGllbnRQYWNrZXRSZXMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2VuZENsaWVudFBhY2tldFJlcy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgU2VuZENsaWVudFBhY2tldFJlcy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2VuZENsaWVudFBhY2tldFJlcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTZW5kQ2xpZW50UGFja2V0UmVzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNlbmRDbGllbnRQYWNrZXRSZXMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZW5kQ2xpZW50UGFja2V0UmVzIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTZW5kQ2xpZW50UGFja2V0UmVzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHt9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNlbmRDbGllbnRQYWNrZXRSZXNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge31cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5QaW5nXG4gKi9cbmV4cG9ydCBjbGFzcyBQaW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuUGluZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBpbmcoKTtcbiAgICBQaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUGluZykge1xuICAgIF9pbnN0YW5jZS5sYXN0UG9uZ1RpbWUgPSBfaW5zdGFuY2UubGFzdFBvbmdUaW1lIHx8ICcwJztcbiAgICBfaW5zdGFuY2UuY2xpZW50SXNBY3RpdmUgPSBfaW5zdGFuY2UuY2xpZW50SXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnNob3VsZFRyaWdnZXJBY3RpdmVVc2VyID1cbiAgICAgIF9pbnN0YW5jZS5zaG91bGRUcmlnZ2VyQWN0aXZlVXNlciB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IFBpbmcsIF9yZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmxhc3RQb25nVGltZSA9IF9yZWFkZXIucmVhZEludDY0U3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuY2xpZW50SXNBY3RpdmUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2hvdWxkVHJpZ2dlckFjdGl2ZVVzZXIgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQaW5nLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogUGluZywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5sYXN0UG9uZ1RpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQ2NFN0cmluZygxLCBfaW5zdGFuY2UubGFzdFBvbmdUaW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jbGllbnRJc0FjdGl2ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMiwgX2luc3RhbmNlLmNsaWVudElzQWN0aXZlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zaG91bGRUcmlnZ2VyQWN0aXZlVXNlcikge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMywgX2luc3RhbmNlLnNob3VsZFRyaWdnZXJBY3RpdmVVc2VyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYXN0UG9uZ1RpbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2NsaWVudElzQWN0aXZlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc2hvdWxkVHJpZ2dlckFjdGl2ZVVzZXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUGluZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQaW5nLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhc3RQb25nVGltZSA9IF92YWx1ZS5sYXN0UG9uZ1RpbWU7XG4gICAgdGhpcy5jbGllbnRJc0FjdGl2ZSA9IF92YWx1ZS5jbGllbnRJc0FjdGl2ZTtcbiAgICB0aGlzLnNob3VsZFRyaWdnZXJBY3RpdmVVc2VyID0gX3ZhbHVlLnNob3VsZFRyaWdnZXJBY3RpdmVVc2VyO1xuICAgIFBpbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYXN0UG9uZ1RpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFBvbmdUaW1lO1xuICB9XG4gIHNldCBsYXN0UG9uZ1RpbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhc3RQb25nVGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjbGllbnRJc0FjdGl2ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SXNBY3RpdmU7XG4gIH1cbiAgc2V0IGNsaWVudElzQWN0aXZlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2xpZW50SXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2hvdWxkVHJpZ2dlckFjdGl2ZVVzZXIoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZFRyaWdnZXJBY3RpdmVVc2VyO1xuICB9XG4gIHNldCBzaG91bGRUcmlnZ2VyQWN0aXZlVXNlcih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nob3VsZFRyaWdnZXJBY3RpdmVVc2VyID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUGluZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBQaW5nLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdFBvbmdUaW1lOiB0aGlzLmxhc3RQb25nVGltZSxcbiAgICAgIGNsaWVudElzQWN0aXZlOiB0aGlzLmNsaWVudElzQWN0aXZlLFxuICAgICAgc2hvdWxkVHJpZ2dlckFjdGl2ZVVzZXI6IHRoaXMuc2hvdWxkVHJpZ2dlckFjdGl2ZVVzZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQaW5nLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdFBvbmdUaW1lOiB0aGlzLmxhc3RQb25nVGltZSxcbiAgICAgIGNsaWVudElzQWN0aXZlOiB0aGlzLmNsaWVudElzQWN0aXZlLFxuICAgICAgc2hvdWxkVHJpZ2dlckFjdGl2ZVVzZXI6IHRoaXMuc2hvdWxkVHJpZ2dlckFjdGl2ZVVzZXJcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBpbmcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFBpbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhc3RQb25nVGltZT86IHN0cmluZztcbiAgICBjbGllbnRJc0FjdGl2ZT86IGJvb2xlYW47XG4gICAgc2hvdWxkVHJpZ2dlckFjdGl2ZVVzZXI/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFBpbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhc3RQb25nVGltZT86IHN0cmluZztcbiAgICBjbGllbnRJc0FjdGl2ZT86IGJvb2xlYW47XG4gICAgc2hvdWxkVHJpZ2dlckFjdGl2ZVVzZXI/OiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvdG8ucHViLnYxLmNvcmUuUG9uZ1xuICovXG5leHBvcnQgY2xhc3MgUG9uZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLlBvbmcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQb25nKCk7XG4gICAgUG9uZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFBvbmcpIHtcbiAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfaW5zdGFuY2UucGFja2V0SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNlcnZlclRpbWUgPSBfaW5zdGFuY2Uuc2VydmVyVGltZSB8fCAnMCc7XG4gICAgX2luc3RhbmNlLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyA9XG4gICAgICBfaW5zdGFuY2Uuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoX2luc3RhbmNlOiBQb25nLCBfcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYWNrZXRJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNlcnZlclRpbWUgPSBfcmVhZGVyLnJlYWRJbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFBvbmcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBQb25nLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2VydmVyVGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZUludDY0U3RyaW5nKDIsIF9pbnN0YW5jZS5zZXJ2ZXJUaW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDMsIF9pbnN0YW5jZS5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhY2tldElkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zZXJ2ZXJUaW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM/OiBQb25nLlN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFBvbmcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UG9uZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYWNrZXRJZCA9IF92YWx1ZS5wYWNrZXRJZDtcbiAgICB0aGlzLnNlcnZlclRpbWUgPSBfdmFsdWUuc2VydmVyVGltZTtcbiAgICB0aGlzLnN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyA9IF92YWx1ZS5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM7XG4gICAgUG9uZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhY2tldElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldElkO1xuICB9XG4gIHNldCBwYWNrZXRJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2V0SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2VydmVyVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJUaW1lO1xuICB9XG4gIHNldCBzZXJ2ZXJUaW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXJ2ZXJUaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cygpOlxuICAgIHwgUG9uZy5TdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXNcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cztcbiAgfVxuICBzZXQgc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzKFxuICAgIHZhbHVlOiBQb25nLlN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1cyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBQb25nLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFBvbmcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYWNrZXRJZDogdGhpcy5wYWNrZXRJZCxcbiAgICAgIHNlcnZlclRpbWU6IHRoaXMuc2VydmVyVGltZSxcbiAgICAgIHN0cmVhbUlucHV0Q2FwYWJpbGl0eVN0YXR1czogdGhpcy5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBQb25nLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBzZXJ2ZXJUaW1lOiB0aGlzLnNlcnZlclRpbWUsXG4gICAgICBzdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM6XG4gICAgICAgIFBvbmcuU3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzW1xuICAgICAgICAgIHRoaXMuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5zdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzXG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBvbmcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFBvbmdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIHNlcnZlclRpbWU/OiBzdHJpbmc7XG4gICAgc3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzPzogUG9uZy5TdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUG9uZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFja2V0SWQ/OiBzdHJpbmc7XG4gICAgc2VydmVyVGltZT86IHN0cmluZztcbiAgICBzdHJlYW1JbnB1dENhcGFiaWxpdHlTdGF0dXM/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGVudW0gU3RyZWFtSW5wdXRDYXBhYmlsaXR5U3RhdHVzIHtcbiAgICBISUdIX0FWQUlMQUJJTElUWSA9IDAsXG4gICAgTk9UX0FWQUlMQUJMRSA9IDEsXG4gICAgTE9XX0FWQUlMQUJJTElUWSA9IDJcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLkV4cGxldGl2ZVBhY2tldFxuICovXG5leHBvcnQgY2xhc3MgRXhwbGV0aXZlUGFja2V0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuRXhwbGV0aXZlUGFja2V0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRXhwbGV0aXZlUGFja2V0KCk7XG4gICAgRXhwbGV0aXZlUGFja2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRXhwbGV0aXZlUGFja2V0KSB7XG4gICAgX2luc3RhbmNlLmJvZHkgPSBfaW5zdGFuY2UuYm9keSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEV4cGxldGl2ZVBhY2tldCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYm9keSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRXhwbGV0aXZlUGFja2V0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRXhwbGV0aXZlUGFja2V0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmJvZHkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2JvZHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBFeHBsZXRpdmVQYWNrZXQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RXhwbGV0aXZlUGFja2V0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmJvZHkgPSBfdmFsdWUuYm9keTtcbiAgICBFeHBsZXRpdmVQYWNrZXQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBib2R5KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JvZHk7XG4gIH1cbiAgc2V0IGJvZHkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JvZHkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFeHBsZXRpdmVQYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogRXhwbGV0aXZlUGFja2V0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogdGhpcy5ib2R5XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRXhwbGV0aXZlUGFja2V0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogdGhpcy5ib2R5XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFeHBsZXRpdmVQYWNrZXQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEV4cGxldGl2ZVBhY2tldFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYm9keT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBFeHBsZXRpdmVQYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGJvZHk/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5Sb29tUHJlc2VuY2VUeXBlQ2hhbmdlZFxuICovXG5leHBvcnQgY2xhc3MgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5Sb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKCk7XG4gICAgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCkge1xuICAgIF9pbnN0YW5jZS51aWQgPSBfaW5zdGFuY2UudWlkIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucHJlc2VuY2VUeXBlID0gX2luc3RhbmNlLnByZXNlbmNlVHlwZSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnVpZCA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudWlkLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wcmVzZW5jZVR5cGUgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnVpZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS51aWQgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wcmVzZW5jZVR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS5wcmVzZW5jZVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VpZD86IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkO1xuICBwcml2YXRlIF9wcmVzZW5jZVR5cGU/OiBwcm90b1B1YlYxTW9kZWxzMDE2LlByZXNlbmNlVHlwZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVpZCA9IF92YWx1ZS51aWQgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQoX3ZhbHVlLnVpZCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmVzZW5jZVR5cGUgPSBfdmFsdWUucHJlc2VuY2VUeXBlO1xuICAgIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdWlkKCk6IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdWlkO1xuICB9XG4gIHNldCB1aWQodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMDAuVWlkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdWlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHByZXNlbmNlVHlwZSgpOiBwcm90b1B1YlYxTW9kZWxzMDE2LlByZXNlbmNlVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNlbmNlVHlwZTtcbiAgfVxuICBzZXQgcHJlc2VuY2VUeXBlKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE2LlByZXNlbmNlVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3ByZXNlbmNlVHlwZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLnVpZCA/IHRoaXMudWlkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwcmVzZW5jZVR5cGU6IHRoaXMucHJlc2VuY2VUeXBlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMudWlkID8gdGhpcy51aWQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcHJlc2VuY2VUeXBlOlxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE2LlByZXNlbmNlVHlwZVtcbiAgICAgICAgICB0aGlzLnByZXNlbmNlVHlwZSA9PT0gbnVsbCB8fCB0aGlzLnByZXNlbmNlVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5wcmVzZW5jZVR5cGVcbiAgICAgICAgXVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB1aWQ/OiBwcm90b1B1YlYxTW9kZWxzMDAwLlVpZC5Bc09iamVjdDtcbiAgICBwcmVzZW5jZVR5cGU/OiBwcm90b1B1YlYxTW9kZWxzMDE2LlByZXNlbmNlVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdWlkPzogcHJvdG9QdWJWMU1vZGVsczAwMC5VaWQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHByZXNlbmNlVHlwZT86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLkVycm9yT25QYWNrZXRcbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9yT25QYWNrZXQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdwcm90by5wdWIudjEuY29yZS5FcnJvck9uUGFja2V0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRXJyb3JPblBhY2tldCgpO1xuICAgIEVycm9yT25QYWNrZXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBFcnJvck9uUGFja2V0KSB7XG4gICAgX2luc3RhbmNlLnBhY2tldElkID0gX2luc3RhbmNlLnBhY2tldElkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5lcnJvciA9IF9pbnN0YW5jZS5lcnJvciB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRXJyb3JPblBhY2tldCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5lcnJvciA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEVycm9yT25QYWNrZXQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBFcnJvck9uUGFja2V0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhY2tldElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYWNrZXRJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZXJyb3IpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS5lcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFja2V0SWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Vycm9yPzogRXJyb3JPblBhY2tldC5FcnJvcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEVycm9yT25QYWNrZXQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RXJyb3JPblBhY2tldC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYWNrZXRJZCA9IF92YWx1ZS5wYWNrZXRJZDtcbiAgICB0aGlzLmVycm9yID0gX3ZhbHVlLmVycm9yO1xuICAgIEVycm9yT25QYWNrZXQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYWNrZXRJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRJZDtcbiAgfVxuICBzZXQgcGFja2V0SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhY2tldElkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVycm9yKCk6IEVycm9yT25QYWNrZXQuRXJyb3IgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgfVxuICBzZXQgZXJyb3IodmFsdWU6IEVycm9yT25QYWNrZXQuRXJyb3IgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lcnJvciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEVycm9yT25QYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogRXJyb3JPblBhY2tldC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhY2tldElkOiB0aGlzLnBhY2tldElkLFxuICAgICAgZXJyb3I6IHRoaXMuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBFcnJvck9uUGFja2V0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFja2V0SWQ6IHRoaXMucGFja2V0SWQsXG4gICAgICBlcnJvcjpcbiAgICAgICAgRXJyb3JPblBhY2tldC5FcnJvcltcbiAgICAgICAgICB0aGlzLmVycm9yID09PSBudWxsIHx8IHRoaXMuZXJyb3IgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLmVycm9yXG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEVycm9yT25QYWNrZXQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEVycm9yT25QYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhY2tldElkPzogc3RyaW5nO1xuICAgIGVycm9yPzogRXJyb3JPblBhY2tldC5FcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBFcnJvck9uUGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYWNrZXRJZD86IHN0cmluZztcbiAgICBlcnJvcj86IHN0cmluZztcbiAgfVxuICBleHBvcnQgZW51bSBFcnJvciB7XG4gICAgVU5LTk9XTiA9IDAsXG4gICAgQkFEX1JFUVVFU1QgPSAxLFxuICAgIFVOQVVUSEVOVElDQVRFRCA9IDIsXG4gICAgUEVSTUlTU0lPTl9ERU5JRUQgPSAzLFxuICAgIE5PVF9GT1VORCA9IDQsXG4gICAgQ09ORkxJQ1QgPSA1LFxuICAgIFJFU09VUkNFX0VYSEFVU1RFRCA9IDYsXG4gICAgSU5URVJOQUwgPSA3LFxuICAgIFVOSU1QTEVNRU5URUQgPSA4LFxuICAgIFVOQVZBSUxBQkxFID0gOSxcbiAgICBERUFETElORV9FWENFRURFRCA9IDEwXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBwcm90by5wdWIudjEuY29yZS5TZXJ2ZXJQYWNrZXRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlclBhY2tldCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ3Byb3RvLnB1Yi52MS5jb3JlLlNlcnZlclBhY2tldCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlcnZlclBhY2tldCgpO1xuICAgIFNlcnZlclBhY2tldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFNlcnZlclBhY2tldCkge1xuICAgIF9pbnN0YW5jZS5wYWNrZXRQYWRkaW5nID0gX2luc3RhbmNlLnBhY2tldFBhZGRpbmcgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTZXJ2ZXJQYWNrZXQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmVycm9yID0gbmV3IEVycm9yT25QYWNrZXQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmVycm9yLFxuICAgICAgICAgICAgRXJyb3JPblBhY2tldC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2UgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2VlbiA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW4oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNlZW4sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW4uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3Rpdml0eSA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5hY3Rpdml0eSxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHkuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IG5ldyBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uucm9vbVByZXNlbmNlVHlwZUNoYW5nZWQsXG4gICAgICAgICAgICBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAwMy5MaXZlTG9jYXRpb24oKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLnBvbmcgPSBuZXcgUG9uZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoX2luc3RhbmNlLnBvbmcsIFBvbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIF9pbnN0YW5jZS5tZXNzYWdlRGVsaXZlcnlBY2sgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlRGVsaXZlcnlBY2soKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VEZWxpdmVyeUFjayxcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZURlbGl2ZXJ5QWNrLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbGxPZmZlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FsbE9mZmVyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlciA9IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNhbGxBbnN3ZXIsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZXhwbGV0aXZlUGFja2V0ID0gbmV3IEV4cGxldGl2ZVBhY2tldCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZXhwbGV0aXZlUGFja2V0LFxuICAgICAgICAgICAgRXhwbGV0aXZlUGFja2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UucGFja2V0UGFkZGluZyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2VydmVyUGFja2V0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogU2VydmVyUGFja2V0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmVycm9yKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmVycm9yIGFzIGFueSxcbiAgICAgICAgRXJyb3JPblBhY2tldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2UgYXMgYW55LFxuICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2Vlbikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5zZWVuIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFjdGl2aXR5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmFjdGl2aXR5IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCBhcyBhbnksXG4gICAgICAgIFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBfaW5zdGFuY2UubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZCBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBvbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBfaW5zdGFuY2UucG9uZyBhcyBhbnksXG4gICAgICAgIFBvbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWVzc2FnZURlbGl2ZXJ5QWNrKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOSxcbiAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VEZWxpdmVyeUFjayBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZURlbGl2ZXJ5QWNrLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbGxPZmZlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEwLFxuICAgICAgICBfaW5zdGFuY2UuY2FsbE9mZmVyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbEFuc3dlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDExLFxuICAgICAgICBfaW5zdGFuY2UuY2FsbEFuc3dlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5leHBsZXRpdmVQYWNrZXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxMixcbiAgICAgICAgX2luc3RhbmNlLmV4cGxldGl2ZVBhY2tldCBhcyBhbnksXG4gICAgICAgIEV4cGxldGl2ZVBhY2tldC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYWNrZXRQYWRkaW5nKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDYsIF9pbnN0YW5jZS5wYWNrZXRQYWRkaW5nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9lcnJvcj86IEVycm9yT25QYWNrZXQ7XG4gIHByaXZhdGUgX21lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2U7XG4gIHByaXZhdGUgX3NlZW4/OiBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW47XG4gIHByaXZhdGUgX2FjdGl2aXR5PzogcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eTtcbiAgcHJpdmF0ZSBfcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ/OiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZDtcbiAgcHJpdmF0ZSBfbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZD86IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uO1xuICBwcml2YXRlIF9wb25nPzogUG9uZztcbiAgcHJpdmF0ZSBfbWVzc2FnZURlbGl2ZXJ5QWNrPzogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlRGVsaXZlcnlBY2s7XG4gIHByaXZhdGUgX2NhbGxPZmZlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyO1xuICBwcml2YXRlIF9jYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyO1xuICBwcml2YXRlIF9leHBsZXRpdmVQYWNrZXQ/OiBFeHBsZXRpdmVQYWNrZXQ7XG4gIHByaXZhdGUgX3BhY2tldFBhZGRpbmc/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdHlwZTogU2VydmVyUGFja2V0LlR5cGVDYXNlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTZXJ2ZXJQYWNrZXQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2VydmVyUGFja2V0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVycm9yID0gX3ZhbHVlLmVycm9yID8gbmV3IEVycm9yT25QYWNrZXQoX3ZhbHVlLmVycm9yKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2UgPSBfdmFsdWUubWVzc2FnZVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlKF92YWx1ZS5tZXNzYWdlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWVuID0gX3ZhbHVlLnNlZW5cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuU2VlbihfdmFsdWUuc2VlbilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZpdHkgPSBfdmFsdWUuYWN0aXZpdHlcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHkoX3ZhbHVlLmFjdGl2aXR5KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IF92YWx1ZS5yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZFxuICAgICAgPyBuZXcgUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQoX3ZhbHVlLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gX3ZhbHVlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWRcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uKF92YWx1ZS5saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb25nID0gX3ZhbHVlLnBvbmcgPyBuZXcgUG9uZyhfdmFsdWUucG9uZykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlRGVsaXZlcnlBY2sgPSBfdmFsdWUubWVzc2FnZURlbGl2ZXJ5QWNrXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VEZWxpdmVyeUFjayhfdmFsdWUubWVzc2FnZURlbGl2ZXJ5QWNrKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsT2ZmZXIgPSBfdmFsdWUuY2FsbE9mZmVyXG4gICAgICA/IG5ldyBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlcihfdmFsdWUuY2FsbE9mZmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsQW5zd2VyID0gX3ZhbHVlLmNhbGxBbnN3ZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlcihfdmFsdWUuY2FsbEFuc3dlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZXhwbGV0aXZlUGFja2V0ID0gX3ZhbHVlLmV4cGxldGl2ZVBhY2tldFxuICAgICAgPyBuZXcgRXhwbGV0aXZlUGFja2V0KF92YWx1ZS5leHBsZXRpdmVQYWNrZXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhY2tldFBhZGRpbmcgPSBfdmFsdWUucGFja2V0UGFkZGluZztcbiAgICBTZXJ2ZXJQYWNrZXQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBlcnJvcigpOiBFcnJvck9uUGFja2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gIH1cbiAgc2V0IGVycm9yKHZhbHVlOiBFcnJvck9uUGFja2V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuZXJyb3I7XG4gICAgfVxuICAgIHRoaXMuX2Vycm9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2UoKTogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuICBzZXQgbWVzc2FnZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLm1lc3NhZ2U7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2VlbigpOiBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZWVuO1xuICB9XG4gIHNldCBzZWVuKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW4gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2Uuc2VlbjtcbiAgICB9XG4gICAgdGhpcy5fc2VlbiA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3Rpdml0eSgpOiBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZpdHk7XG4gIH1cbiAgc2V0IGFjdGl2aXR5KHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuYWN0aXZpdHk7XG4gICAgfVxuICAgIHRoaXMuX2FjdGl2aXR5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKCk6IFJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ7XG4gIH1cbiAgc2V0IHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkKHZhbHVlOiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkO1xuICAgIH1cbiAgICB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkKCk6XG4gICAgfCBwcm90b1B1YlYxTW9kZWxzMDAzLkxpdmVMb2NhdGlvblxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZDtcbiAgfVxuICBzZXQgbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZChcbiAgICB2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAwMy5MaXZlTG9jYXRpb24gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3Jvb21QcmVzZW5jZVR5cGVDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ7XG4gICAgfVxuICAgIHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcG9uZygpOiBQb25nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9uZztcbiAgfVxuICBzZXQgcG9uZyh2YWx1ZTogUG9uZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9tZXNzYWdlRGVsaXZlcnlBY2sgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdGhpcy5fZXhwbGV0aXZlUGFja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IFNlcnZlclBhY2tldC5UeXBlQ2FzZS5wb25nO1xuICAgIH1cbiAgICB0aGlzLl9wb25nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VEZWxpdmVyeUFjaygpOiBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VEZWxpdmVyeUFjayB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjaztcbiAgfVxuICBzZXQgbWVzc2FnZURlbGl2ZXJ5QWNrKFxuICAgIHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VEZWxpdmVyeUFjayB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gU2VydmVyUGFja2V0LlR5cGVDYXNlLm1lc3NhZ2VEZWxpdmVyeUFjaztcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxPZmZlcigpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxPZmZlcjtcbiAgfVxuICBzZXQgY2FsbE9mZmVyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbEFuc3dlciA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuY2FsbE9mZmVyO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsT2ZmZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FsbEFuc3dlcigpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsQW5zd2VyO1xuICB9XG4gIHNldCBjYWxsQW5zd2VyKHZhbHVlOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLl9tZXNzYWdlID0gdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSB0aGlzLl9saXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkID0gdGhpcy5fcG9uZyA9IHRoaXMuX21lc3NhZ2VEZWxpdmVyeUFjayA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2V4cGxldGl2ZVBhY2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuY2FsbEFuc3dlcjtcbiAgICB9XG4gICAgdGhpcy5fY2FsbEFuc3dlciA9IHZhbHVlO1xuICB9XG4gIGdldCBleHBsZXRpdmVQYWNrZXQoKTogRXhwbGV0aXZlUGFja2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwbGV0aXZlUGFja2V0O1xuICB9XG4gIHNldCBleHBsZXRpdmVQYWNrZXQodmFsdWU6IEV4cGxldGl2ZVBhY2tldCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9yb29tUHJlc2VuY2VUeXBlQ2hhbmdlZCA9IHRoaXMuX2xpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSB0aGlzLl9wb25nID0gdGhpcy5fbWVzc2FnZURlbGl2ZXJ5QWNrID0gdGhpcy5fY2FsbE9mZmVyID0gdGhpcy5fY2FsbEFuc3dlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSBTZXJ2ZXJQYWNrZXQuVHlwZUNhc2UuZXhwbGV0aXZlUGFja2V0O1xuICAgIH1cbiAgICB0aGlzLl9leHBsZXRpdmVQYWNrZXQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFja2V0UGFkZGluZygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrZXRQYWRkaW5nO1xuICB9XG4gIHNldCBwYWNrZXRQYWRkaW5nKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrZXRQYWRkaW5nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2VydmVyUGFja2V0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFNlcnZlclBhY2tldC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0aGlzLmVycm9yID8gdGhpcy5lcnJvci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzZWVuOiB0aGlzLnNlZW4gPyB0aGlzLnNlZW4udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGl2aXR5OiB0aGlzLmFjdGl2aXR5ID8gdGhpcy5hY3Rpdml0eS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ6IHRoaXMucm9vbVByZXNlbmNlVHlwZUNoYW5nZWRcbiAgICAgICAgPyB0aGlzLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBsaXZlTG9jYXRpb25TdGF0dXNDaGFuZ2VkOiB0aGlzLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWRcbiAgICAgICAgPyB0aGlzLmxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHBvbmc6IHRoaXMucG9uZyA/IHRoaXMucG9uZy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWVzc2FnZURlbGl2ZXJ5QWNrOiB0aGlzLm1lc3NhZ2VEZWxpdmVyeUFja1xuICAgICAgICA/IHRoaXMubWVzc2FnZURlbGl2ZXJ5QWNrLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjYWxsT2ZmZXI6IHRoaXMuY2FsbE9mZmVyID8gdGhpcy5jYWxsT2ZmZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxBbnN3ZXI6IHRoaXMuY2FsbEFuc3dlciA/IHRoaXMuY2FsbEFuc3dlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZXhwbGV0aXZlUGFja2V0OiB0aGlzLmV4cGxldGl2ZVBhY2tldFxuICAgICAgICA/IHRoaXMuZXhwbGV0aXZlUGFja2V0LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBwYWNrZXRQYWRkaW5nOiB0aGlzLnBhY2tldFBhZGRpbmdcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTZXJ2ZXJQYWNrZXQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogdGhpcy5lcnJvciA/IHRoaXMuZXJyb3IudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHNlZW46IHRoaXMuc2VlbiA/IHRoaXMuc2Vlbi50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBhY3Rpdml0eTogdGhpcy5hY3Rpdml0eSA/IHRoaXMuYWN0aXZpdHkudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ6IHRoaXMucm9vbVByZXNlbmNlVHlwZUNoYW5nZWRcbiAgICAgICAgPyB0aGlzLnJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQ6IHRoaXMubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZFxuICAgICAgICA/IHRoaXMubGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBwb25nOiB0aGlzLnBvbmcgPyB0aGlzLnBvbmcudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgbWVzc2FnZURlbGl2ZXJ5QWNrOiB0aGlzLm1lc3NhZ2VEZWxpdmVyeUFja1xuICAgICAgICA/IHRoaXMubWVzc2FnZURlbGl2ZXJ5QWNrLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGNhbGxPZmZlcjogdGhpcy5jYWxsT2ZmZXIgPyB0aGlzLmNhbGxPZmZlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBjYWxsQW5zd2VyOiB0aGlzLmNhbGxBbnN3ZXJcbiAgICAgICAgPyB0aGlzLmNhbGxBbnN3ZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZXhwbGV0aXZlUGFja2V0OiB0aGlzLmV4cGxldGl2ZVBhY2tldFxuICAgICAgICA/IHRoaXMuZXhwbGV0aXZlUGFja2V0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHBhY2tldFBhZGRpbmc6IHRoaXMucGFja2V0UGFkZGluZ1xuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2VydmVyUGFja2V0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTZXJ2ZXJQYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGVycm9yPzogRXJyb3JPblBhY2tldC5Bc09iamVjdDtcbiAgICBtZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlLkFzT2JqZWN0O1xuICAgIHNlZW4/OiBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW4uQXNPYmplY3Q7XG4gICAgYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5LkFzT2JqZWN0O1xuICAgIHJvb21QcmVzZW5jZVR5cGVDaGFuZ2VkPzogUm9vbVByZXNlbmNlVHlwZUNoYW5nZWQuQXNPYmplY3Q7XG4gICAgbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZD86IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uLkFzT2JqZWN0O1xuICAgIHBvbmc/OiBQb25nLkFzT2JqZWN0O1xuICAgIG1lc3NhZ2VEZWxpdmVyeUFjaz86IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZURlbGl2ZXJ5QWNrLkFzT2JqZWN0O1xuICAgIGNhbGxPZmZlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyLkFzT2JqZWN0O1xuICAgIGNhbGxBbnN3ZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXIuQXNPYmplY3Q7XG4gICAgZXhwbGV0aXZlUGFja2V0PzogRXhwbGV0aXZlUGFja2V0LkFzT2JqZWN0O1xuICAgIHBhY2tldFBhZGRpbmc/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU2VydmVyUGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBlcnJvcj86IEVycm9yT25QYWNrZXQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2UuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNlZW4/OiBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW4uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGFjdGl2aXR5PzogcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQ/OiBSb29tUHJlc2VuY2VUeXBlQ2hhbmdlZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGl2ZUxvY2F0aW9uU3RhdHVzQ2hhbmdlZD86IHByb3RvUHViVjFNb2RlbHMwMDMuTGl2ZUxvY2F0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBwb25nPzogUG9uZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWVzc2FnZURlbGl2ZXJ5QWNrPzogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlRGVsaXZlcnlBY2suQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGNhbGxPZmZlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBleHBsZXRpdmVQYWNrZXQ/OiBFeHBsZXRpdmVQYWNrZXQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBhY2tldFBhZGRpbmc/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGVudW0gVHlwZUNhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIGVycm9yID0gMSxcbiAgICBtZXNzYWdlID0gMixcbiAgICBzZWVuID0gMyxcbiAgICBhY3Rpdml0eSA9IDQsXG4gICAgcm9vbVByZXNlbmNlVHlwZUNoYW5nZWQgPSA1LFxuICAgIGxpdmVMb2NhdGlvblN0YXR1c0NoYW5nZWQgPSA2LFxuICAgIHBvbmcgPSA3LFxuICAgIG1lc3NhZ2VEZWxpdmVyeUFjayA9IDgsXG4gICAgY2FsbE9mZmVyID0gOSxcbiAgICBjYWxsQW5zd2VyID0gMTAsXG4gICAgZXhwbGV0aXZlUGFja2V0ID0gMTFcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIHByb3RvLnB1Yi52MS5jb3JlLkNsaWVudFBhY2tldFxuICovXG5leHBvcnQgY2xhc3MgQ2xpZW50UGFja2V0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAncHJvdG8ucHViLnYxLmNvcmUuQ2xpZW50UGFja2V0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xpZW50UGFja2V0KCk7XG4gICAgQ2xpZW50UGFja2V0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2xpZW50UGFja2V0KSB7XG4gICAgX2luc3RhbmNlLmlkID0gX2luc3RhbmNlLmlkIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2xpZW50UGFja2V0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2UgPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlQnlDbGllbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2UsXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VCeUNsaWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnNlZW4gPSBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuQnlDbGllbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNlZW4sXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW5CeUNsaWVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmFjdGl2aXR5ID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHlCeUNsaWVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuYWN0aXZpdHksXG4gICAgICAgICAgICBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5QnlDbGllbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5waW5nID0gbmV3IFBpbmcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKF9pbnN0YW5jZS5waW5nLCBQaW5nLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuY2FsbE9mZmVyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNhbGxPZmZlcixcbiAgICAgICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5jYWxsQW5zd2VyID0gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jYWxsQW5zd2VyLFxuICAgICAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsaWVudFBhY2tldC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENsaWVudFBhY2tldCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuaWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UubWVzc2FnZSBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZUJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2Uuc2VlbiBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTMuU2VlbkJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFjdGl2aXR5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmFjdGl2aXR5IGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eUJ5Q2xpZW50LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBpbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UucGluZyBhcyBhbnksXG4gICAgICAgIFBpbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbE9mZmVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLmNhbGxPZmZlciBhcyBhbnksXG4gICAgICAgIHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY2FsbEFuc3dlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIF9pbnN0YW5jZS5jYWxsQW5zd2VyIGFzIGFueSxcbiAgICAgICAgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX21lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VCeUNsaWVudDtcbiAgcHJpdmF0ZSBfc2Vlbj86IHByb3RvUHViVjFNb2RlbHMwMTMuU2VlbkJ5Q2xpZW50O1xuICBwcml2YXRlIF9hY3Rpdml0eT86IHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHlCeUNsaWVudDtcbiAgcHJpdmF0ZSBfcGluZz86IFBpbmc7XG4gIHByaXZhdGUgX2NhbGxPZmZlcj86IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQ7XG4gIHByaXZhdGUgX2NhbGxBbnN3ZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxBbnN3ZXJCeUNsaWVudDtcblxuICBwcml2YXRlIF90eXBlOiBDbGllbnRQYWNrZXQuVHlwZUNhc2UgPSBDbGllbnRQYWNrZXQuVHlwZUNhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENsaWVudFBhY2tldCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDbGllbnRQYWNrZXQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaWQgPSBfdmFsdWUuaWQ7XG4gICAgdGhpcy5tZXNzYWdlID0gX3ZhbHVlLm1lc3NhZ2VcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZUJ5Q2xpZW50KF92YWx1ZS5tZXNzYWdlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWVuID0gX3ZhbHVlLnNlZW5cbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTMuU2VlbkJ5Q2xpZW50KF92YWx1ZS5zZWVuKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3Rpdml0eSA9IF92YWx1ZS5hY3Rpdml0eVxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eUJ5Q2xpZW50KF92YWx1ZS5hY3Rpdml0eSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGluZyA9IF92YWx1ZS5waW5nID8gbmV3IFBpbmcoX3ZhbHVlLnBpbmcpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FsbE9mZmVyID0gX3ZhbHVlLmNhbGxPZmZlclxuICAgICAgPyBuZXcgcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudChfdmFsdWUuY2FsbE9mZmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5jYWxsQW5zd2VyID0gX3ZhbHVlLmNhbGxBbnN3ZXJcbiAgICAgID8gbmV3IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50KF92YWx1ZS5jYWxsQW5zd2VyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQ2xpZW50UGFja2V0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlKCk6IHByb3RvUHViVjFNb2RlbHMwMTUuTWVzc2FnZUJ5Q2xpZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuICBzZXQgbWVzc2FnZSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlQnlDbGllbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fc2VlbiA9IHRoaXMuX2FjdGl2aXR5ID0gdGhpcy5fcGluZyA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gQ2xpZW50UGFja2V0LlR5cGVDYXNlLm1lc3NhZ2U7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2VlbigpOiBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW5CeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlZW47XG4gIH1cbiAgc2V0IHNlZW4odmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTMuU2VlbkJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3BpbmcgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5zZWVuO1xuICAgIH1cbiAgICB0aGlzLl9zZWVuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFjdGl2aXR5KCk6IHByb3RvUHViVjFNb2RlbHMwMTQuQWN0aXZpdHlCeUNsaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2aXR5O1xuICB9XG4gIHNldCBhY3Rpdml0eSh2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxNC5BY3Rpdml0eUJ5Q2xpZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fcGluZyA9IHRoaXMuX2NhbGxPZmZlciA9IHRoaXMuX2NhbGxBbnN3ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gQ2xpZW50UGFja2V0LlR5cGVDYXNlLmFjdGl2aXR5O1xuICAgIH1cbiAgICB0aGlzLl9hY3Rpdml0eSA9IHZhbHVlO1xuICB9XG4gIGdldCBwaW5nKCk6IFBpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9waW5nO1xuICB9XG4gIHNldCBwaW5nKHZhbHVlOiBQaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLl9zZWVuID0gdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9jYWxsT2ZmZXIgPSB0aGlzLl9jYWxsQW5zd2VyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5waW5nO1xuICAgIH1cbiAgICB0aGlzLl9waW5nID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbGxPZmZlcigpOiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbE9mZmVyO1xuICB9XG4gIHNldCBjYWxsT2ZmZXIodmFsdWU6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbE9mZmVyQnlDbGllbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3BpbmcgPSB0aGlzLl9jYWxsQW5zd2VyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IENsaWVudFBhY2tldC5UeXBlQ2FzZS5jYWxsT2ZmZXI7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxPZmZlciA9IHZhbHVlO1xuICB9XG4gIGdldCBjYWxsQW5zd2VyKCk6IHByb3RvUHViVjFNb2RlbHMwMTAuQ2FsbEFuc3dlckJ5Q2xpZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEFuc3dlcjtcbiAgfVxuICBzZXQgY2FsbEFuc3dlcih2YWx1ZTogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NlZW4gPSB0aGlzLl9hY3Rpdml0eSA9IHRoaXMuX3BpbmcgPSB0aGlzLl9jYWxsT2ZmZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gQ2xpZW50UGFja2V0LlR5cGVDYXNlLmNhbGxBbnN3ZXI7XG4gICAgfVxuICAgIHRoaXMuX2NhbGxBbnN3ZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGllbnRQYWNrZXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xpZW50UGFja2V0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNlZW46IHRoaXMuc2VlbiA/IHRoaXMuc2Vlbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYWN0aXZpdHk6IHRoaXMuYWN0aXZpdHkgPyB0aGlzLmFjdGl2aXR5LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwaW5nOiB0aGlzLnBpbmcgPyB0aGlzLnBpbmcudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxPZmZlcjogdGhpcy5jYWxsT2ZmZXIgPyB0aGlzLmNhbGxPZmZlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY2FsbEFuc3dlcjogdGhpcy5jYWxsQW5zd2VyID8gdGhpcy5jYWxsQW5zd2VyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDbGllbnRQYWNrZXQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSA/IHRoaXMubWVzc2FnZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzZWVuOiB0aGlzLnNlZW4gPyB0aGlzLnNlZW4udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgYWN0aXZpdHk6IHRoaXMuYWN0aXZpdHkgPyB0aGlzLmFjdGl2aXR5LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHBpbmc6IHRoaXMucGluZyA/IHRoaXMucGluZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBjYWxsT2ZmZXI6IHRoaXMuY2FsbE9mZmVyID8gdGhpcy5jYWxsT2ZmZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgY2FsbEFuc3dlcjogdGhpcy5jYWxsQW5zd2VyXG4gICAgICAgID8gdGhpcy5jYWxsQW5zd2VyLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2xpZW50UGFja2V0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGllbnRQYWNrZXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG1lc3NhZ2U/OiBwcm90b1B1YlYxTW9kZWxzMDE1Lk1lc3NhZ2VCeUNsaWVudC5Bc09iamVjdDtcbiAgICBzZWVuPzogcHJvdG9QdWJWMU1vZGVsczAxMy5TZWVuQnlDbGllbnQuQXNPYmplY3Q7XG4gICAgYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5QnlDbGllbnQuQXNPYmplY3Q7XG4gICAgcGluZz86IFBpbmcuQXNPYmplY3Q7XG4gICAgY2FsbE9mZmVyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsT2ZmZXJCeUNsaWVudC5Bc09iamVjdDtcbiAgICBjYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2xpZW50UGFja2V0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBtZXNzYWdlPzogcHJvdG9QdWJWMU1vZGVsczAxNS5NZXNzYWdlQnlDbGllbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNlZW4/OiBwcm90b1B1YlYxTW9kZWxzMDEzLlNlZW5CeUNsaWVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYWN0aXZpdHk/OiBwcm90b1B1YlYxTW9kZWxzMDE0LkFjdGl2aXR5QnlDbGllbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHBpbmc/OiBQaW5nLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsT2ZmZXI/OiBwcm90b1B1YlYxTW9kZWxzMDEwLkNhbGxPZmZlckJ5Q2xpZW50LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBjYWxsQW5zd2VyPzogcHJvdG9QdWJWMU1vZGVsczAxMC5DYWxsQW5zd2VyQnlDbGllbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG4gIGV4cG9ydCBlbnVtIFR5cGVDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBtZXNzYWdlID0gMSxcbiAgICBzZWVuID0gMixcbiAgICBhY3Rpdml0eSA9IDMsXG4gICAgcGluZyA9IDQsXG4gICAgY2FsbE9mZmVyID0gNSxcbiAgICBjYWxsQW5zd2VyID0gNlxuICB9XG59XG4iXX0=