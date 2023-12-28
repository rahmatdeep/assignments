const jwt = require("jsonwebtoken")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const token = jwt.verify(req.headers.authorization, "secret")
        next()
    }
    catch(e){
        console.log(e.message);
        res.status(400).send("Unauthorized Access")
    }
}

module.exports = userMiddleware;