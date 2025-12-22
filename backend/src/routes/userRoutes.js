const express = require("express");
const router = express.Router();
const userController = require('../../controller/userController')


// signup 
router.post("/signup", userController.signupComplete);


module.exports = router;