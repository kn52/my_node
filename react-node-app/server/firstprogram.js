const http = require('http');
const express =require('express');
var msg = require("./Message.js");
var prt = require("./Print.js"); 
const fs = require('fs');
const cors = require('cors');


const app=express();
const port = 8080 || process.env.PORT;
const server = http.createServer(app);

app.use(cors());

// app.get("/", (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     const m = msg.startmsg;
//     prt.log(m)
//     res.end(m);
// })

app.get("/",function(req,res){
    fs.readFileSync('./demo1.txt', (err,data) => {
        if(err){
            return res.end(err);
            console.log(err);
        }else{
            console.log(data);
            // return res.end(data);
        }
    })
})

server.listen(port,()=>{
    console.log(`Working ` + port);
})