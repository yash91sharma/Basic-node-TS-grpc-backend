#!/bin/bash

PROTO_OUTPUT_DIR=./proto_autogen
PROTO_INPUT_DIR=//Users/yash/dev/plutus/definitions/proto/
PROTO_INPUT_FILE=plutus_portfolio.proto

mkdir ${PROTO_OUTPUT_DIR}

# Generate JavaScript code
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_OUTPUT_DIR} \
    --grpc_out=grpc_js:${PROTO_OUTPUT_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${PROTO_INPUT_DIR} \
    ${PROTO_INPUT_DIR}${PROTO_INPUT_FILE}

# Generate TypeScript code (d.ts)
npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_OUTPUT_DIR} \
    -I ${PROTO_INPUT_DIR} \
    ${PROTO_INPUT_DIR}${PROTO_INPUT_FILE}