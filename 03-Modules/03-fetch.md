# Fetch

## Overview
- This Api allows to perform declarative HTTP requests to a server.
- For each request, it creates a Promise which must be resolved in order to define the content type and access the data.

## HTTP Examples
- Post
  ```javascript
  fetch('https://jsonplaceholder.typicode.com/users', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      username: 'Elon Musk',
      email: 'elonmusk@gmail.com',
    })
  })
  ```
- Get
  ```javascript
  fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data)))
  ```
- Put
  ```javascript
  fetch('https://jsonplaceholder.typicode.com/users/3', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'PUT',
    body: JSON.stringify({
      username: 'Elon Musk',
      email: 'elonmusk@gmail.com',
    })
  })
  ```
- Delete
  ```javascript
  fetch('https://jsonplaceholder.typicode.com/users/1', { 
    method: 'DELETE' 
  }); 
  ```