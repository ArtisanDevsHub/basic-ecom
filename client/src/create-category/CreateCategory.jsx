import { useState } from "react";

const AddCategory = () => {
  const [status, setStatus] = useState(true);

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
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Add Category Image
            </label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <div className="text-gray-400 mb-2">⬆</div>
              <p className="text-sm text-gray-500 mb-2">
                Upload category image
              </p>
              <input type="file" className="hidden" id="imageUpload" />
              <label
                htmlFor="imageUpload"
                className="text-blue-600 text-sm cursor-pointer"
              >
                Update File
              </label>
            </div>
          </div>

          {/* Category ID */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Category ID
            </label>
            <input
              type="text"
              disabled
              placeholder="XX_XXXX_XX"
              className="w-full bg-gray-100 border rounded-lg px-4 py-2 text-sm"
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
