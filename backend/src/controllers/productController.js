const cloudinary = require("cloudinary").v2;

const productModel = require ('../models/productModel.js')

const addProduct = async (req, res) => {
  try {
    console.log("req.files:", req.files);
console.log("req.body:", req.body);

    const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;



    const imageUrls = await Promise.all(
      req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: sizes ? JSON.parse(sizes) : [],
      bestSeller: bestSeller === "true",
      image: imageUrls,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully" });

  } catch (error) {
    console.log("ADD PRODUCT ERROR ❌", error);
    res.status(500).json({ success: false, message: "Product add failed" });
  }
};

module.exports = addProduct
