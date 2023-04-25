// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var plutus_portfolio_pb = require('./plutus_portfolio_pb.js');

function serialize_plutusportfolio_SampleRequest(arg) {
  if (!(arg instanceof plutus_portfolio_pb.SampleRequest)) {
    throw new Error('Expected argument of type plutusportfolio.SampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plutusportfolio_SampleRequest(buffer_arg) {
  return plutus_portfolio_pb.SampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_plutusportfolio_SampleResponse(arg) {
  if (!(arg instanceof plutus_portfolio_pb.SampleResponse)) {
    throw new Error('Expected argument of type plutusportfolio.SampleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_plutusportfolio_SampleResponse(buffer_arg) {
  return plutus_portfolio_pb.SampleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PlutusPortfolioService = exports.PlutusPortfolioService = {
  sampleGet: {
    path: '/plutusportfolio.PlutusPortfolio/SampleGet',
    requestStream: false,
    responseStream: false,
    requestType: plutus_portfolio_pb.SampleRequest,
    responseType: plutus_portfolio_pb.SampleResponse,
    requestSerialize: serialize_plutusportfolio_SampleRequest,
    requestDeserialize: deserialize_plutusportfolio_SampleRequest,
    responseSerialize: serialize_plutusportfolio_SampleResponse,
    responseDeserialize: deserialize_plutusportfolio_SampleResponse,
  },
};

exports.PlutusPortfolioClient = grpc.makeGenericClientConstructor(PlutusPortfolioService);
