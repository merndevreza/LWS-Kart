"use client"; 
import { useEffect, useState } from "react";
import WishListCard from "./WishListCard";
import { getWishlistProducts } from "@/database/queries/queries";
import NoProductsFound from "../NoProductsFound";
import LinkWithLocale from "../LinkWithLocale";

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
      {products.length>0?(products.map((product) => (
        <WishListCard key={product.id} product={product} products={products} setProducts={setProducts}/>
      ))):(
        <div className="text-center space-y-3">
        <NoProductsFound message="No products in your wishlist"/>
        <LinkWithLocale className="bg-primary text-white border-primary border hover:bg-transparent hover:text-primary transition font-medium font-roboto rounded py-2 px-2 inline-block" href="/shop">Visit  Shop</LinkWithLocale>
        </div>
      ) }
    </div>
  );
};

export default WishList;
