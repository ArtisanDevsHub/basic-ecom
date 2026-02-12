const express = require('express');
const router = express.Router();
const { createCategory } = require('../controller/categoryController');
const upload = require('../middleware/uploadMiddleware');

router.post('/create', upload, createCategory); // Use upload middleware

// router.get('/get', asyncHandler(async (req, res) => {
//   const categories = await Category.find({ status: true });
//   res.status(200).json(categories);
// }));

module.exports = router;