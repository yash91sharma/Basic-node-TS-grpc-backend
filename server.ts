import {
  ServerUnaryCall,
  sendUnaryData,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { IPlutusPortfolioServer } from "./proto_autogen/plutus_portfolio_grpc_pb";
import {
  SampleRequest,
  SampleResponse,
} from "./proto_autogen/plutus_portfolio_pb";
import { PlutusPortfolioService } from "./proto_autogen/plutus_portfolio_grpc_pb";

const PlutusPortfolioServer: IPlutusPortfolioServer = {
  sampleGet(
    call: ServerUnaryCall<SampleRequest, SampleResponse>,
    callback: sendUnaryData<SampleResponse>
  ) {
    // business logic goes here.
    const response = new SampleResponse();
    response.setResponse("Hello World! " + SampleRequest.toString);
    callback(null, response);
  },
};

const server = new Server();
server.addService(PlutusPortfolioService, PlutusPortfolioServer);
const port = 9091;
const uri = `0.0.0.0:${port}`;
console.log(`Listening on ${uri}`);
server.bindAsync(uri, ServerCredentials.createInsecure(), (err) => {
  if (err) console.log(err);
  server.start();
});