/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const start = Date.now()
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
            const end = Date.now()
            console.log(end-start)
        },n*1000)
    })
    
}

module.exports = wait;
wait(3).then(result=>{
    console.log(result)
})