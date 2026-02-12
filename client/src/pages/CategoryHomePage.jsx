import React from 'react';
import Hero from '../components/global/Hero';
import CategorySection from '../home/CategorySection'; // Fixed path
import ProductCard from '../home/ProductCard'; // Fixed path

const CategoryHomePage = () => { // Fixed component name
  const products = [
    { name: "Pants jumper", price: 59.00, rating: 4.7, reviews: 134, image: "/product1.jpg" },
    { name: "Pants jumper", price: 59.00, rating: 4.7, reviews: 134, image: "/product2.jpg" },
    { name: "Pants jumper", price: 59.00, rating: 4.7, reviews: 134, image: "/product3.jpg" },
    { name: "Pants jumper", price: 59.00, rating: 4.7, reviews: 134, image: "/product4.jpg" },
    { name: "Pants jumper", price: 59.00, rating: 4.7, reviews: 134, image: "/product5.jpg" },
    { name: "Pants jumper", price: 59.00, rating: 4.7, reviews: 134, image: "/product6.jpg" },
    { name: "Pants jumper", price: 59.00, rating: 4.7, reviews: 134, image: "/product7.jpg" },
    { name: "Pants jumper", price: 59.00, rating: 4.7, reviews: 134, image: "/product8.jpg" },
  ];

  return (
    <div>
      <Hero />
      <CategorySection />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-2">New arrivals</h2>
        <p className="text-sm text-gray-500 text-center mb-8">The best online Sales to shop this Weekend</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHomePage; // Fixed export name