import React from 'react';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mx-auto mb-8">
            <h1 className="text-3xl font-bold px-6 py-2 rounded-full bg-[#F2FCE2] text-[#80c41c]">Featured Product</h1>
          </div>
          <div className="flex justify-center">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                description={product.description}
                price={product.price}
                shopUrl={product.shopUrl}
                sizes={product.sizes}
                colors={product.colors}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
