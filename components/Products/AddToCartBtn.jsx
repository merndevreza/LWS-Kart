"use client";
import { addToCart } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const AddToCartBtn = ({
  productCard,
  wishListCard,
  productDetails,
  productId,
  quantity,
  stock,
}) => {
  const { userInfo, cart, setCart } = useAuth();
  const router = useRouter();

  const insertUniqId = (arr, id, quantity) => {
    const exists = arr.some((item) => item.productId === id);

    if (exists) {
      const otherItems = arr.filter((item) => item.productId !== id);
      return [...otherItems, { productId: id, quantity }];
    } else {
      return [...arr, { productId: id, quantity }];
    }
  };

  const handleAddToCart = async () => {
    try {
      if (userInfo) {
        const result = await addToCart(productId, quantity);
        if (result.success) {
          const updatedCartList = insertUniqId(cart, productId, quantity);
          setCart(updatedCartList);
          console.log("Product added to cart");
        } else {
          console.error("Failed to add product to cart:", result.message);
        }
      } else {
        router.push("/login");
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
      {(productCard || wishListCard) && <span>Add to cart</span>}
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
