/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "thesis.thesis";

export interface MsgCreateThesis {
  creator: string;
  title: string;
  file: string;
  createdAt: string;
  language: string;
  topic: string;
  pageCount: string;
  author: string;
}

export interface MsgCreateThesisResponse {}

const baseMsgCreateThesis: object = {
  creator: "",
  title: "",
  file: "",
  createdAt: "",
  language: "",
  topic: "",
  pageCount: "",
  author: "",
};

export const MsgCreateThesis = {
  encode(message: MsgCreateThesis, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.file !== "") {
      writer.uint32(26).string(message.file);
    }
    if (message.createdAt !== "") {
      writer.uint32(34).string(message.createdAt);
    }
    if (message.language !== "") {
      writer.uint32(42).string(message.language);
    }
    if (message.topic !== "") {
      writer.uint32(50).string(message.topic);
    }
    if (message.pageCount !== "") {
      writer.uint32(58).string(message.pageCount);
    }
    if (message.author !== "") {
      writer.uint32(66).string(message.author);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateThesis {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateThesis } as MsgCreateThesis;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.file = reader.string();
          break;
        case 4:
          message.createdAt = reader.string();
          break;
        case 5:
          message.language = reader.string();
          break;
        case 6:
          message.topic = reader.string();
          break;
        case 7:
          message.pageCount = reader.string();
          break;
        case 8:
          message.author = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateThesis {
    const message = { ...baseMsgCreateThesis } as MsgCreateThesis;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.file !== undefined && object.file !== null) {
      message.file = String(object.file);
    } else {
      message.file = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    if (object.language !== undefined && object.language !== null) {
      message.language = String(object.language);
    } else {
      message.language = "";
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = String(object.topic);
    } else {
      message.topic = "";
    }
    if (object.pageCount !== undefined && object.pageCount !== null) {
      message.pageCount = String(object.pageCount);
    } else {
      message.pageCount = "";
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = String(object.author);
    } else {
      message.author = "";
    }
    return message;
  },

  toJSON(message: MsgCreateThesis): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.file !== undefined && (obj.file = message.file);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.language !== undefined && (obj.language = message.language);
    message.topic !== undefined && (obj.topic = message.topic);
    message.pageCount !== undefined && (obj.pageCount = message.pageCount);
    message.author !== undefined && (obj.author = message.author);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateThesis>): MsgCreateThesis {
    const message = { ...baseMsgCreateThesis } as MsgCreateThesis;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.file !== undefined && object.file !== null) {
      message.file = object.file;
    } else {
      message.file = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    if (object.language !== undefined && object.language !== null) {
      message.language = object.language;
    } else {
      message.language = "";
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = object.topic;
    } else {
      message.topic = "";
    }
    if (object.pageCount !== undefined && object.pageCount !== null) {
      message.pageCount = object.pageCount;
    } else {
      message.pageCount = "";
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    } else {
      message.author = "";
    }
    return message;
  },
};

const baseMsgCreateThesisResponse: object = {};

export const MsgCreateThesisResponse = {
  encode(_: MsgCreateThesisResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateThesisResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateThesisResponse,
    } as MsgCreateThesisResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateThesisResponse {
    const message = {
      ...baseMsgCreateThesisResponse,
    } as MsgCreateThesisResponse;
    return message;
  },

  toJSON(_: MsgCreateThesisResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateThesisResponse>
  ): MsgCreateThesisResponse {
    const message = {
      ...baseMsgCreateThesisResponse,
    } as MsgCreateThesisResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateThesis(request: MsgCreateThesis): Promise<MsgCreateThesisResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateThesis(request: MsgCreateThesis): Promise<MsgCreateThesisResponse> {
    const data = MsgCreateThesis.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Msg", "CreateThesis", data);
    return promise.then((data) =>
      MsgCreateThesisResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
