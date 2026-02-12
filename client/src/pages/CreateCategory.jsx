import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Upload, X, Save, RotateCcw } from "lucide-react";

const AddCategory = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const MAX_IMAGES = 8;

  // --- State ---
  const [categoryName, setCategoryName] = useState("");
  const [parent, setParent] = useState("");
  const [status, setStatus] = useState(true);
  const [selectedImages, setSelectedImages] = useState([]); // Stores {preview, file}

  // --- Helpers ---
  const generateID = (name) => {
    if (!name) return "CAT_XXXXXX";
    return "CAT_" + name.toUpperCase().replace(/\s+/g, "_").slice(0, 6);
  };

  // --- Handlers ---
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prev) => {
      const remainingSlots = MAX_IMAGES - prev.length;
      if (remainingSlots <= 0) {
        alert("Max 8 images allowed!");
        return prev;
      }

      const allowedFiles = files.slice(0, remainingSlots);
      const newImages = allowedFiles.map((file) => ({
        preview: URL.createObjectURL(file),
        file,
      }));

      return [...prev, ...newImages];
    });
    e.target.value = ""; // Reset input
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConfirm = async () => {
    if (!categoryName) return alert("Please enter a category name");
    
    try {
      const formData = new FormData();
      formData.append("name", categoryName);
      formData.append("parent", parent);
      formData.append("status", status);

      selectedImages.forEach((image) => {
        formData.append("images", image.file);
      });

      const res = await axios.post(`${API_URL}/category/create`, formData, {
        // headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200 || res.status === 201) {
        alert("Category saved successfully!");
        navigate("/");
      }
    } catch (error) {
      // console.error(error);
      alert(error.response?.data?.message || "Failed to save category");
    }
  };

  const handleReset = () => {
    setCategoryName("");
    setParent("");
    setStatus(true);
    setSelectedImages([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Add/Edit Category</h2>
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RotateCcw size={18} /> Reset
            </button>
            <button
              onClick={handleConfirm}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 shadow-sm"
            >
              <Save size={18} /> Confirm
            </button>
          </div>
        </div>

 {/* Images Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Product Images</h3>
              <p className="text-xs text-gray-400 mb-4">Upload up to 8 images for this category.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative group aspect-square">
                    <img
                      src={image.preview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}

                {selectedImages.length < MAX_IMAGES && (
                  <label className="flex flex-col items-center justify-center aspect-square border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-pink-400 hover:bg-pink-50 transition-colors">
                    <Upload className="text-gray-400 mb-1" size={24} />
                    <span className="text-xs text-gray-500">Add Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content: Info & Images */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* General Info Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">General Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1 text-gray-600">Category Name</label>
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Enter category name"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-600">Parent Category</label>
                  <select 
                    value={parent}
                    onChange={(e) => setParent(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 bg-white outline-none"
                  >
                    <option value="">Select</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-600">Generated Category ID</label>
                  <input
                    type="text"
                    value={generateID(categoryName)}
                    disabled
                    className="w-full bg-gray-100 border rounded-lg px-4 py-2 text-gray-500 font-mono"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar: Status & Metadata */}
          <div className="space-y-6">
            {/* Status Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Status</span>
                <button
                  onClick={() => setStatus(!status)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
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
              <p className="text-xs text-gray-400 mt-3">
                When inactive, this category will be hidden from the storefront.
              </p>
            </div>

            {/* Metadata Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Metadata</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-500 font-medium uppercase">Last Updated Date</label>
                  <p className="text-sm text-gray-700 mt-1 italic">Auto-generated on save</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-medium uppercase">Last Updated By</label>
                  <p className="text-sm text-gray-700 mt-1">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;