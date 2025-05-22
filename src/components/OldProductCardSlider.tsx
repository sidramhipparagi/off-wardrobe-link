import React, { useRef } from 'react';
import OldProductCard from './OldProductCard';
import { Product } from '../data/products';
import { Link } from 'react-router-dom';

interface OldProductCardSliderProps {
  products: Product[];
  date?: string;
}

const OldProductCardSlider: React.FC<OldProductCardSliderProps> = ({ products }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 220; // card width (200px) + gap (20px)
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const getDateForIndex = (index: number) => {
    const date = new Date();
    date.setDate(date.getDate() - (index + 1)); // +1 because we want to start from yesterday
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative w-full">
      {/* Scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-4 px-4 scrollbar-hide"
      >
        {products.map((product, index) => (
          <div key={product.id} className="flex-none w-[200px]">
            <div className="h-[300px]">
              <Link to={`/product/${product.id}`} className="block h-full">
                <OldProductCard
                  id={product.id}
                  imageUrl={product.imageUrl}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  shopUrl={product.shopUrl}
                  sizes={product.sizes}
                  colors={product.colors}
                  date={getDateForIndex(index)}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicators */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-colors z-10"
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-colors z-10"
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>
  );
};

export default OldProductCardSlider; 