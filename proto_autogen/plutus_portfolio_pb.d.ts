// package: plutusportfolio
// file: plutus_portfolio.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SampleRequest extends jspb.Message { 
    getRequest(): string;
    setRequest(value: string): SampleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SampleRequest): SampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleRequest;
    static deserializeBinaryFromReader(message: SampleRequest, reader: jspb.BinaryReader): SampleRequest;
}

export namespace SampleRequest {
    export type AsObject = {
        request: string,
    }
}

export class SampleResponse extends jspb.Message { 
    getResponse(): string;
    setResponse(value: string): SampleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SampleResponse): SampleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleResponse;
    static deserializeBinaryFromReader(message: SampleResponse, reader: jspb.BinaryReader): SampleResponse;
}

export namespace SampleResponse {
    export type AsObject = {
        response: string,
    }
}
