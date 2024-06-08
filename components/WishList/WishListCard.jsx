"use client";
import Image from "next/image";
import AddToCartBtn from "../Products/AddToCartBtn";
import WishlistDeleteBtn from "./WishlistDeleteBtn";
import LinkWithLocale from "../LinkWithLocale";

const WishListCard = ({ product, products, setProducts }) => {
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
        <LinkWithLocale href={`/shop/${product?.id}`}>
          <h2 className="text-gray-800 text-xl font-medium uppercase hover:text-primary">
            {product?.title}
          </h2>
        </LinkWithLocale>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          {product?.stock > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Stock Out</span>
          )}
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">
        ${product?.discountPrice}
      </div>

      <AddToCartBtn
        stock={product?.stock}
        productId={product?.id}
        quantity={1}
        wishListCard={true}
        wishlistProducts={products}
        setWishlistProducts={setProducts}
      />

      <WishlistDeleteBtn
        productId={product?.id}
        setProducts={setProducts}
        products={products}
      />
    </div>
  );
};

export default WishListCard;
