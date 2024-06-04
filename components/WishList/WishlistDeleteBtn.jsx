"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeFromWishlist } from "@/app/actions";
import { getWishlistProducts } from "@/database/queries/queries";
import useAuth from "@/app/hooks/useAuth";

const WishlistDeleteBtn = ({ productId, setProducts }) => {
  const { wishlist, setWishlist } = useAuth();
  const removeId = (arr, id) => {
    const updatedList = arr.filter((item) => item.productId !== id);
    return updatedList;
  };

  const handleRemove = async () => {
    try {
      const result = await removeFromWishlist(productId);
      if (result.success) {
        const response = await getWishlistProducts();
        setProducts(response);
        
        const updatedWishlist = removeId(wishlist, productId);
        setWishlist(updatedWishlist);


        console.log("Product removed from Wishlist");
      } else {
        console.error("Failed removed from Wishlist:", result.message);
      }
    } catch (error) {
      console.error("Error removing product from Wishlist:", error);
    }
  };
  return (
    <button
      onClick={handleRemove}
      className="text-gray-600 cursor-pointer hover:text-primary"
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default WishlistDeleteBtn;
