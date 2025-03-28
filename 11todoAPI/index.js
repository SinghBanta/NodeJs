const express=require('express');
const app=express();
const cors=require('cors');
const routes=require('./routes/index')
const PORT=3000;

app.use(cors({
    origin:"*",
    method:"GET,POST,PUT,DELETE"
}))

app.use(express.json());

app.use(routes);


app.listen(PORT);
console.log(`Server is runnning on ${PORT}`);