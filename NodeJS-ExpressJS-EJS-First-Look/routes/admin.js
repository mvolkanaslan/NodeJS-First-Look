import express from 'express'
import path from 'path'
const router = express.Router();
//ES6 da __dirname icin path resolve yaparak o an calisan
const __dirname = path.resolve();

let products = [ 
    { name: "IPhone 7S", price: 3000, image: '1.jpg', description: "iyi telefon" },
    { name: "IPhone 6", price: 2000, image: '2.jpg', description: 'idare eder' },
    { name: 'IPhone 10', price: 4000, image: '3.jpg', description: "çok iyi" },
    { name: "IPhone 11", price: 4500, image: '4.jpg', description: "güzel telefon" }
]

router.get('/add-product',(req,res,next)=>{
    //bir html dosyasini istenen adrese gonderme islemi de bu sekilde yapabiliriz.
    //dosya yolunu proje dizinine gore vermek icin path modulunden yararlaniriz
    //res.sendFile(path.join(__dirname,'views','add-product.ejs')); // view klasorunu EJS otomatik isledigi icin path islemlerine gerek yok
    res.render('add-product.ejs',{
        title:"Add Product",
        path:"/admin/add-product"
    });
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    products.push(req.body)
    res.redirect('/')
})

export  {router,products};
