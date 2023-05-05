var http = require('http');

http.createServer((req,res)=>{
    req.url == "/" && res.write('Home Page');
    req.url == "/login" && res.write('Login Page');
    res.end();
}).listen(8000,()=>console.log("Server is Running..."))