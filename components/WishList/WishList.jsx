"use client"; 
import { useEffect, useState } from "react";
import WishListCard from "./WishListCard";
import { getWishlistProducts } from "@/database/queries/queries";

const WishList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const result = await getWishlistProducts();
      if (result.success) {
        setProducts(result?.data);
      }
    }
    getProducts();
  }, []); 
  return (
    <div className="mx-auto space-y-4 max-w-6xl">
      {products.map((product) => (
        <WishListCard key={product.id} product={product} products={products} setProducts={setProducts}/>
      ))}
    </div>
  );
};

export default WishList;
