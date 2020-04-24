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
import Woden from 'woden';
let defaultClient = Woden.ApiClient.instance;


let apiInstance = new Woden.UserApi();
let body = new Woden.Body(); // Body | 

apiInstance.changeUser(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: Not defined

<a name="createUser"></a>
# **createUser**
> createUser(loginemailpasswordCSR)

Create user

After registration user receive Certificate for Fabric CA

### Example
```javascript
import Woden from 'woden';

let apiInstance = new Woden.UserApi();
let login = "login_example"; // String | 
let email = "email_example"; // String | 
let password = "password_example"; // String | 
let CSR = CSR_example; // Blob | 

apiInstance.createUser(loginemailpasswordCSR, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | 
 **email** | **String**|  | 
 **password** | **String**|  | 
 **CSR** | **Blob**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="login"></a>
# **login**
> login(loginpasswordcertificateprivateKey)

Login user into the system

Authentication for users to get in to the system and receive JWT token

### Example
```javascript
import Woden from 'woden';

let apiInstance = new Woden.UserApi();
let login = "login_example"; // String | 
let password = "password_example"; // String | 
let certificate = certificate_example; // Blob | 
let privateKey = privateKey_example; // Blob | 

apiInstance.login(loginpasswordcertificateprivateKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | 
 **password** | **String**|  | 
 **certificate** | **Blob**|  | 
 **privateKey** | **Blob**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="logout"></a>
# **logout**
> logout()

Logout user from the system

Manualy exit from the system

### Example
```javascript
import Woden from 'woden';
let defaultClient = Woden.ApiClient.instance;


let apiInstance = new Woden.UserApi();
apiInstance.logout((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

