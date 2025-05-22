import React, { useState } from 'react';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  shopUrl: string;
  sizes: string[];
  colors: string[];
  date: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  description,
  price,
  shopUrl,
  sizes,
  colors,
  date
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Make sure image URLs are correct with the base path
  const getImageUrl = (url: string) => {
    if (url.startsWith('http')) {
      return url;
    }
    
    // If it's a relative URL, add the base path
    if (!url.startsWith('/')) {
      return `/off-wardrobe-link/${url}`;
    }
    
    return url;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border-8 border-[#e6ffcc] max-w-sm mx-auto flex flex-col items-center p-4">
      {/* Image Section */}
      <div className="flex items-center justify-center w-80 h-80 bg-white mb-6">
        {imageError ? (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-xl">
            <span className="text-gray-500">Image not available</span>
          </div>
        ) : (
          <img
            src={getImageUrl(imageUrl)}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            onError={handleImageError}
          />
        )}
      </div>
      {/* Details Section */}
      <div className="w-full flex flex-col items-start text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
        <p className="text-base text-gray-600 mb-2">{description}</p>
        <span className="text-xl font-bold text-[#80c41c] mb-3 block">₹{price.toLocaleString()}</span>
        <div className="mb-2 w-full flex flex-col items-start">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">Available Sizes:</h3>
          <div className="flex flex-wrap gap-1">
            {sizes.map((size) => (
              <span
                key={size}
                className="px-3 py-0.5 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-300"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4 w-full flex flex-col items-start">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">Colors:</h3>
          <div className="flex flex-wrap gap-1">
            {colors.map((color) => (
              <span
                key={color}
                className="px-3 py-0.5 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-300"
              >
                {color}
              </span>
            ))}
          </div>
        </div>
        <a
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#80c41c] text-white px-8 py-2 rounded-lg text-base font-semibold hover:bg-[#6ba617] transition-colors text-center w-full"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
