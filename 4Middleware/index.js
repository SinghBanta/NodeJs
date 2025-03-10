const express = require("express");
const app = express();

//simple check using function not middleware.
// function isOldEnough(age){
//     if(age>=14){
//         return true;
//     }else{
//         return false;
//     }
// }

//or

//using middleware
//middleware is a function that has access to the request object(req), the response object(res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
// function isOldEnoughMiddleware(req,res,next){
//     const age=req.query.age;
//     if(age>=14){
//         next();
//     }else{
//         res.status(411).json({
//             message:"You are not old enough to ride the ride 1"
//         })
//     }
// }

//app.use(isOldEnoughMiddleware);//this will be applied to all the routes and always applied to it's below defined routes not above defined routes.Instead of using it here we can use it in the route itself.

//Example Below route use isOldEnoughMiddleware in the route itself
// app.get('/', isOldEnoughMiddleware,function(req,res){
//         res.json({
//             message:"You have successfully riden the ride 1"
//         })
//     }

// );

//Example Below route use isOldEnoughMiddleware which we define for all the routes i.e. app.use(isOldEnoughMiddleware).
// app.get('/ride',function(req,res){
//     res.json({
//         message:"You have successfully riden the ride 1"
//     })
// }

// );

//1.Assignment Question

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

//Solution
// let requestCount = 0;

// app.use(function(req, res, next) {
//   requestCount++;
//   next();
// });

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

// app.get('/requestCount', function(req, res) {
//   res.status(200).json({ requestCount });
// });

//2.Assignment Question

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

// let numberOfRequestsForUser = {};
// setInterval(() => {
//     numberOfRequestsForUser = {};
// }, 1000)

// app.use(function(req, res, next) {
//     const userId = req.headers['user-id'];
//     if (numberOfRequestsForUser[userId]) {

//         numberOfRequestsForUser[userId]++;
//         if (numberOfRequestsForUser[userId] > 5) {
//             res.status(404).json({ message: 'Too many requests' });
//         } else {
//             next();
//         }
//     } else {
//         numberOfRequestsForUser[userId] = 1;
//         next();
//     }
// });

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

//3.Assignment Question

// let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

// app.use(function(err, req, res, next) {

//   res.status(404).send({});
//   errorCount=errorCount+1;

// });

// app.get('/user', function(req, res) {
//   throw new Error("User not found");
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

// app.get('/errorCount', function(req, res) {
//   res.status(200).json({ errorCount });
// });

// app.listen(3003);
