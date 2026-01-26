
const express = require("express")
const {loginUser} = require('../controllers/userController.js')
const loginValidation = require("../middleware/Authvalidation.js")
const userRouter = express.Router()

userRouter.post('/login', loginValidation ,loginUser)

module.exports =  userRouter
