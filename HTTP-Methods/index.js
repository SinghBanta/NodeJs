// import express from "express";
// const app = express();


//Basic example of get request using express.
// function calculateSum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans+=i;
//     }
//     return ans;
// }

// app.get('/', function(req,res){
//     const n=parseInt(req.query.n);
//     const ans=calculateSum(n);
//     res.send("Hi sum of n number is: "+ans.toString());
// })



//Now Make hospital game using express where you can add new kidney, update all kidneys to healthy, remove unhealthy kidneys, get all kidneys.

//In memory database
// const users = [
//   {
//     name: "John",
//     kidneys: [
//       {
//         healthy: false,
//       },
//     ],
//   },
// ];

// app.use(express.json()); //middleware why we use here because we want to use json data in our post request.



//get all kidneys
// app.get("/", function (req, res) {
//   const johnKidneys = users[0].kidneys;
//   const numberOfKidneys = johnKidneys.length;
//   let numberOfHealthyKidneys = 0;
//   for (let i = 0; i < johnKidneys.length; i++) {
//     if (johnKidneys[i].healthy) {
//       numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
//     }
//   }
//   const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
//   res.json({
//     numberOfKidneys,
//     numberOfHealthyKidneys,
//     numberOfUnhealthyKidneys,
//   });
// });



//add new kidney
// app.post("/", function (req, res) {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy,
//   });
//   res.json({
//     msg: "Done!",
//   });
// });



//update all kidneys to healthy
// app.put("/", function (req, res) {
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     users[0].kidneys[i].healthy = true; //Basically we updated all unhealthy kidneys to healthy.
//   }
//   res.json({
//     msg: "Done!",
//   });
// });


//removing unhealthy kidneys
// app.delete("/", function (req, res) {
//   if (isThereAtleastOneUnhealthyKidney()) {
//     const newKidneys = [];
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//       if (users[0].kidneys[i].healthy) {
//         newKidneys.push({
//           healthy: true,
//         });
//       }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({
//       msg: "Done!",
//     });
//   } else {
//     res.status(411).json({
//       msg: "You have no bad Kidneys",
//     });
//   }
// });

// function isThereAtleastOneUnhealthyKidney() {
//   let atleastOneUnhealthyKidney = false; //or no need to write this line
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (!users[0].kidneys[i].healthy) {
//       return (atleastOneUnhealthyKidney = true); //or return true
//     }
//   }
//   return (atleastOneUnhealthyKidney = false); //or return false
// }
// app.listen(3002);
