import React, { useState } from 'react';

interface OldProductCardProps {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  shopUrl: string;
  sizes: string[];
  colors: string[];
  date: string;
}

const OldProductCard: React.FC<OldProductCardProps> = ({
  id,
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
    <div 
      className="bg-white rounded-2xl shadow-lg border-4 border-[#e6ffcc] h-full transition-shadow hover:shadow-lg cursor-pointer"
    >
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="w-full h-40 bg-white flex items-center justify-center relative">
          {imageError ? (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs">Image not available</span>
            </div>
          ) : (
            <img
              src={getImageUrl(imageUrl)}
              alt={name}
              className="max-h-full max-w-full object-contain mx-auto"
              onError={handleImageError}
            />
          )}
          <div className="absolute top-1 right-1 bg-[#80c41c] text-white px-1.5 py-0.5 rounded-full text-[8px] font-medium">
            {date}
          </div>
        </div>

        {/* Details Section */}
        <div className="p-3 flex-grow flex flex-col">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm font-bold text-[#80c41c]">₹{price.toLocaleString()}</span>
            <span className="text-[#80c41c] text-xs">Shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldProductCard; 