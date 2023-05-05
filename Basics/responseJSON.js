var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({name:"Volkan",lastName:"Aslan"}));
    res.end()
}).listen(8000,()=>console.log("Server is running"))