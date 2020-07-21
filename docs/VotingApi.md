# Woden.VotingApi

All URIs are relative to *http://localhost:1823/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoting**](VotingApi.md#createVoting) | **POST** /voting | Create voting
[**getVoting**](VotingApi.md#getVoting) | **GET** /voting | Get voting list
[**updateVoting**](VotingApi.md#updateVoting) | **PUT** /voting | User vote


<a name="createVoting"></a>
# **createVoting**
> createVoting(body)

Create voting

Owner can create voting on file

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.VotingApi();

var body = new Woden.Voting(); // Voting | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createVoting(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Voting**](Voting.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVoting"></a>
# **getVoting**
> getVoting()

Get voting list

User can get voting list of owned files or shared files

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.VotingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getVoting(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVoting"></a>
# **updateVoting**
> updateVoting(body)

User vote

User can vote in file if have permissions

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.VotingApi();

var body = new Woden.Vote(); // Vote | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateVoting(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Vote**](Vote.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

