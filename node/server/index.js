const http=require("http");
const express =require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app=express();
const port= 4500 || process.env.PORT ;


const users=[{}];

app.use(cors());

app.get("/",(req,res)=>{
    res.send("HELL ITS WORKING");
})

const server=http.createServer(app);

server.listen(port,()=>{
    console.log(`Working ` + port);
})