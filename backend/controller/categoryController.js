const Category = require("../model/CategoryModel");


  // CREATE CATEGORY

exports.createCategory = async (req, res) => {
  try {
    const {
      categoryId,
      categoryName,
      status,
      parentCategory,
      images,
    } = req.body;

    // Check duplicate
    const existing = await Category.findOne({ categoryId });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Category ID already exists",
      });
    }

    const category = new Category({
      categoryId,
      categoryName,
      status,
      parentCategory: parentCategory || null,
      images,
      lastUpdatedBy: "Admin",
    });

    await category.save();

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.error("Create Category Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


  // GET ALL CATEGORIES

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("parentCategory");

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
