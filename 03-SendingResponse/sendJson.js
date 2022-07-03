const http=require('http')
const cars=[{name:'vigo',model:'2022'},{name:'mehran',model:'2022'}]
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application/json'})
    const json=JSON.stringify(cars)
    res.end(json)
}).listen(3000)