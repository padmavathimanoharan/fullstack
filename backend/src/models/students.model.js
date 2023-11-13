import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema ({
    studentNumber: Number,
    name: String,
    age: Number,
    course: String,
    semester: Number,
})

const Student = mongoose.model('Student', StudentSchema)

export default Student