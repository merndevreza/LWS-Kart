"use client";
import { useEffect, useState } from "react";
import { WishlistContext } from "../contexts";
import { auth } from "@/auth";

const WishlistProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   async function getProducts() {
  //     const session = await auth();
  //     const result = await getWishlistProducts(session?.user?.id);
  //     setProducts(result);
  //   }
  //   getProducts();
  // }, []);
  return (
    <WishlistContext.Provider value={{ products, setProducts }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
