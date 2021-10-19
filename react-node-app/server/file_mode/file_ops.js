const http = require('http');
const express =require('express');
var msg = require("../../data/Message.js");
var prt = require("../../Print.js"); 
const fs = require('fs');
const cors = require('cors');


const app=express();
const port = 8080 || process.env.PORT;
const server = http.createServer(app);

app.use(cors());

app.get("/",function(req,res){
    prt.log(msg.startmsg);
    const data = fs.readFileSync("../data/demo1.txt", "utf8");
    res.end(data);
})

server.listen(port,()=>{
    console.log(`Working ` + port);
})