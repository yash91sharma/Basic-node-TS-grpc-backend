// package: plutusportfolio
// file: plutus_portfolio.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as plutus_portfolio_pb from "./plutus_portfolio_pb";

interface IPlutusPortfolioService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sampleGet: IPlutusPortfolioService_ISampleGet;
}

interface IPlutusPortfolioService_ISampleGet extends grpc.MethodDefinition<plutus_portfolio_pb.SampleRequest, plutus_portfolio_pb.SampleResponse> {
    path: "/plutusportfolio.PlutusPortfolio/SampleGet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<plutus_portfolio_pb.SampleRequest>;
    requestDeserialize: grpc.deserialize<plutus_portfolio_pb.SampleRequest>;
    responseSerialize: grpc.serialize<plutus_portfolio_pb.SampleResponse>;
    responseDeserialize: grpc.deserialize<plutus_portfolio_pb.SampleResponse>;
}

export const PlutusPortfolioService: IPlutusPortfolioService;

export interface IPlutusPortfolioServer extends grpc.UntypedServiceImplementation {
    sampleGet: grpc.handleUnaryCall<plutus_portfolio_pb.SampleRequest, plutus_portfolio_pb.SampleResponse>;
}

export interface IPlutusPortfolioClient {
    sampleGet(request: plutus_portfolio_pb.SampleRequest, callback: (error: grpc.ServiceError | null, response: plutus_portfolio_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    sampleGet(request: plutus_portfolio_pb.SampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plutus_portfolio_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    sampleGet(request: plutus_portfolio_pb.SampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plutus_portfolio_pb.SampleResponse) => void): grpc.ClientUnaryCall;
}

export class PlutusPortfolioClient extends grpc.Client implements IPlutusPortfolioClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sampleGet(request: plutus_portfolio_pb.SampleRequest, callback: (error: grpc.ServiceError | null, response: plutus_portfolio_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    public sampleGet(request: plutus_portfolio_pb.SampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: plutus_portfolio_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    public sampleGet(request: plutus_portfolio_pb.SampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: plutus_portfolio_pb.SampleResponse) => void): grpc.ClientUnaryCall;
}
