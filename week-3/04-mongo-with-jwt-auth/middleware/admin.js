const jwt = require('jsonwebtoken');
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const token = jwt.verify(req.headers.authorization, "secret");
        next()
    }
    catch(e){
        console.log(e.message);
        res.status(400).send("Not Allowed")
    }
}

module.exports = adminMiddleware;