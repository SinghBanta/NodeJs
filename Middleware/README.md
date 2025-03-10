# Setup:
```
1.npm init -y
2.npm install
3.npm install express
4.node index.js
```

# Middleware

Middleware functions are the building blocks of any web server, especially in frameworks like ExpressJS. It plays a vital role in the request-response cycle. 
They are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

Middleware in Express refers to functions that process requests before reaching the route handlers. 
These functions can modify request and response objects, end the request-response cycle, or call the next middleware function.

- Middleware functions are executed in the order they are defined.

- They can perform tasks like authentication, logging, or error handling.

- Middleware helps separate concerns and manage complex routes efficiently.
