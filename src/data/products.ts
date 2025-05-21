export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  shopUrl: string;
  category: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Studiofit White Text Print Relaxed-Fit Cotton-Blend T-Shirt",
    description: "This white t-shirt from Studiofit is decked with text designs. Milled from a cotton-blend fabric, the relaxed-fit creation is fitted with a crewneck and short sleeves.",
    price: 899,
    imageUrl: "/images/products/301009402OFFWHITE_1.jpg",
    shopUrl: "https://www.westside.com/products/studiofit-white-text-print-relaxed-fit-cotton-blend-t-shirt-301009402?variant=44312433786933",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"]
  }
]; 