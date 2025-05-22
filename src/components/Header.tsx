import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-5xl font-bold text-[#80c41c] font-afacadflux">Off</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#80c41c] transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-[#80c41c] transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-[#80c41c] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#80c41c] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-[#80c41c] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
