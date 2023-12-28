const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const admin = new Admin(req.body)
    try{
        console.log(admin)
        admin.save()
        res.json({message:"Admin created successfully"})
    }
    catch(e){
        console.log(e.message)
        res.status(500).send("internal error")
    }

});

router.post('/courses', adminMiddleware, async function(req, res) {
    // Implement course creation logic
    const course = new Course(req.body)
    try{
        console.log(course);
        await course.save();
        res.json({
            message:"Course created successfully",
            courseId:course._id,
        })
    }
    catch(e){
        console.log(e.message)
        res.status(500).send("Internal error")
    }


});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try{
        const data = await Course.find()
        res.send(data)
    }
    catch(e){
        console.log(e.message);
        res.status(500).send("Internal Error")
    }
});

module.exports = router;