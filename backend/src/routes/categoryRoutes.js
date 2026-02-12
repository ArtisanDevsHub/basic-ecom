const express = require('express');
const router = express.Router();
const { createCategory } = require('../controller/categoryController');
const upload = require('../middleware/uploadMiddleware');

router.post('/create', upload, createCategory); // Use upload middleware

module.exports = router;