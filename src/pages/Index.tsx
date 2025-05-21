
import React from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const Index = () => {
  // This would typically come from an API or CMS
  const featuredProduct = {
    imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?q=80&w=1974&auto=format&fit=crop",
    name: "Oversized Wool Blend Coat",
    shopUrl: "#"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Removed tagline and description */}
        <section className="w-full py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Tagline and description removed from here */}
            </div>
          </div>
        </section>
        
        {/* Featured Product */}
        <section className="w-full py-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">Featured Product</h2>
            <div className="max-w-md mx-auto">
              <ProductCard
                imageUrl={featuredProduct.imageUrl}
                name={featuredProduct.name}
                shopUrl={featuredProduct.shopUrl}
              />
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="w-full py-12 bg-brand-green/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-dark">About Off</h2>
              <p className="text-gray-700">
                Off is a minimalist fashion brand created with the modern individual in mind.
                Our collection features timeless pieces designed to last beyond seasonal trends.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
