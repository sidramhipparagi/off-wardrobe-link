
import React from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const Index = () => {
  // This would typically come from an API or CMS
  const featuredProduct = {
    imageUrl: "/lovable-uploads/0855ae67-daf5-4367-8667-c16d400ad77e.png",
    name: "Oversized Wool Blend Coat",
    shopUrl: "#"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          <ProductCard
            imageUrl={featuredProduct.imageUrl}
            name={featuredProduct.name}
            shopUrl={featuredProduct.shopUrl}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
