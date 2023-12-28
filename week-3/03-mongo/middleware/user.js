const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let passedUsername = req.headers.username;
    let passedPassword = req.headers.password;

    const exsistingUsername = await User.findOne({username:passedUsername});
    if(!exsistingUsername){
        return res.status(401).send("Username invalid")
    }
    else if(exsistingUsername.password!==passedPassword){
        return res.status(401).send("Password invalid")
    }
    next()
}

module.exports = userMiddleware;