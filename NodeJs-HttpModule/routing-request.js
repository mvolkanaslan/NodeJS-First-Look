import http from 'http'
import fs from 'fs'
import qs from 'querystring'



const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader("Content-Type", 'text/html')
    if (url === '/') {
        res.write(`
        <html>
            <head>
                <title>Enter Message</title>
            </head>
            <body>
                <form method="POST" action="/log">
                    <input type="text" name="message">
                    <button type="submit">Save</button>
                </form>
            </body>
        </html>
    `);
    return res.end();
    }

    if (url === '/log' && method === 'POST') {

        //request te bir data eventi olustugunda yani data geldiginde bir buffer dizisi olusur
        const body = [];

        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk)// bu bize bir bu - <Buffer 6d 65 73 73 61 67 65 3d 76 6f 6c 6b 61 6e>
        })
        req.on("end",()=>{
            const bodyPersed = Buffer.concat(body).toString();
            console.log("Text Data",bodyPersed);
            // burada data bize bu sekilde ulasir message=volkan
            // form uzerinde name degeri massege olan input uzerinden geldigini gosterir

            //datayi split edere dosyaya yazdiralim
            // const message = bodyPersed.split('=')[1]

            // query string bize gelen datayi objeye cevirir
            const data = qs.parse(bodyPersed)
            fs.appendFileSync('message.txt', `${data.message}\n`);
            console.log("Parsed Data",data)

        })
        
        res.statusCode = 302; //yonlendirme bilgisi
        res.setHeader('Location', '/'); // "/" dizinine yonlendir
        return res.end();
    }






});


server.listen(3000);
console.log('Listening port on 3000')