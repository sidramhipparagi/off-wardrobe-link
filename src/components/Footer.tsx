
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-100 mt-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <p className="text-sm text-gray-500">© 2025 Off. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
