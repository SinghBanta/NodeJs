# Auth workflow

The workflow for authentication usually looks as follows -
![image](https://github.com/user-attachments/assets/e4c064d5-aa00-42a6-9ec6-d0c20a378a85)


1. The user comes to your website (courses.com)
2. The user sends a request to `/signin` with their `username` and `password`
3. The user gets back a `token`
4. In every subsequent request, the user sends the token to identify it self to the backend.
   
 - Think of the token like a secret that the server has given you. You send that secret back to the server in every
   request so that the server knows who you are.

   

# Tokens vs JWTs

There is a problem with using `stateful` tokens.

## Stateful

By stateful here, we mean that we need to store these tokens in a variable right now (and eventually in a database). 

## Problem

The problem is that we need to `send a request to the database` every time the user wants to hit an `authenticated endpoint`


# JWTs

JWTs, or JSON Web Tokens, are a compact and self-contained way to represent information between two parties. They are commonly used for authentication and information exchange in web applications.

**JWTs are Stateless**: JWTs contain all the information needed to authenticate a request, so the server doesn’t need to store session data. All the `data` is stored in the token itself.

![image](https://github.com/user-attachments/assets/7520032a-c80f-4344-8e5a-11e57dd22c0f)
