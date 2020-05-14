/*
 * Woden
 * Specification for Woden REST API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateFolder', 'model/UploadFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateFolder'), require('../model/UploadFile'));
  } else {
    // Browser globals (root is window)
    if (!root.Woden) {
      root.Woden = {};
    }
    root.Woden.FileSystemApi = factory(root.Woden.ApiClient, root.Woden.CreateFolder, root.Woden.UploadFile);
  }
}(this, function(ApiClient, CreateFolder, UploadFile) {
  'use strict';

  /**
   * FileSystem service.
   * @module api/FileSystemApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FileSystemApi. 
   * @alias module:api/FileSystemApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createFolder operation.
     * @callback module:api/FileSystemApi~createFolderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create folder
     * Creating folder by user
     * @param {module:model/CreateFolder} body 
     * @param {module:api/FileSystemApi~createFolderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createFolder = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFolder");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/folder', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the downloadFile operation.
     * @callback module:api/FileSystemApi~downloadFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download file
     * Downloading file from current folder
     * @param {String} hash The file hash
     * @param {module:api/FileSystemApi~downloadFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.downloadFile = function(hash, callback) {
      var postBody = null;

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling downloadFile");
      }


      var pathParams = {
        'hash': hash
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/file/{hash}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolder operation.
     * @callback module:api/FileSystemApi~getFolderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get folder
     * Geting folder means that user will receive the contents of the folder (files and folders)
     * @param {String} hash The folder hash
     * @param {module:api/FileSystemApi~getFolderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getFolder = function(hash, callback) {
      var postBody = null;

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getFolder");
      }


      var pathParams = {
        'hash': hash
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/folder/{hash}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the search operation.
     * @callback module:api/FileSystemApi~searchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search
     * Search folders and files means that user will receive folder or file if exist
     * @param {String} name The folder or file name
     * @param {module:api/FileSystemApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.search = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling search");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/search/{name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadFile operation.
     * @callback module:api/FileSystemApi~uploadFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload file
     * Uploading file in current folder
     * @param {module:model/UploadFile} body 
     * @param {module:api/FileSystemApi~uploadFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.uploadFile = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uploadFile");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));