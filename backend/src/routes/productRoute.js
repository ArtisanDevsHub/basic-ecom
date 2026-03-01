const express  = require("express")


const addProduct = require('../controllers/productController.js')
const upload = require("../middleware/multer.js")
const adminAuth = require ('../middleware/adminAuth.js')
const productRouter = express.Router()







productRouter.post(
  "/add",adminAuth,
  upload.array("images"),
  addProduct
);

module.exports = productRouter
