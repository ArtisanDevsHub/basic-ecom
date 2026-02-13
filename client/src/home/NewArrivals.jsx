import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryHomePage = () => {
  const [imageCards, setImageCards] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API_URL}/category/get`);
        const data = res.data;

        // Flatten: each image becomes its own card object
        const flatImageCards = data.flatMap(category =>
          category.images.map((img) => ({
            imageUrl: `${API_URL}${img}`,
            categoryName: category.name,
            parent: category.parent,
            lastUpdatedBy: category.lastUpdatedBy
          }))
        );

        setImageCards(flatImageCards);
      } catch (err) {
        console.error("Fetching categories failed:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">All Category Images</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {imageCards.map((card, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <img
              src={card.imageUrl}
              alt={`category-${card.categoryName}-${index}`}
              className="w-full h-50 object-contain mb-3 rounded"
            />
            <h3 className="font-semibold text-lg">{card.categoryName}</h3>
            <p className="text-sm text-gray-500">
              {card.parent ? `Parent: ${card.parent}` : "No parent"}
            </p>
            <p className="text-xs text-gray-400">Updated by: {card.lastUpdatedBy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryHomePage;