import React from 'react';
import imgNew from '../assets/category/Ellipse 1 (1).png';
import imgToy from '../assets/category/Ellipse 1 (2).png';
import imgClothing from '../assets/category/Ellipse 1 (3).png';
import imgBibs from '../assets/category/Ellipse 1 (4).png';
import imgNew2 from '../assets/category/Ellipse 1 (5).png';
import imgNew3 from '../assets/category/Ellipse 1.png';

const CategorySection = () => {
  const categories = [
    { name: "New", image: imgNew},
    { name: "Baby Toy", image: imgToy },
    { name: "Baby Clothing", image: imgClothing },
    { name: "Cute bibs", image: imgBibs },
    { name: "New", image: imgNew2 },
    { name: "New", image: imgNew3 },
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