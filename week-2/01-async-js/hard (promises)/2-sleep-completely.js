/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve => {
        const startTime = Date.now()
        let currentTime = startTime
        while(currentTime - startTime<milliseconds){
            currentTime = new Date().getTime()
        }
        resolve()
        console.log(currentTime-startTime)
    })
    
}

module.exports = sleep;
sleep(10000)