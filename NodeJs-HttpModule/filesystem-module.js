import  fs from "fs";



// const files = fs.readdir('./',(err,data)=>{
//     err ?  console.log(err):console.log(data);
// })

// const data = fs.readFile('index.html','utf8',(err,data)=>{
//     err ? console.log(err):console.log(data)
// })

// fs.writeFile('test.txt',"Hello World !",(err,data)=>{
//     err?console.log(err):console.log("Dosya olusturuldu !")
// })

// fs.appendFile('test1.txt',"Merhaba Dunya",(err,data)=>{
//     err?console.log(err):console.log("Dosya olusturuldu !")
// })

// fs.unlink('test1.txt',(err,data)=>{
//     err?console.log(err):console.log("Dosya silindi !")
// })

fs.rename('test.txt',"deneme.txt",(err)=>{
    err ? console.log(err):console.log("Dosya Yeniden Isimlendirild....")
})