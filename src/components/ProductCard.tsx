
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  shopUrl: string;
}

const ProductCard = ({ imageUrl, name, shopUrl }: ProductCardProps) => {
  return (
    <div className="flex flex-col space-y-4 border-4 border-[#8CD325] rounded-xl p-0 overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between p-8">
          <h3 className="text-2xl font-bold">Off - {name}</h3>
          <Link to={shopUrl} className="self-end">
            <Button 
              className="bg-[#8CD325] hover:bg-[#8CD325]/90 text-white rounded-full px-8 py-2"
            >
              Shop
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
