const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:root@cluster0.m63nmlj.mongodb.net/week-3-assignment');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{type: String, required: true},
    password:{type: String, required: true},
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{type: String, required: true},
    password:{type: String, required: true},
    purchasedCourses:[mongoose.SchemaTypes.ObjectId]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:{type: String, required: true},
    description:{type: String, required: true},
    price:{type: Number},
    imageLink:{type:String},
    published:{type:Boolean, default:true},

});

const Admin = mongoose.model('admin', AdminSchema);
const User = mongoose.model('user', UserSchema);
const Course = mongoose.model('course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}