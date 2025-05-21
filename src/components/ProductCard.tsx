
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
    <div className="flex flex-col space-y-4">
      <div className="relative overflow-hidden aspect-[3/4] rounded-md">
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-medium text-brand-dark">{name}</h3>
        <Link to={shopUrl}>
          <Button 
            className="bg-brand-green hover:bg-brand-green/90 text-brand-dark rounded-none w-full"
          >
            Shop now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
