const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require('jsonwebtoken');
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

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
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
    else{
        const newToken = jwt.sign({passedUsername}, "secret")
        console.log(newToken);
        res.json({Authorization: newToken})
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