import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 relative">
          <img src="/hero-baby-clothes.jpg" alt="Baby Clothes" className="w-full h-80 object-cover rounded-lg" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">Everything you need for your baby</h2>
            <p className="text-gray-700 mb-6 max-w-md mx-auto">
              Explore our collection of new and popular baby clothes, designed with both style and comfort in mind.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium">
              Shop Now
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <img src="/cotton-fabric.jpg" alt="Cotton Fabric" className="w-full h-40 object-cover rounded-lg" />
            <div className="absolute top-4 right-4 text-center">
              <h3 className="text-lg font-bold text-orange-500">Cotton fabric</h3>
              <p className="text-sm text-gray-700">Safe for Babys' health</p>
            </div>
          </div>
          <div className="relative">
            <img src="/new-collection.jpg" alt="New Collection" className="w-full h-40 object-cover rounded-lg" />
            <div className="absolute top-4 right-4 text-center">
              <h3 className="text-lg font-bold text-orange-500">New collection</h3>
              <p className="text-sm text-gray-700">BAYBE</p>
              <button className="text-xs text-red-500 font-medium mt-1">Shop Now </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;