Open command run console.log("anything").It will say console.log is not a command
It means it does not recognize js but if we run node command and then write console.log("Anything")
then it will work it means node is a transaltor that translates js code in machine language
Node.js:is an oen source and cross platform runtime enviroment for executing js code outside the browser'
It is used for backend services like creating API(Appication programming interface)=>Services that power out client Apps
It is recommended for highly scalable data intensive and real time apps.
JavaScript everywhere
There are many oen source libraries that can use so that u dont have to build from scratch.

=>Architecture:
Before node,we use JS only to build app that run on browser.So every browser mush have JS engine that take our Js code and convert it into machine language.
Microsoft edge=>Chakra
Firefox=>Spider Monkey
Chrome=>v8(Open console of chrome and write JS it will convert ur JS into machine language)
Ryan Dhal in 2009 comes up with the idea of running JS code outside browser by taking v8 engine and embed it into C++ program and called it Node.It has additional modules like
fs and http that are not possible in browser.

=>Non Blocking vs Blocking
Node is a non-blocking and asynchoronous.
Imagine u go to the resturant waiter will take ur order give it to chef and start serving other tables.When ur meal is ready waiter will serve u.He will not wait for
chef to make ur food then serve other tables after serving u.(It is non-blocking and asynchronous)

Key pt:Node is not multi-thread it is single thread
When we recieve a request on server a thread is allocated to it.It will run the query,sometime it takes time to do db tasks then we'll see how blocking vs non-blocking works:

1)Blocking and sychronous:(ASP.net)
We receive a request from the server a thread is allocated to it.It will take some time to fetch data from db meanwhile this thread will be blocked waiting 4 response
from db.If a new request is received then new thread will be allocated.Now u can imagine if more request came.We ll run out of threads at one time.So we have to 
increase the no of threads.Shortly,We r not using our threads effeciently.
2)Non-blocking and asynchronous:(Node)
We receive a request from the server a thread will handle this request.If it has to go to db.It willl not w8 for the db to get data.Rather it will handle some other request
and When DB will return some response.It will put the msg in event queue and then the thread will execute this event.Node is coontinously monitoring this event queue

=>Node is ideal for Data Intensive(I/O) apps
=>not ideal for CPU-intensive apps like games as there are lot of calcualtions have to be done by CPU and small operation for file system and networks.

=>As we know everything stores in global object.It has a drawback that we have multiples
files if we have same names of some functions than it will over-write it.
To tackle that we Use Modularity.

Modules:
Every js file will be a module.Every module have its own scope.So function with same name will not overwrite each other
Every module is private we cant access its data memebers or functions outside the file until we expliciitly export it.
export what u want to use in other files like:
module.exports.(name that will be used in other files)=print
In file where u want to use:
var a=require('./module.js')
a.name()

Module Wrapper Function:
Our code does not run directy rather it is wrapp

=>Built-in Modules:
1)Path:
The path module provides utilities for working with file and directory paths. It can be accessed using:
const path=require('path')
2)OS:
The os module provides operating system-related utility methods and properties. It can be accessed using:
const os=require('os')
3)FS:
The fs module enables interacting with the file system
const fs=require('fs')
There is a pair of functions synchronous and asynchoronous.U should prefer asynchronous.
4)Events:
const EventEmitter=require('events')=>EventEmitter is the class we ll make its object to use
const Emitter=new EventEmitter();

=>Creating Server:
use http module
const http=require('http')
http.createServer((req,res)=>{
    res.write("respose")
    res.end
}).listen(3000)
U can view this on local host 3000 on web browser

=>Routes:
if(req.url==="/")
{
    res.write("home")
}
else
{
    res.writeHead(404)
}