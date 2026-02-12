import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & Contact Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/baybe-logo.png" 
                alt="BAYBE" 
                className="h-8"
              />
              {/* Or use text logo if no image */}
              {/* <span className="text-2xl font-bold text-red-500">BAYBE</span> */}
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <p>We're available by phone <span className="text-gray-800">+123-456-789</span></p>
              <p>info@example.com</p>
              <p>Monday till Friday 10 to 6 EST</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Facebook size={14} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Instagram size={14} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Twitter size={14} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Useful links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">How it works</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">About us</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Babysitters</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: My Account */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">My account</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Track my order</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Terms of use</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Wishlist</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Submit your feedback</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Service */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Customer service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Help & contact us</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Returns & refunds</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Online stores</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Terms & condition</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;