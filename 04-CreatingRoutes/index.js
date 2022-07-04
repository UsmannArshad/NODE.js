const HTTP=require('http')
const cars=[{name:'vigo',model:'2022'},{name:'mehran',model:'2022'}]
HTTP .createServer((req,res)=>{
    if(req.url==="/")
    {
        res.writeHead(200,{'Content-type':'text'})
        res.end("Home")
    }
    else if(req.url==="/json")
    {
        res.writeHead(200,{'Content-type':'application/json'})
        const json=JSON.stringify(cars)
        res.end(json)
    }
    else{
        res.writeHead(404)
    }
}).listen(3000)