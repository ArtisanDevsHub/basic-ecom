const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a category name'],
      unique: true,
      trim: true,
    },
    parent: {
      type: String,
      default: null,
      trim: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    images: [
      {
        type: String, // Stores image paths (e.g., /uploads/image1.jpg)
      },
    ],
    lastUpdatedDate: {
      type: Date,
      default: Date.now,
    },
    lastUpdatedBy: {
      type: String,
      default: 'Admin',
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt fields automatically
  }
);

module.exports = mongoose.model('addCategory', categorySchema);