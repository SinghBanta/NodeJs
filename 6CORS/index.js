const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors()); //This code is used to make same domain request as backend and frontend are on same domain now.

//OR

// app.get('/', function(req,res){ 
//     res.sendFile(__dirname + '/public/index.html');
// })//This code is used to make same domain request as backend and frontend are on same domain now.We noot need to use this when we use cors.

app.post("/sum", function (req, res) {
  console.log(req.name);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000);
