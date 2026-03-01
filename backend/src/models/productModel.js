const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  subCategory: String,
  sizes: [String],
  bestSeller: Boolean,
  image: [String],
  date: Number
});

const productModel = mongoose.models.product ||  mongoose.model("product",productSchema)

module.exports = productModel
