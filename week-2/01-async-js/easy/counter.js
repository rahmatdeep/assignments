function logTime()    {
        
        let currentDate = new Date();
        console.log(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
        setTimeout(logTime, 1000)
    }
logTime()
