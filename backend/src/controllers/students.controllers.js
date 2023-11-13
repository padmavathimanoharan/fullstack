import Student from "../models/students.model.js";

export const addStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body)
        await newStudent.save()
        res.status(201).send(newStudent)
    } catch(err) {
        res.status(400).send(err)
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.status(200).send(allStudents);
    } catch(err) {
        res.status(400).send(err);
    }
}

export const getStudent = async (req, res) => {
    try {
        const studentId = req.params.id; // Assuming the student ID is passed as a parameter in the request
    
        const specificStudent = await Student.findById(studentId);

        if (!specificStudent) {
            return res.status(404).send({ message: 'Student not found' });
        }

        res.status(200).send(specificStudent);
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
};