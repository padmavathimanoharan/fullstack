import axios from "axios";

import { StudentType } from "../types/student.types";

const STUDENT_API_URL = `${import.meta.env.VITE_BASE_URL}/students`
const ADD_STUDENT_ENDPOINT = `${STUDENT_API_URL}`
const GET_STUDENTS_ENDPOINT = `${STUDENT_API_URL}`
// const GET_STUDENT_ENDPOINT = `${STUDENT_API_URL}/:id`


export const addStudent = async (studentData: StudentType) => {
    try {
       const response = await axios.post(ADD_STUDENT_ENDPOINT, studentData)
       return response.data
    } catch(err) {
        console.log(err)
    }
}

export const getStudents =async () => {
    try {
        const response = await axios.get(GET_STUDENTS_ENDPOINT)
        return response.data
     } catch(err) {
         console.log(err)
     }
}