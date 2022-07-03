const http=require('http')
http.createServer((req,res)=>{
    if(req.url==='/')
    {
    res.write('Hello World ')
    res.end('Home')
    }
    if(req.url==='/about')
    {
        res.write('Hello World ')
        res.end('About')
    }
}).listen(3000)