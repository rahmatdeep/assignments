const fs = require('fs');

console.log("start")
fs.readFile('./text.txt','utf-8', (err, data)=>{
    if(err){
        throw err
    }
    logger(data)
})

console.log("end")
for(let i=0; i<10000000000; i++){
    let a=0
    a++
}
function logger(data){
    console.log(data)
}