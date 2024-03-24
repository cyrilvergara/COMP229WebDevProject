# User Authentication API

## Prerequisites
Before you start testing, ensure you follow these steps:

1. Checkout the 'buildAPI_V1' branch.
2. Create a `.env` file and include the following line:
   ```
   JWT_SECRET_KEY = generateSecret()
   GMAIL_USER=your_gmail_email_address
   GMAIL_PASS=your_gmail_password_or_app_specific_password
   ```
3. Run `npm install`.
4. Spin up the server with `npm run dev`.
5. Start testing the endpoints.

## User Endpoint


### 1 Get All Users

- **Description**: Endpoint to retrieve all users.
- **HTTP Method**: GET
- **URL**: `/api/users`
- **Response**:
  - `200 OK`: Successfully retrieved all users. Returns an array of user objects.
  - `500 Internal Server Error`: An error occurred while processing the request.

### 2 Update User

- **Description**: Endpoint to update a user.
- **HTTP Method**: PUT
- **URL**: `/api/users/:userId`
- **Request Parameters**:
  - `userId` (string): ID of the user to be updated.
- **Request Body**:
  ```json
  {
    "name": "Updated Name",
    "email": "updatedemail@example.com"
  }
  ```
- **Response**:
  - `200 OK`: Successfully updated the user. Returns the updated user object.
  - `404 Not Found`: User with the specified ID not found.
  - `500 Internal Server Error`: An error occurred while processing the request.

### 3 Delete User

- **Description**: Endpoint to delete a user.
- **HTTP Method**: DELETE
- **URL**: `/api/users/:userId`
- **Request Parameters**:
  - `userId` (string): ID of the user to be deleted.
- **Response**:
  - `200 OK`: Successfully deleted the user.
  - `404 Not Found`: User with the specified ID not found.
  - `500 Internal Server Error`: An error occurred while processing the request.


## Auth Endpoint

### 4 Login User

- **Description**: Endpoint to login a user.
- **HTTP Method**: POST
- **URL**: `/api/auth/login`
- **Request Body**:
  ```json
 {
  "email": "lucas1@gmail.com",
  "password":"luckiday"
}
  ```
- **Response**:
  - `200 OK`: Successfully logged in. Returns a JWT token for authentication.
  - `401 Unauthorized`: Invalid credentials provided.
  - `500 Internal Server Error`: An error occurred while processing the request.
```
### 5 Signup New User
```
- **Description**: Endpoint to signup a new user.
- **HTTP Method**: POST
- **URL**: `/api/auth/signup`
- **Request Body**:
  ```json
  {
    "name": "James doh",
    "email": "james@gmail.com",
    "password": "domeidoyou",
    "role":"user"
  }
  ```
- **Response**:
  - `201 Created`: Successfully created a new user. Returns the newly created user object.
  - `500 Internal Server Error`: An error occurred while processing the request.

## Password Reset Endpoints

###  6 Request Password Reset

Endpoint: `POST /api/auth/password/reset/request`

This endpoint is used to request a password reset for a user.

#### Request Body

{
   "email": "lucas1@gmail.com"
}

#### Response

- Status Code: `200 OK`
  - Description: Password reset email sent successfully.
- Status Code: `400 Bad Request`
  - Description: Invalid request body.
- Status Code: `404 Not Found`
  - Description: User not found with the provided email.
- Status Code: `500 Internal Server Error`
  - Description: Failed to send password reset email.

### 7 Reset Password

Endpoint: `POST /api/auth/password/reset/:token`

This endpoint is used to reset the password for a user.

#### URL Parameters

| Parameter | Type   | Description                   |
|-----------|--------|-------------------------------|
| token     | String | The password reset token     |

#### Request Body

| Field    | Type   | Description                  |
|----------|--------|------------------------------|
| password | String | The new password for the user |

#### Response

- Status Code: `200 OK`
  - Description: Password updated successfully.
- Status Code: `400 Bad Request`
  - Description: Invalid or expired token.
- Status Code: `404 Not Found`
  - Description: User not found.
- Status Code: `500 Internal Server Error`
  - Description: Internal server error.




---

## Inventory Management API

This API allows you to manage inventory items.

### Endpoints

#### 8. Create a new inventory item

- **URL:** `/api/inventory/create`
- **Method:** `POST`
-**Authorization:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZhZWNhY2IyMTUwYjMwMWMwZjA2N2EiLCJpYXQiOjE3MTA5NTc3NTQsImV4cCI6MTcxMDk2MTM1NH0.sMFJgYbKLi4oSfVyuyjfYes2mqYsbmP_6GjkkRRg2xo`
- **Request Body:**
  - `desc` (String, required): Description of the inventory item.
  - Other fields: Refer to the Inventory Model for additional fields.

##### Example Request:

```json
{
    "rank" : 908
    "desc": "Product description example",
    "qtysold": 100,
    "exchqty": 50,
    "refqty": 20,
    "qty": 200,
    "caseqty": 10,
    "discount": 5,
    "discper": 0.1,
    "refund": 30,
    "return": 15,
    "amount": 1000,
    "grossamt": 1200,
    "price": 25,
    "barcode": "1234567890123",
    "itemcode": "ITEM123",
    "otherbc": "9876543210987",
    "lastsold": "2024-03-19T12:00:00Z",
    "dept": "Electronics"
}

