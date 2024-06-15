"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PackagePlus } from "lucide-react";
import { Product } from "@/types/product";
import { Skeleton } from "./ui/skeleton";

const MainContent = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const responce = await axios.get<Product[]>(
          "https://bankend-laptop-api.onrender.com/api/products"
        );
        setData(responce.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const index = cart.findIndex((item) => item._id === product._id);

    if (index !== -1) {
      cart[index].buyQuantity! += 1;
    } else {
      product.buyQuantity = 1;
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (loading) {
    return (
      <main className="container mt-20">
        <h2 className="font-semibold text-2xl mb-4">All products</h2>
        <ul className="grid grid-cols-6 gap-4">
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
          <li><Skeleton className="h-[310px] w-[200px] rounded-xl" /></li>
        </ul>
      </main>
    );
  }

  return (
    <main className="container mt-20">
      <h2 className="font-semibold text-2xl mb-4">All products</h2>
      <ul className="grid grid-cols-6 gap-4">
        {data?.map((item) => (
          <li
            key={item._id}
            className="flex flex-col items-center  rounded-xl border-2 border-transparent shadow-md hover:border-accent hover:shadow-xl hover-button"
          >
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt="logo_product"
                  height={200}
                  width={150}
                  className="fix-image"
                />
              </div>
            </div>
            <div className="min-h-12">
              <h3 className="px-2 text-wrap text-center font-medium">
                {item.name}
              </h3>
            </div>
            <div className="p-1 w-[100%] text-center">
              <span className="text-sm font-light">{item.price} $</span>
            </div>
            <Button
              className="mb-2 py-1 rounded-xl bg-pink-500 "
              onClick={() => handleAddToCart(item)}
            >
              <span className="px-2">Add to cart</span>
              <PackagePlus size={"20px"} />
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MainContent;
