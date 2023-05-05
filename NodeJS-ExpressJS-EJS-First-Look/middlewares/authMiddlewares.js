import express from 'express';
const app = express();

export const login = [

        app.use((req,res,next)=>{
            console.log("middleware 1 calisti")
            //burada middleware bir response donmeden diger middleware e gecmesi icin next() kullanmamiz gereiyor
            next()
        })
        ,
        app.use((req,res,next)=>{
            console.log("middleware 2 calisti")
            // res.send("<h1>Hello volkan</h1>")
            res.end()
        })
    
    ]
