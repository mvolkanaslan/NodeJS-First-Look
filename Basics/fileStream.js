var http = require("http");
var fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    fs.readFile('./customers.json','utf-8',(err,data)=>{
        res.write(data);
        res.end();
    })


}).listen(8000,()=>console.log("Server is running..."))