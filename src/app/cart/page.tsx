"use client";
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { decreaseQuantity, getCart, increaseQuantity } from "@/utils/cart";
import { Button } from "@/components/ui/button";
import TableCart from "@/components/cart/TableCart";
import PopUpConfirm from "@/components/cart/PopUpConfirm";
import Toast from "@/components/cart/Toast";

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpenConfirm, setIsOpenConfirm] = useState<boolean>(false);
  const [isOpenToast, setIsOpenToast] = useState<boolean>(false);
  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleIncrease = (productId: string) => {
    increaseQuantity(productId);
    setCart(getCart());
  };

  const handleDecrease = (productId: string) => {
    decreaseQuantity(productId);
    setCart(getCart());
  };

  const totalAmount = cart.reduce(
    (total, product) => total + product.price * (product.buyQuantity || 0),
    0
  );

  const handleConfirm = () => {
    localStorage.removeItem("cart");
    setCart(getCart());
    setIsOpenConfirm(false);
    setIsOpenToast(true);
  };
  console.log(isOpenToast);

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <TableCart
        cart={cart}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        totalAmount={totalAmount}
      />

      <div className="mt-8 flex justify-end items-center">
        <Button
          onClick={() => setIsOpenConfirm(true)}
          disabled={cart.length === 0}
        >
          Checkout
        </Button>
      </div>

      <PopUpConfirm
        isOpenConfirm={isOpenConfirm}
        setIsOpenConfirm={setIsOpenConfirm}
        handleConfirm={handleConfirm}
      />

      <Toast isOpenToast={isOpenToast} setIsOpenToast={setIsOpenToast} />
    </div>
  );
};

export default CartPage;
