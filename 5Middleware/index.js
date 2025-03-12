const express=require('express');
const app=express();

//We can do work without middlewares but middlewares make our work easy, so we use middlewares.It is more cleaner way to do work.
//1.Basic Example of middleware
// let reqCount=0;

// function requestIncreaser(req,res,next){
//     reqCount++;
//     console.log("Request Count: ",reqCount);
//     next();//it means that we have done our work and now we want to move to next middleware.
// }

// //In this middleware we don't have next() because we don't want to move to next middleware.
// function realSum(req,res){
//     const a=parseInt(req.query.a);
//     const b=parseInt(req.query.b);

//     res.json({
//         ans:a+b
//     })

// }

// app.get('/', requestIncreaser,realSum);//middleware is used here.



//2.Modify request and response objects.
//Example

// let reqCount=0;

// function requestIncreaser(req,res,next){
//     reqCount++;
//     req.name="Banta Singh";//We are modifying request object here.
//     console.log("Request Count: ",reqCount);
//     next();//it means that we have done our work and now we want to move to next middleware.
// }

// //In this middleware we don't have next() because we don't want to move to next middleware.
// function realSum(req,res){
//     const a=parseInt(req.query.a);
//     const b=parseInt(req.query.b);
//     console.log(req.name);//We are using modified request object here.

//     res.json({
//         ans:a+b
//     })

// }

// app.get('/', requestIncreaser,realSum);//middleware is used here.


//3.Ending the request response cycle.It can do that by adding some check in middleware.This is main use of middleware or not to move to next middleware.For example if we have some authentication middleware and if user is not authenticated then we don't want to move to next middleware.

// let reqCount=0;

// function requestIncreaser(req,res,next){
//     reqCount++;
//     req.name="Banta Singh";//We are modifying request object here.
//     console.log("Request Count: ",reqCount);
    
// }

// //In this middleware we don't have next() because we don't want to move to next middleware.
// function realSum(req,res){
//     const a=parseInt(req.query.a);
//     const b=parseInt(req.query.b);
//     console.log(req.name);//We are using modified request object here.

//     res.json({
//         ans:a+b
//     })

// }

// app.get('/', requestIncreaser,realSum);//middleware is used here.

app.listen(3000);
console.log("Server is running on port 3000");