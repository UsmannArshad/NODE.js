const express=require('express')
const FS=require('fs')
const path=require('path')
const HTML= FS.readFileSync(`${__dirname}/public/index.html`)
const App=express()
App.use(express.static(__dirname+'/public'))
App.get('/',(req,res)=>{
    res.end(HTML)
})
App.listen(3000)