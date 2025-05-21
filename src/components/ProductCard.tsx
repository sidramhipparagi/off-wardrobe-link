import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  shopUrl: string;
  sizes: string[];
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  description,
  price,
  shopUrl,
  sizes,
  colors
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto border-8 border-[#F2FCE2] flex">
      {/* Image Section */}
      <div className="w-1/2 p-6">
        <div className="relative w-full" style={{ paddingTop: '100%' }}>
          <img
            src={imageUrl}
            alt={name}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-3">{name}</h3>
          <p className="text-gray-600 mb-4 text-base">{description}</p>
          <p className="text-2xl font-bold text-[#80c41c] mb-4">{formatPrice(price)}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Available Sizes:</h4>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <span key={size} className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Colors:</h4>
            <div className="flex gap-2">
              {colors.map((color) => (
                <span key={color} className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#80c41c] text-white text-center py-3 rounded-xl hover:bg-[#6ba617] transition-colors text-lg font-medium"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
