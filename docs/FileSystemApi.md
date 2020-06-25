# Woden.FileSystemApi

All URIs are relative to *http://localhost:1823/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFolder**](FileSystemApi.md#createFolder) | **POST** /folder | Create folder
[**downloadFile**](FileSystemApi.md#downloadFile) | **GET** /file/{hash}/{cid} | Download file
[**getFolder**](FileSystemApi.md#getFolder) | **GET** /folder/{hash} | Get folder
[**search**](FileSystemApi.md#search) | **GET** /search/{name} | Search
[**tree**](FileSystemApi.md#tree) | **GET** /tree | Get folders tree
[**updateFile**](FileSystemApi.md#updateFile) | **PUT** /file | Update file
[**uploadFile**](FileSystemApi.md#uploadFile) | **POST** /file | Upload file
[**versions**](FileSystemApi.md#versions) | **GET** /versions/{hash} | Versions of file


<a name="createFolder"></a>
# **createFolder**
> createFolder(body)

Create folder

Creating folder by user

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.FileSystemApi();

var body = new Woden.CreateFolder(); // CreateFolder | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createFolder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFolder**](CreateFolder.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="downloadFile"></a>
# **downloadFile**
> File downloadFile(hash, cid)

Download file

Downloading file from current folder

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.FileSystemApi();

var hash = "hash_example"; // String | The file hash

var cid = "cid_example"; // String | The file version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadFile(hash, cid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The file hash | 
 **cid** | **String**| The file version | 

### Return type

**File**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, image/png, image/gif, image/jpeg, multipart/form-data, application/pdf

<a name="getFolder"></a>
# **getFolder**
> getFolder(hash)

Get folder

Getting folder means that user will receive the contents of the folder (files and folders)

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.FileSystemApi();

var hash = "hash_example"; // String | The folder hash


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFolder(hash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The folder hash | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="search"></a>
# **search**
> search(name)

Search

Search folders and files means that user will receive folder or file if exist

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.FileSystemApi();

var name = "name_example"; // String | The folder or file name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.search(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The folder or file name | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="tree"></a>
# **tree**
> tree()

Get folders tree

Get tree of folders and shared folders of user

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.FileSystemApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tree(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateFile"></a>
# **updateFile**
> updateFile(hash, file)

Update file

Update existing file

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.FileSystemApi();

var hash = "hash_example"; // String | 

var file = "/path/to/file.txt"; // File | File to upload.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFile(hash, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**|  | 
 **file** | **File**| File to upload. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadFile"></a>
# **uploadFile**
> uploadFile(name, parentFolder, file)

Upload file

Uploading file in current folder

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.FileSystemApi();

var name = "name_example"; // String | 

var parentFolder = "parentFolder_example"; // String | 

var file = "/path/to/file.txt"; // File | File to upload.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.uploadFile(name, parentFolder, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **parentFolder** | **String**|  | 
 **file** | **File**| File to upload. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="versions"></a>
# **versions**
> versions(hash)

Versions of file

Get all existing versions of file

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.FileSystemApi();

var hash = "hash_example"; // String | The folder or file name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.versions(hash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The folder or file name | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

