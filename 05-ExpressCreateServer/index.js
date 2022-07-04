const express=require('express')
const App=express()
App.listen(3000,()=>{console.log("Starting server at 3000")})
App.get('/',(req,res)=>{
    res.send('Hello')
})
App.get('/html',(req,res)=>{
    res.send('<h1>Hello World(HTML)<h1/>')
})
App.get('/json',(req,res)=>{
    res.send({name:'Usman',id:1})
})
//query string
App.get('/data/',(req,res)=>{
    let firstname=req.query.fname
    let lastname=req.query.lname
    res.send({Firstname:firstname,Lastname:lastname})
})
//params
App.get('/:id',(req,res)=>{
    let ID=req.params.id
    res.send(`Id is ${ID}`)
})
//query string
