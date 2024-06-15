import { Product } from "@/types/product";

export const getCart = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const updateCart = (cart: Product[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const increaseQuantity = (productId: string) => {
  const cart = getCart();
  const index = cart.findIndex((item) => item._id === productId);
  if (index !== -1 && cart[index].buyQuantity! < cart[index].quantity) {
    cart[index].buyQuantity! += 1;
    updateCart(cart);
  }
};

export const decreaseQuantity = (productId: string) => {
  const cart = getCart();
  const index = cart.findIndex((item) => item._id === productId);
  if (index !== -1 && cart[index].buyQuantity! > 1) {
    cart[index].buyQuantity! -= 1;
    updateCart(cart);
  }
};
