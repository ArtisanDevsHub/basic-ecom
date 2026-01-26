const express = require("express");
const router = express.Router();
const categoryController = require("../../controller/categoryController");

// create category
router.post("/create", categoryController.createCategory);

// get categories
router.get("/", categoryController.getCategories);

module.exports = router;
