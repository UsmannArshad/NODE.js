function print(){
    console.log("from module1")
    console.log(__filename)
    console.log(__dirname)
    console.log(module)
    console.log(exports)
}
module.exports.Print=print