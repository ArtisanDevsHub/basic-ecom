import React, { useState } from "react";
import axios from "axios";
import placeholder from "../assets/uploadicon.png";

const Add = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Image Change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]); // multiple select করলে add হবে
  };

  // Remove Image
  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  // Size Select Toggle
  const toggleSize = (size) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter((item) => item !== size));
    } else {
      setSizes([...sizes, size]);
    }
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      images.forEach((img) => {
        formData.append("images", img); // must match backend
      });

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      await axios.post("http://localhost:4000/api/product/add", formData);

      alert("✅ Product Added Successfully");

      // Reset
      setImages([]);
      setName("");
      setDescription("");
      setPrice("");
      setSizes([]);
      setBestSeller(false);

    } catch (error) {
      console.log(error);
      alert("❌ Upload Failed");
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Image Upload */}
        <div>
          <p className="mb-2 font-semibold">Upload Images</p>

          <label htmlFor="images">
            <div className="flex gap-3 flex-wrap cursor-pointer">

              {images.length === 0 && (
                <div className="w-24 p-2 border rounded">
                  <img src={placeholder} alt="" />
                </div>
              )}

              {images.map((img, index) => (
                <div key={index} className="relative w-24">
                  <img
                    src={URL.createObjectURL(img)}
                    alt=""
                    className="rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white px-1 text-xs"
                  >
                    X
                  </button>
                </div>
              ))}

            </div>

            <input
              type="file"
              id="images"
              hidden
              multiple
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Name */}
        <input
          className="border p-2"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Description */}
        <textarea
          className="border p-2"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Price */}
        <input
          type="number"
          className="border p-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* Category */}
        <select
          className="border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>

        {/* SubCategory */}
        <select
          className="border p-2"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        >
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>

        {/* Sizes */}
        <div>
          <p className="mb-2">Select Sizes</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                type="button"
                key={size}
                onClick={() => toggleSize(size)}
                className={`px-3 py-1 border ${
                  sizes.includes(size)
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Bestseller */}
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={bestSeller}
            onChange={() => setBestSeller(!bestSeller)}
          />
          <label>Add to BestSeller</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white p-3 rounded"
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>

      </form>
    </div>
  );
};

export default Add;
