
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-brand-light mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <Logo />
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Minimalist fashion brand focusing on sustainable and timeless pieces.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-brand-dark mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">New Arrivals</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Bestsellers</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-brand-dark mb-4">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact Us</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Shipping</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Returns</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-brand-dark mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Our Story</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Sustainability</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Stores</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">© 2025 Off. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
