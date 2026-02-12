import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm font-medium text-gray-700">{product.name}</p>
          <p className="text-sm font-bold text-red-500">${product.price}</p>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex">
            {[1,2,3,4,5].map((star) => (
              <span key={star} className="text-yellow-500 text-xs">★</span>
            ))}
          </div>
          <p className="text-xs text-gray-500 ml-1">{product.rating} ({product.reviews} Reviews)</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded">
            ADD TO CART
          </button>
          <Heart size={16} className="text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;