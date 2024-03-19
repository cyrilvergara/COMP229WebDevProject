Things to do before you start testing 
1. checkout 'buildAPI_1' branch
2. create .env file  and put "JWT_SECRETE_KEY = generateSecret()" inside the file
3. npm install
4. spin up the server  with "npm run dev"
5. start testing the endpoints


User Endpoint

Signup New User
Description: Endpoint to signup a new user.
HTTP Method: POST
URL: /api/users/signup
Request Body:
{
  "name": "James doh",
  "email": "james@gmail.com",
  "password":"domeidoyou"
}
Response:
201 Created: Successfully created a new user. Returns the newly created user object.
500 Internal Server Error: An error occurred while processing the request.

Login User
Description: Endpoint to login a user.
HTTP Method: POST
URL: /api/users/login
Request Body:
{
  "email": "lucas@gmail.com",
  "password":"domeidoyou"
}
Response:
200 OK: Successfully logged in. Returns a JWT token for authentication.
401 Unauthorized: Invalid credentials provided.
500 Internal Server Error: An error occurred while processing the request.


Get All Users
Description: Endpoint to retrieve all users.
HTTP Method: GET
URL: /api/users
Response:
200 OK: Successfully retrieved all users. Returns an array of user objects.
500 Internal Server Error: An error occurred while processing the request.

Update User
Description: Endpoint to update a user.
HTTP Method: PUT
URL: /api/users/:userId
Request Parameters:
userId (string): ID of the user to be updated.
Request Body:
name (string, optional): Updated user's name.
email (string, optional): Updated user's email address.
Response:
200 OK: Successfully updated the user. Returns the updated user object.
404 Not Found: User with the specified ID not found.
500 Internal Server Error: An error occurred while processing the request.


Delete User
Description: Endpoint to delete a user.
HTTP Method: DELETE
URL: /api/users/:userId
Request Parameters:
userId (string): ID of the user to be deleted.
Response:
200 OK: Successfully deleted the user.
404 Not Found: User with the specified ID not found.
500 Internal Server Error: An error occurred while processing the request.
