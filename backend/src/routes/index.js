import express from 'express'

import studentsRoutes from './student.routes.js'

const router = express.Router()

// router.use('/', function(req,res) {
//     res.send("Hello")
// })

router.use('/students', studentsRoutes)


export default router