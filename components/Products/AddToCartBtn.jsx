"use client";
import { addToCart } from "@/app/actions";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddToCartBtn = ({
  productCard,
  wishListCard,
  productDetails,
  productId,
  quantity,
  stock,
}) => {
  const handleAddToCart = async () => {
    try {
      const result = await addToCart(productId, quantity);
      if (result.success) {
        console.log("Product added to cart");
      } else {
        console.error("Failed to add product to cart:", result.message);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <button
      disabled={!stock > 0}
      onClick={handleAddToCart}
      className={`bg-primary text-white border-primary border hover:bg-transparent hover:text-primary transition ${
        productCard && "block w-full py-1 text-center rounded-b"
      } ${
        (wishListCard || productDetails) &&
        "uppercase font-medium font-roboto rounded py-2"
      } ${wishListCard && "px-6 text-center text-sm"} ${
        productDetails && "px-8 flex items-center gap-2"
      }`}
    >
      {(productCard || wishListCard )&& <span>Add to cart</span>}
      {productDetails && (
        <>
          <FontAwesomeIcon icon={faBagShopping} />
          Add to cart
        </>
      )}
    </button>
  );
};

export default AddToCartBtn;
