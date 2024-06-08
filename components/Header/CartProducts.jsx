"use client";
import { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";
import { getAllProductsInCart } from "@/database/queries/queries";

const CartProducts = () => {
  const [productsWithQuantity, setProductsWithQuantity] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const result = await getAllProductsInCart();
      if (result.success) {
        setProductsWithQuantity(result?.data);
      }
    }
    getProducts();
  }, []);
  return (
    <div className="mx-auto space-y-4 max-w-6xl">
      {productsWithQuantity.map((item) => (
        <CartProductCard
          key={item?.product._id}
          product={item?.product}
          quantity={item?.quantity} 
          setProductsWithQuantity={setProductsWithQuantity}
        />
      ))}
    </div>
  );
};

export default CartProducts;
