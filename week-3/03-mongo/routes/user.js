const { Router } = require("express");
const router = Router();
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
        const dbuser = await User.findOne({username: req.headers.username})
        let courses = await Course.find({_id:{$in: dbuser.purchasedCourses}})
        
        
        res.send(courses)
    }
    catch(e){
        console.log(e.message);
        res.status(500).send("Internal Servor Error")
    }
});

module.exports = router;
