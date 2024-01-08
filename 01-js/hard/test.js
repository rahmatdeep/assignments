let str = "10 +   (2 *    (   6 - (4 + 1) / 2) + 7)+9"
let cleanStr = str.replaceAll(" ","")
function completeResult(experession){
    try{
        const dynamicFunction = new Function(`"use strict"; return (${experession})`)
        return dynamicFunction()
    }catch(error){
        console.log(`Error during function execution`, error.message);
        return null
    }
}

let output = completeResult(cleanStr)

console.log(output)