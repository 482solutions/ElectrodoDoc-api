# Woden.PermissionsApi

All URIs are relative to *http://localhost:1823/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePermissions**](PermissionsApi.md#changePermissions) | **PUT** /permissions | Change permissions


<a name="changePermissions"></a>
# **changePermissions**
> changePermissions(body)

Change permissions

After change permissions target user get selected permittions for file or folder

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.PermissionsApi();

var body = new Woden.ChangePermissions(); // ChangePermissions | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changePermissions(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ChangePermissions**](ChangePermissions.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

