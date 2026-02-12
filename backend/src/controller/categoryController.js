const Category = require('../model/CategoryModel');
const asyncHandler = require('express-async-handler');

// @desc    Create a new category
// @route   POST /api/category/create
// @access  Public
const createCategory = asyncHandler(async (req, res) => {
  const { name, parent, status } = req.body;

  // Get uploaded image paths
  const images = req.files ? req.files.map((file) => `/uploads/${file.filename}`) : [];

  // Check if category name exists
  const categoryExists = await Category.findOne({ name });
  if (categoryExists) {
    res.status(400);
    throw new Error('Category name already exists');
  }

  const category = await Category.create({
    name,
    parent: parent || null,
    status: status === 'true', // Convert string to boolean
    images,
    lastUpdatedBy: 'Admin', // Hardcoded for now
  });

  if (category) {
    res.status(201).json(category);
  } else {
    res.status(400);
    throw new Error('Invalid category data');
  }
});

module.exports = {
  createCategory,
};