const OS=require('os')
var totalmemory=OS.totalmem()
var freememory=OS.freemem()
console.log(totalmemory)
console.log(freememory)