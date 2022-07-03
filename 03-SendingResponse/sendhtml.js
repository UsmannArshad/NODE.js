const http=require('http')
const fs=require('fs')
const HTML=fs.readFileSync(`${__dirname}/index.html`)
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(HTML)
}).listen(3000)