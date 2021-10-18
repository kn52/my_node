var dbops = require('./db_ops.js');
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
app.use(express.json());

app.get("/", (req,res) => {
    res.end("Welcome")
});

app.post("/fetch", (req,res) => {
    var sql = req.body.sql;
    dbops(sql,(result)=>{
        res.status(result.code).send(result);
    });
});

app.post("/add", (req,res) => {
    var sql = req.body.sql;
    dbops(sql,(result)=>{
        res.status(result.code).send(result);
    });
});

app.post("/update", (req,res) => {
    var sql = req.body.sql;
    dbops(sql,(result)=>{
        res.status(result.code).send(result);
    });
});

app.post("/delete", (req,res) => {
    var sql = req.body.sql;
    dbops(sql,(result)=>{
        res.status(result.code).send(result);
    });
});

server.listen(port,()=>{
    console.log(`Working ` + port);
})