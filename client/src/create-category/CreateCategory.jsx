import { useState } from "react";
import { Upload, X } from "lucide-react";

const AddCategory = () => {
  const [status, setStatus] = useState(true);
  const [selectedImages, setSelectedImages] = useState([]);
    const [categoryName, setCategoryName] = useState("");

  const MAX_IMAGES = 8;

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    setSelectedImages((prev) => {
      const remainingSlots = MAX_IMAGES - prev.length;

      if (remainingSlots <= 0) {
        alert("You can upload a maximum of 8 images.");
        return prev;
      }

      const allowedFiles = files.slice(0, remainingSlots);
      const imagePreviews = allowedFiles.map((file) =>
        URL.createObjectURL(file),
      );

      return [...prev, ...imagePreviews];
    });

    // Reset input so same file can be reselected
    e.target.value = "";
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const generateFromName = (name = "") => {
    if (!name) return "";

    return "CAT_" + name.toUpperCase().replace(/\s+/g, "_").slice(0, 6);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <h2 className="text-xl font-semibold mb-6">Add/Edit Categories</h2>

      {/* Card */}
      <div className="bg-white rounded-lg shadow p-6">
        {/* Header */}
        <div className="flex justify-end items-center mb-6">
          <span className="mr-3 text-sm text-gray-600">Active/Inactive</span>
          <button
            onClick={() => setStatus(!status)}
            className={`w-11 h-6 flex items-center rounded-full p-1 ${
              status ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ${
                status ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Images */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Product Images
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-xl border-2 border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-pink-400 hover:bg-pink-50 transition-colors">
                  <Upload className="text-gray-400 mb-2" size={24} />
                  <span className="text-sm text-gray-600">Add Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-sm text-gray-500">
                {selectedImages.length} / 8 images selected
              </p>
            </div>
          </div>

          {/* Category ID */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Category ID
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category id"
              className="w-full border rounded-lg px-4 py-2"
            />

            <input
              type="text"
              value={generateFromName(categoryName)}
              disabled
              className="w-full bg-gray-100 border rounded-lg px-4 py-2 mt-2"
            />
          </div>

          {/* Category Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Enter category name"
              className="w-full border rounded-lg px-4 py-2 text-sm"
            />
          </div>

          {/* Parent Category */}
          <div>
            <label className="block text-sm font-medium mb-2">Parent</label>
            <select className="w-full border rounded-lg px-4 py-2 text-sm">
              <option>Select parent category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Accessories</option>
            </select>
          </div>

          {/* Last Updated Date */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Last Updated Date
            </label>
            <input
              type="text"
              disabled
              placeholder="Auto generated"
              className="w-full bg-gray-100 border rounded-lg px-4 py-2 text-sm"
            />
          </div>

          {/* Last Updated By */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Last Updated By
            </label>
            <input
              type="text"
              disabled
              placeholder="Admin"
              className="w-full bg-gray-100 border rounded-lg px-4 py-2 text-sm"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="px-6 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500">
            Reset
          </button>
          <button className="px-6 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
