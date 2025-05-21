
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-brand-light mt-20">
      <div className="container">
        <div className="flex justify-center">
          <Logo />
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">© 2025 Off. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
