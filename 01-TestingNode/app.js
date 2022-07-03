console.log("gg")
var a=require('./module1')
a.Print()
//now we want to run outside browser i.e in our terminal maybe
//open terminal run command node app.js it will show gg
//console.log(window)
//window object is used if we running our code on browser like window.console.log
//console.log(global)
//in case of other than browser we use global keyword as it contains different properties than window