const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let passedUsername = req.headers.username;
    let passedPassword = req.headers.password;
    if(!passedUsername||!passedPassword){
        console.log("insuffecient headers")
    }

    const exsistingUsername = await Admin.findOne({username: passedUsername});
    console.log(passedUsername)
    console.log(exsistingUsername)
    if(!exsistingUsername){
        return res.status(401).send("Username invalid")
    }
    else if(exsistingUsername.password!==passedPassword){
        return res.status(401).send("Password invalid")
    }
    next()
}

module.exports = adminMiddleware