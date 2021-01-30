# Mocking Rest Api

- During UI design mocking Rest API is a very important activity as actual development of service can happen in a later point in time. 
- The REST service mocking feature allows developers to simulate a REST service by creating a mock service and complete development of actual UI.
- This can be achived locally using a npm package or using external services.

## Local Mocking
- JSON Server is a simple project that helps you to setup a REST API with CRUD operations very fast. For more details click [here](https://github.com/typicode/json-server)
- Steps to create a mock CRUD API from file system
  - Install `json-server` globally
    `npm install -g json-server`
  - create a new JSON file with name `users.json` with below
    ```json
    {
      "users": [
        {
          "id": 1,
          "first_name": "Sebastian",
          "last_name": "Eschweiler",
          "email": "sebastian@codingthesmartway.com"
        },
        {
          "id": 2,
          "first_name": "Steve",
          "last_name": "Palmer",
          "email": "steve@codingthesmartway.com"
        },
        {
          "id": 3,
          "first_name": "Ann",
          "last_name": "Smith",
          "email": "ann@codingthesmartway.com"
        }
      ]
    }
    ```
  - To start JSON server execute following command
    `json-server --watch users.json --port 8080`
  - Navigate to below URL to acces api details. Setup details are available [here](../02-MyDev/02/mocking)  
    [Json Server](http://localhost:8080)   
    [Users Api](http://localhost:8080/users)

     ```text
     GET    /users:8080
     GET    /users:8080/{id}
     POST   /users:8080
     PUT    /users:8080/{id}
     PATCH  /users:8080/{id}
     DELETE /users:8080/{id}
     ```

## External Mocking
- There are different mechanism to expose github json file as Rest Api.
- This [site](http://my-json-server.typicode.com/) can be used to expose json file as Rest API.
- This site requires to create a `db.json` file on the root folder as given in the repository [here](../db.json)
- Naviaget to site `https://my-json-server.typicode.com/<your-username>/<your-repo>` to access data. For this repo data is availabel [here](https://my-json-server.typicode.com/rahgadda/React.js)
- This site supports http https request.  
- Api calls GET, POST, PUT, PATCH and DELETE are supported. 
- Changes aren't persisted between calls.