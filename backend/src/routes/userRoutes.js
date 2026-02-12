const express = require("express");
const router = express.Router();
const signupController = require('../controller/signupController')


// signup 
router.post("/signup", signupController.signupComplete);


module.exports = router;