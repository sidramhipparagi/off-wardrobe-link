
import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-brand-dark hover:text-gray-600 transition-colors">
            New Arrivals
          </a>
          <a href="#" className="text-brand-dark hover:text-gray-600 transition-colors">
            Collection
          </a>
          <a href="#" className="text-brand-dark hover:text-gray-600 transition-colors">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
