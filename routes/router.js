const express = require('express')
const usercontroller =  require('../controller/usercontroller')
// const jwtmiddleware = require('../middleware/jwtmiddleware')
const taskController=require('../controller/taskcontroller')

const router =new express.Router()
// register
router.post('/register',usercontroller.registerController)
// login
router.post('/login',usercontroller.loginController)
// // // alluser checking
router.post('/add-task',taskController.addtaskController)
// // alluserDetailController
// router.get('/alluserDetail-check',jwtmiddleware,usercontroller.alluserDetailController)

module.exports = router