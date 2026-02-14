const express = require("express");
const router = express.Router();
const signupController = require('../controller/signupController')
const { login } = require("../controller/loginController");
const loginValidation = require("../middleware/loginValidation");

// signup 
router.post("/signup", signupController.signupComplete);

// login (public + validation)
router.post("/login", loginValidation, login);

module.exports = router;