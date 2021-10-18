var dbops = require('./db_ops.js');
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
app.use(express.json());

app.get("/", (req,res) => {
    res.end("Welcome")
});

app.post("/fetch", (req,res) => {
    // var sql = "select *  from customers";
    var sql = req.body.sql;
    dbops.fet(sql,(result)=>{
        res.status(200).send({res: result});
    });
});

app.post('/red', (req, res) => {
    res.send("POST Request Called")
});

server.listen(port,()=>{
    console.log(`Working ` + port);
})