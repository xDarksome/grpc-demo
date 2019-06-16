/**
 * @fileoverview gRPC-Web generated client stub for grcp_demo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.grcp_demo = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grcp_demo.HorizonClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grcp_demo.HorizonPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grcp_demo.LotSelector,
 *   !proto.grcp_demo.LotsPage>}
 */
const methodInfo_Horizon_GetLots = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grcp_demo.LotsPage,
  /** @param {!proto.grcp_demo.LotSelector} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grcp_demo.LotsPage.deserializeBinary
);


/**
 * @param {!proto.grcp_demo.LotSelector} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grcp_demo.LotsPage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grcp_demo.LotsPage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grcp_demo.HorizonClient.prototype.getLots =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grcp_demo.Horizon/GetLots',
      request,
      metadata || {},
      methodInfo_Horizon_GetLots,
      callback);
};


/**
 * @param {!proto.grcp_demo.LotSelector} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grcp_demo.LotsPage>}
 *     A native promise that resolves to the response
 */
proto.grcp_demo.HorizonPromiseClient.prototype.getLots =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grcp_demo.Horizon/GetLots',
      request,
      metadata || {},
      methodInfo_Horizon_GetLots);
};


module.exports = proto.grcp_demo;

