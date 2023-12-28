const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken")
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    let user = new User(req.body);
    try{
        console.log(user);
        await user.save();
        res.json({
            message:"User created successfully",
        })
    }
    catch(e){
        console.log(e.message);
        res.status.send("Internal Servor Error")
    }
});

router.post('/signin', async function (req, res) {
        // Implement admin signup logic
        let passedUsername = req.headers.username;
        let passedPassword = req.headers.password;
        if (!passedUsername || !passedPassword) {
            console.log("insuffecient headers");
        }
        const exsistingUsername = await User.findOne({ username: passedUsername });
        console.log(passedUsername);
        console.log(exsistingUsername);
        if (!exsistingUsername) {
            return res.status(401).send("Username invalid");
        }
        else if (exsistingUsername.password !== passedPassword) {
            return res.status(401).send("Password invalid");
        }
        else {
            const newToken = jwt.sign({ passedUsername }, "secret");
            console.log(newToken);
            res.json({ Authorization: newToken });
        }
    });

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try{
        const data = await Course.find()
        res.send(data)
    }
    catch(e){
        console.log(e.message);
        res.status(500).send("Internal Error")
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    try{
        const dbuser = await User.findOne({username:req.headers.username})
        console.log(dbuser.purchasedCourses)
        dbuser.purchasedCourses.push(req.params.courseId)
        await dbuser.save()
        res.json({
            message:"Course purchased successfully"
        })}
        catch(e){
            console.log(e.message);
            res.status(500).send("Internal Servor Error")
        }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try{
        const decodedJwt = await jwt.decode(req.headers.authorization)
        const dbuser = await User.findOne({username: decodedJwt.passedUsername})
        let courses = await Course.find({_id:{$in: dbuser.purchasedCourses}})
        
        
        res.send(courses)
    }
    catch(e){
        console.log(e.message);
        res.status(500).send("Internal Servor Error")
    }
});

module.exports = router