const { error } = require('console')
const fs = require('fs')

data = "this has been written"

fs.writeFile('./text.txt', data, (err)=>{
    if(err){
        throw err
    }
    console.log("file written")
})