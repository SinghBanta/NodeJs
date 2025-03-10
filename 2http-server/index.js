const express=require('express')
const app=express();



//# Create an HTTP Server

// It should have 4 routes
// 1. http://localhost:3000/multiply?a=1&b=2
// 2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)

// Inputs given at the end after `?` are known as query parameters (usually used in GET requests)

// The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)


//Example of static endpoints using query i.e like localhost:5001/multiply?a=5&b=3
//app.get('/multiply', function(req,res){
//     const a=parseInt(req.query.a)
//     const b=parseInt(req.query.b)

//     res.json({
//         result: a*b
//     })

// })


//OR 


//Example of methods using dynamic endpoints i.e like localhost:5001/multiply/5/3
app.get('/multiply/:argA/:argB', function(req,res){
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)

    res.json({
        result: a*b
    })

})

app.get('/add/:argA/:argB', function(req,res){
    const a=parseInt(req.params.argA)
    const b=parseInt(req.params.argB)

    res.json({
        result: a+b
    })

})


app.get('/divide/:argA/:argB', function(req,res){
    const a=parseInt(req.params.argA)
    const b=parseInt(req.params.argB)

    res.json({
        result: a/b
    })

})


app.get('/subtract/:argA/:argB', function(req,res){
    const a=parseInt(req.params.argA)
    const b=parseInt(req.params.argB)

    res.json({
        result: a-b
    })

})

app.listen(5001)
console.log("port 5000 is running")