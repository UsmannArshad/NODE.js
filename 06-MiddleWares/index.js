const express=require('express')
const FS=require('fs')
const HTML= FS.readFileSync(`${__dirname}/public/index.html`)
const App=express()
App.use(express.static(__dirname+'/public/style.css'))
App.use((req,res,next)=>{
    console.log("ff");
    next();
});
App.get('/',(req,res)=>{
    res.send('gg')
})
App.listen(3000)