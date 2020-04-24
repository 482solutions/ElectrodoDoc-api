# Woden.UserApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeUser**](UserApi.md#changeUser) | **PUT** /user | Update user password
[**createUser**](UserApi.md#createUser) | **POST** /user | Create user
[**login**](UserApi.md#login) | **POST** /user/auth | Login user into the system
[**logout**](UserApi.md#logout) | **DELETE** /user/logout | Logout user from the system


<a name="changeUser"></a>
# **changeUser**
> changeUser(body)

Update user password

Changing user credentials

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new Woden.UserApi();

var body = new Woden.Body(); // Body | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changeUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> createUser(login, email, password, CSR)

Create user

After registration user receive Certificate for Fabric CA

### Example
```javascript
var Woden = require('woden');

var apiInstance = new Woden.UserApi();

var login = "login_example"; // String | 

var email = "email_example"; // String | 

var password = "password_example"; // String | 

var CSR = "/path/to/file.txt"; // File | The CSR to upload.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createUser(login, email, password, CSR, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | 
 **email** | **String**|  | 
 **password** | **String**|  | 
 **CSR** | **File**| The CSR to upload. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="login"></a>
# **login**
> login(login, password, certificate, privateKey)

Login user into the system

Authentification for users to get in to the system and receive JWT token

### Example
```javascript
var Woden = require('woden');

var apiInstance = new Woden.UserApi();

var login = "login_example"; // String | 

var password = "password_example"; // String | 

var certificate = "/path/to/file.txt"; // File | The certificate to upload.

var privateKey = "/path/to/file.txt"; // File | The private key to upload.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.login(login, password, certificate, privateKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | 
 **password** | **String**|  | 
 **certificate** | **File**| The certificate to upload. | 
 **privateKey** | **File**| The private key to upload. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> logout()

Logout user from the system

Manualy exit from the system

### Example
```javascript
var Woden = require('woden');
var defaultClient = Woden.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new Woden.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

