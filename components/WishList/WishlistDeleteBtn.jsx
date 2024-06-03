"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeFromWishlist } from "@/app/actions";
import { getWishlistProducts } from "@/database/queries/queries";
import useWishlist from "@/app/hooks/useWishlist";

const WishlistDeleteBtn = ({ userId, productId }) => {
   const {setProducts}=useWishlist()
  const handleRemove = async () => {
    try {
      const result = await removeFromWishlist(userId, productId);
      if (result.success) {
         const response = await getWishlistProducts(userId);
         setProducts(response);
        console.log("Product removed from Wishlist");
      } else {
        console.error("Failed removed from Wishlist:", result.message);
      }
    } catch (error) {
      console.error("Error removing product from Wishlist:", error);
    }
  };
  return (
    <button onClick={handleRemove}
      className="text-gray-600 cursor-pointer hover:text-primary"
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default WishlistDeleteBtn;
