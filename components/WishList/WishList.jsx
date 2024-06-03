"use client";
import useWishlist from "@/app/hooks/useWishlist";
import WishListCard from "./WishListCard";

const WishList = () => {
  const { products } = useWishlist();
  return (
    <div className="mx-auto space-y-4 max-w-6xl">
      {products.map((product) => (
        <WishListCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default WishList;