```

##### Example Response:

```json
{
    "_id": "60ad642112fb7c001e7e7ae0",
    "desc": "New Item",
    // Other fields...
}
```

#### 9. Get all inventory items

- **URL:** `/api/inventory`
- **Method:** `GET`
-**Authorization:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZhZWNhY2IyMTUwYjMwMWMwZjA2N2EiLCJpYXQiOjE3MTA5NTc3NTQsImV4cCI6MTcxMDk2MTM1NH0.sMFJgYbKLi4oSfVyuyjfYes2mqYsbmP_6GjkkRRg2xo`
##### Example Response:

```json
[
    {
        "_id": "60ad642112fb7c001e7e7ae0",
        "desc": "New Item 1",
        // Other fields...
    },
    {
        "_id": "60ad642112fb7c001e7e7ae1",
        "desc": "New Item 2",
        // Other fields...
    },
    // Additional items...
]
```

#### 10. Get a single inventory item by ID

- **URL:** `/api/inventory/:itemId`
- **Method:** `GET`
-**Authorization:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZhZWNhY2IyMTUwYjMwMWMwZjA2N2EiLCJpYXQiOjE3MTA5NTc3NTQsImV4cCI6MTcxMDk2MTM1NH0.sMFJgYbKLi4oSfVyuyjfYes2mqYsbmP_6GjkkRRg2xo`
- **URL Params:**
  - `itemId`: `65fb2742eebc1b5834807a5b`

##### Example Response:

```json
{
    "_id": "60ad642112fb7c001e7e7ae0",
    "desc": "New Item",
    // Other fields...
}
```

#### 11. Update an existing inventory item

- **URL:** `/api/inventory/:itemId`
- **Method:** `PUT`
-**Authorization:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZhZWNhY2IyMTUwYjMwMWMwZjA2N2EiLCJpYXQiOjE3MTA5NTc3NTQsImV4cCI6MTcxMDk2MTM1NH0.sMFJgYbKLi4oSfVyuyjfYes2mqYsbmP_6GjkkRRg2xo`
- **URL Params:**
  - `itemId`: `65fb2742eebc1b5834807a5b`
- **Request Body:** Fields to update.

##### Example Request:

```json
{
    "desc": "Updated Item",
    // Other fields to update...
}
```

##### Example Response:

```json
{
    "_id": "60ad642112fb7c001e7e7ae0",
    "desc": "Updated Item",
    // Other updated fields...
}
```

#### 12. Delete an existing inventory item
```
- **URL:** `/api/inventory/:itemId`
- **Method:** `DELETE`
-**Authorization:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZhZWNhY2IyMTUwYjMwMWMwZjA2N2EiLCJpYXQiOjE3MTA5NTc3NTQsImV4cCI6MTcxMDk2MTM1NH0.sMFJgYbKLi4oSfVyuyjfYes2mqYsbmP_6GjkkRRg2xo`
- **URL Params:**
  - `itemId`: ID of the inventory item to delete.

##### Example Response:

```json
{
    "message": "Inventory item deleted successfully"
}
```


Given your specifics for the CSV file upload endpoint, here's the updated documentation section for the Bulk Upload via CSV File Endpoint, tailored to your application's requirements:


## Bulk Upload via CSV File Endpoint

### 13 Upload CSV File for Inventory Data Import

- **Description**: This endpoint facilitates the bulk uploading of inventory data through a CSV file. It's designed to parse the uploaded CSV file on the server and insert each row as a separate record in the database, enabling efficient mass data import.

- **HTTP Method**: POST

- **URL**: `/api/inventory/upload`

- **Authorization**: Required. A valid JWT token must be included in the request headers to authenticate the request.
```
- **Request Headers**:  
  - `Content-Type`: `multipart/form-data`  
  - `Authorization`: `Bearer [Your_JWT_Token_Here]`  
    Replace `[Your_JWT_Token_Here]` with the actual JWT token provided after authentication.
```
- **Form Data**:  
  - `csvFile`: The CSV file containing inventory data to be uploaded. This file should adhere to the expected format, with the first row containing column headers that match the inventory entity's attributes, followed by rows representing individual inventory records.

- **CSV Format Example**:  
  The CSV file must include column headers corresponding to the inventory item attributes. Each subsequent row represents a single inventory item. For instance:
  
 Upload the file with a key: `csvFile`
  
  Ensure the CSV file adheres to this structure for successful parsing and import.
```
- **Response**:
  - `200 OK`: The upload and data import were successful. The response body may include a summary of the import process, such as the count of records imported.
  - `400 Bad Request`: The request was malformed. Possible reasons include an improperly formatted CSV file, absence of the `csvFile` in the form data, or data type mismatches.
  - `401 Unauthorized`: The request lacked a valid JWT token or the token was invalid, indicating the user is not authenticated or lacks the permissions for the operation.
  - `500 Internal Server Error`: An unexpected error occurred on the server during the file processing or data insertion phase
---
