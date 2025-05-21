
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <span className="font-sans font-bold text-4xl text-[#8CD325]">
        Off
      </span>
    </Link>
  );
};

export default Logo;
