import http from 'http';

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello World");
        res.end()
    } 
    if(req.url==='/api/products'){
        res.write("Product list");
        res.end();
    }

});

server.on('connection',()=>{
    console.log("new connection")
})



server.listen(3005);
console.log("Listening port on 3005")
