import productData from './productData.json';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  shopUrl: string;
  sizes: string[];
  colors: string[];
}

// Current featured product
export const currentProduct: Product = productData.currentProduct;

// Previous featured products
export const previousProducts: Product[] = productData.previousProducts; 