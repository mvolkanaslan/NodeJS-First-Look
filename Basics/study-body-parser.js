import express from 'express';
import bodyParser from 'body-parser'
const app = express();

//burada bir npm modulunu express e bir middleware olarak tanitiyoruz
app.use(bodyParser.urlencoded({extended:false}))


// Routing islemlerinde bir hiyerarsi sozonusudur. Bu yuzden route istekleri ozelden genele dogru olmalidir.

app.get('/add-product',(req,res,next)=>{
    res.send(`
        <html>
            <head>
                <title>Add a new product</title>
            </head>
            <body>
                <form action="/product" method="POST">
                    <input type="text" name="productName">
                    <input type="submit" value="Save Product">
                </form>
            </body>
        </html>
    `);
})

app.post('/product',(req,res,next)=>{
    console.log(req.body.productName);
})

app.use('/',(req,res,next)=>{
    res.send("Home page");
})


app.listen(3000,()=>{
    console.log("Listening from 3000")
});