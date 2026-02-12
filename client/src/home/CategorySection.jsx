import React from 'react';

const CategorySection = () => {
  const categories = [
    { name: "New", image: "/category-new.jpg" },
    { name: "Baby Toy", image: "/category-toy.jpg" },
    { name: "Baby Clothing", image: "/category-clothing.jpg" },
    { name: "Cute bibs", image: "/category-bibs.jpg" },
    { name: "New", image: "/category-new2.jpg" },
    { name: "New", image: "/category-new3.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-2">Shop by Category</h2>
      <p className="text-sm text-gray-500 text-center mb-8">The best online Sales to shop this Weekend</p>
      
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-medium text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;