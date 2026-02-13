const express = require('express');
const router = express.Router();
const { createCategory } = require('../controller/categoryController');
const upload = require('../middleware/uploadMiddleware');
const Category = require('../model/CategoryModel');
const asyncHandler = require('express-async-handler');


router.post('/create', upload, createCategory); // Use upload middleware

// Get route
router.get('/get', asyncHandler(async (req, res) => {
  const categories = await Category.find({ status: true });
  res.status(200).json(categories);
}));
module.exports = router;