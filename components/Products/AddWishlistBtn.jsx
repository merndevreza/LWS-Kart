"use client";
import { addToWishlist } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const AddWishlistBtn = ({ detailsPage, card, productId }) => {
  const { userInfo, wishlist, setWishlist } = useAuth();
  const router = useRouter();

  const insertUniqId = (arr, id) => {
    const exists = arr.some((item) => item.productId === id);
    if (!exists) {
      return [...arr, { productId: id }];
    }
    return arr;
  };

  const handleAddWishlist = async () => {
    try {
      if (userInfo) {
        const result = await addToWishlist(productId);

        if (result.success) {
          const updatedList = insertUniqId(wishlist, productId);
          setWishlist(updatedList);

          console.log("Product added to Wishlist");
        } else {
          console.error("Failed to add product to Wishlist:", result.message);
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error adding product to Wishlist:", error);
    }
  };
  return (
    <button onClick={handleAddWishlist}>
      {detailsPage && (
        <span className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
          <FontAwesomeIcon icon={faHeart} />
          Wishlist
        </span>
      )}
      {card && (
        <span
          className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          title="add to wishlist"
        >
          <FontAwesomeIcon icon={faHeart} />
        </span>
      )}
    </button>
  );
};

export default AddWishlistBtn;
