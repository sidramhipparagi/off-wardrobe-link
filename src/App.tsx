import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import OldProductCardSlider from './components/OldProductCardSlider';
import { currentProduct, previousProducts } from './data/products';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Router basename="/off-wardrobe-link">
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4 py-12">
                {/* Current Product Section */}
                <section className="mb-16">
                  <h2 className="text-lg font-bold text-[#80c41c] tracking-wider uppercase mb-8">Current Product</h2>
                  <ProductCard
                    imageUrl={currentProduct.imageUrl}
                    name={currentProduct.name}
                    description={currentProduct.description}
                    price={currentProduct.price}
                    shopUrl={currentProduct.shopUrl}
                    sizes={currentProduct.sizes}
                    colors={currentProduct.colors}
                    date={formattedDate}
                  />
                </section>

                {/* Previous Products Section */}
                <section className="mb-20">
                  <h2 className="text-lg font-bold text-[#80c41c] tracking-wider uppercase mb-8">Previous Products</h2>
                  <OldProductCardSlider products={previousProducts} />
                </section>
              </div>
            } />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
