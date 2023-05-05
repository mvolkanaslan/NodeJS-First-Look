import express from 'express';
import {router as adminRoutes} from './routes/admin.js'; // router i bir middleware olarak ekliyoruz
import userRoutes from './routes/user.js';
import bodyParser from 'body-parser';
import path from 'path'
import expressLayouts from 'express-ejs-layouts'

const app = express();
const __dirname = path.resolve()

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

//adminRoutes ve userRoutes u middleware olarak surec icerisine dahil ediyoruz
app.use(expressLayouts);
app.set('layout','./layouts/layout');

app.use('/admin', adminRoutes); //admin surgularini localhost:3000/admin seklinde yapabilmek icin bu sekilde ayarliyoruz
app.use(userRoutes);

//uygulamada kullanacagimiz template engine i belirliyoruz
app.set('view engine','ejs')
app.set('views','./views') // view engine varsayilan olarak view klasorune dosya atayacak basa klasor icin bu sekilde atama yapilabilir

//page not found kontrolunu en son kisma yazariz i yukarida eslesme olmadiginda calissin.
app.use((req,res)=>{
    res.render('404.ejs',{"layout":"./layouts/error-layout"});
})




//basit middleware olusumu
// app.use((req,res,next)=>{
//     console.log("middleware 1 calisti")
       //burada middleware bir response donmeden diger middleware e gecmesi icin next() kullanmamiz gereiyor
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("middleware 2 calisti")
//     res.send("Hello volkan")
// })



//temel client istekleri
// app.get('/',(req,res)=>{
//     res.send("Hello World !")
// })




app.listen(3000,()=>{
    console.log("Listening from 3000")
});