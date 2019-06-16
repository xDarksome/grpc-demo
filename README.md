* Generate Go files
```sh
$ protoc --go_out=plugins=grpc:. api.proto 
```
* Generate JS files
```sh
$ protoc -I=. api.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```
* Compile client
```sh
$ npm install
$ npx webpack client.js
```
* Build&Run server
```sh
go build -o horizon
./horizon
```
* Run envoy
```sh
$ docker build -t helloworld/envoy -f ./envoy.Dockerfile .
$ docker run -d -p 8080:8080 --network=host helloworld/envoy
```
* Serve static
```sh
$ python3 -m http.server 8081
```
* Generate docs
```sh
$ go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc
$ protoc --doc_out=. --doc_opt=html,docs.html *.proto
```
