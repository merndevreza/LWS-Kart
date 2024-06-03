"use client";
import { useEffect, useState } from "react";
import { WishlistContext } from "../contexts"; 
import { getWishlistProducts } from "@/database/queries/queries";

const WishlistProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const result = await getWishlistProducts();
      setProducts(result);
    }
    getProducts();
  }, []);
  return (
    <WishlistContext.Provider value={{ products, setProducts }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
