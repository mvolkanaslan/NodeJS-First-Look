import http from 'http';

const server = http.createServer();
server.listen(3000);


server.on("request", (req, res) => {
    //res.setHeader('Content-Type','application/json');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.write(`<html>
            <head>
            </head>
            <body>
            <h1 style="color:blue">Hello World !</h1>
            </body>
    </html>`)
    res.end();

})



console.log("Listening port on 3000")