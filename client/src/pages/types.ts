export interface Category {
  category_id: number;
  name: string;
  description: string;
  img: string;
}

export interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  category_id: number;
  img: string;
}
