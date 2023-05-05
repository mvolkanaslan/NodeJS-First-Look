import express from 'express';
const app = express();

// Routing islemlerinde bir hiyerarsi sozkonusudur. Bu yuzden route istekleri ozelden genele dogru olmalidir.

app.use('/products/:id',(req,res,next)=>{
    res.send("Product "+req.params.id);
})
app.use('/products',(req,res,next)=>{
    res.send("All products");
})
app.use('/about',(req,res,next)=>{
    res.send("About page");
})
app.use('/',(req,res,next)=>{
    res.send("Home page");
})


app.listen(3000,()=>{
    console.log("Listening from 3000")
});