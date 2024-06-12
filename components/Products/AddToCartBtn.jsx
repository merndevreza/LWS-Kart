"use client";
import { addToCart, removeFromWishlist } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import useCurrentLocale from "@/app/hooks/useCurrentLocale";
import useGuestUser from "@/app/hooks/useGuestUser";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const AddToCartBtn = ({
  productCard,
  wishListCard,
  wishlistProducts,
  setWishlistProducts,
  productDetails,
  productId,
  quantity,
  stock,
}) => {
  const { userInfo,wishlist, setWishlist, cart, setCart } = useAuth(); 
  const {setGuestCart}=useGuestUser()
  const router = useRouter();
  const locale=useCurrentLocale()

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
          if (wishListCard) {
            const response = await removeFromWishlist(productId);
            if (response.success) {
              //wishlist icon count update
              const updatedList = wishlist.filter((item) => item.productId !== productId);
              setWishlist(updatedList)
              // wishlist page products update

              const updatedWishlist=wishlistProducts.filter(item=>item.id!==productId)
              setWishlistProducts(updatedWishlist)
      
            }
          }
          const updatedCartList = insertUniqId(cart, productId, quantity);
          setCart(updatedCartList);
        } else {
          console.error("Failed to add product to cart:", result.message);
        }
      } else { 
        setGuestCart({productId, quantity})
        router.push(`${locale}/login`)
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
