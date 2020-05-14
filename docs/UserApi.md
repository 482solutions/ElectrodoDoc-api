# Woden.UserApi

All URIs are relative to *http://localhost:8080/api/v1*

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

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new Woden.UserApi();

var body = new Woden.ChangePassword(); // ChangePassword | 


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
 **body** | [**ChangePassword**](ChangePassword.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> createUser(body)

Create user

After registration user receive Certificate for Fabric CA

### Example
```javascript
var Woden = require('woden');

var apiInstance = new Woden.UserApi();

var body = new Woden.CreateUser(); // CreateUser | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateUser**](CreateUser.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="login"></a>
# **login**
> login(body)

Login user into the system

Authentication for users to get in to the system and receive JWT token

### Example
```javascript
var Woden = require('woden');

var apiInstance = new Woden.UserApi();

var body = new Woden.Login(); // Login | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.login(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Login**](Login.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
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

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

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

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

