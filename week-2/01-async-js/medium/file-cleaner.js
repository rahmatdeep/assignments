const fs = require('fs');

let string = ""

fs.readFile("./text.txt", "utf-8", (err, data)=>{
    if(err){
        throw err
    }
    console.log("file Read")
    string = data
    let newString = string.replace(/\s+/g, ' ');
    fs.writeFile("./text.txt", newString, (err)=>{
        if(err){
            throw err
        }
        console.log("file written")
    })

})