import express from 'express'
import { products } from './admin.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{
            title:"Homepage",
            products:products,
            path:"/"
        })
})

export default router;