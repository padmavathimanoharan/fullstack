import express from 'express'

import { addStudent, getAllStudents, getStudent } from '../controllers/students.controllers.js'

const router = express.Router()

// this is === /students
router.get('/:id', getStudent);
router.get('/', getAllStudents) //GET all students
router.post('/', addStudent) // ADD a new student
// router.get('/:id', getStudent) // GET a single student by id
// router.put() // UPDATE a student
// router.delete() // DElETE a student


export default router