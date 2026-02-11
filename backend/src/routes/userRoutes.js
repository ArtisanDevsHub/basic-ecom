const express = require("express");
const router = express.Router();
const signupController = require('../../src/controller/signupController')


// signup 
router.post("/signup", signupController.signupComplete);





module.exports = router;