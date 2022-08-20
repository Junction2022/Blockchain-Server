/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesis.thesis";

export interface Thesis {
  title: string;
  file: string;
  createdAt: string;
  language: string;
  topic: string;
  pageCount: string;
  author: string;
}

const baseThesis: object = {
  title: "",
  file: "",
  createdAt: "",
  language: "",
  topic: "",
  pageCount: "",
  author: "",
};

export const Thesis = {
  encode(message: Thesis, writer: Writer = Writer.create()): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.file !== "") {
      writer.uint32(18).string(message.file);
    }
    if (message.createdAt !== "") {
      writer.uint32(26).string(message.createdAt);
    }
    if (message.language !== "") {
      writer.uint32(34).string(message.language);
    }
    if (message.topic !== "") {
      writer.uint32(42).string(message.topic);
    }
    if (message.pageCount !== "") {
      writer.uint32(50).string(message.pageCount);
    }
    if (message.author !== "") {
      writer.uint32(58).string(message.author);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Thesis {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseThesis } as Thesis;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.file = reader.string();
          break;
        case 3:
          message.createdAt = reader.string();
          break;
        case 4:
          message.language = reader.string();
          break;
        case 5:
          message.topic = reader.string();
          break;
        case 6:
          message.pageCount = reader.string();
          break;
        case 7:
          message.author = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Thesis {
    const message = { ...baseThesis } as Thesis;
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

  toJSON(message: Thesis): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.file !== undefined && (obj.file = message.file);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.language !== undefined && (obj.language = message.language);
    message.topic !== undefined && (obj.topic = message.topic);
    message.pageCount !== undefined && (obj.pageCount = message.pageCount);
    message.author !== undefined && (obj.author = message.author);
    return obj;
  },

  fromPartial(object: DeepPartial<Thesis>): Thesis {
    const message = { ...baseThesis } as Thesis;
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
