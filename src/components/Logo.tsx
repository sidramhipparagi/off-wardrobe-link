
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <span className="font-sans font-bold text-3xl tracking-tighter text-brand-dark bg-brand-green px-4 py-1">
        Off
      </span>
    </Link>
  );
};

export default Logo;
