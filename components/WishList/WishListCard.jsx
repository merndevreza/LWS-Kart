"use client"
import Image from "next/image";
import AddToCartBtn from "../Products/AddToCartBtn"; 
import WishlistDeleteBtn from "./WishlistDeleteBtn"; 

const WishListCard = ({ product }) => {

  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          width={120}
          height={80}
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          {product?.title}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          {product?.stock > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Stock Out</span>
          )}
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">${product?.discountPrice}</div>

      <AddToCartBtn stock={product?.stock} productId={product?.id} quantity={1} wishListCard={true} />

     <WishlistDeleteBtn productId={product?.id}/>
    </div>
  );
};

export default WishListCard;
