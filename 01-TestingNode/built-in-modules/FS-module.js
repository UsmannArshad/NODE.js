const { Console } = require('console')
const fs=require('fs')
fs.readdir('./',function(error,result){
    if(error) console.log("Error",error)
    else console.log("Result",result)
});