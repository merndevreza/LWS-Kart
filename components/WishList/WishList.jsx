"use client";
// import useWishlist from "@/app/hooks/useWishlist";
// import WishListCard from "./WishListCard";

const WishList = ({userId}) => {
  // const { products } = useWishlist();
  return (
    <div className="mx-auto space-y-4 max-w-6xl">
      {/* {products.map((product) => (
        <WishListCard key={product.id} product={product} userId={userId}/>
      ))} */}
    </div>
  );
};

export default WishList;
