
export type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  categoriesId: string;
  quantity: number;
  image: string;
  buyQuantity?: number;
};