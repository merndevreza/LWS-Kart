"use client";
import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import AddWishlistBtn from "./AddWishlistBtn";

const ProductDetailsActions = ({ productId, userId,stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      value = 1;
    }
    setQuantity(value);
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <button
            className="h-8 w-8 text-xl select-none inline-block hover:text-primary border-r border-gray-300"
            onClick={handleDecrease}
          >
            -
          </button>
          <input
            type="number"
            name="quantityInput"
            value={quantity}
            onChange={handleInputChange}
            className="h-8 w-12 pr-0 border-none hover:text-primary"
          />
          <button
            className="h-8 w-8 text-xl select-none inline-block hover:text-primary"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <AddToCartBtn
          userId={userId}
          productDetails={true}
          productId={productId}
          quantity={quantity}
          stock={stock} 
        />
        <AddWishlistBtn
          userId={userId}
          productId={productId}
          detailsPage={true}
        />
      </div>
    </>
  );
};

export default ProductDetailsActions;
