import React from 'react';
import { useParams } from 'react-router-dom';
import { currentProduct, previousProducts, Product } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the product by id (check both current and previous products)
  let product: Product | undefined = undefined;
  if (currentProduct.id === id) {
    product = currentProduct;
  } else {
    product = previousProducts.find((p) => p.id === id);
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-4">The product you are looking for does not exist.</p>
        <a href="/" className="text-[#80c41c] hover:underline">Go back to Home</a>
      </div>
    );
  }

  // Use today's date for the detail page, as on the main page
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <ProductCard
        imageUrl={product.imageUrl}
        name={product.name}
        description={product.description}
        price={product.price}
        shopUrl={product.shopUrl}
        sizes={product.sizes}
        colors={product.colors}
        date={formattedDate}
      />
    </div>
  );
};

export default ProductDetailPage; 