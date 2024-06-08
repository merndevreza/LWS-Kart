"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeFromCart } from "@/app/actions";
import { getAllProductsInCart } from "@/database/queries/queries";
import useAuth from "@/app/hooks/useAuth";

const DeleteFromCartBtn = ({ productId, setProductsWithQuantity }) => {
  
  const { cart, setCart } = useAuth();

  const removeId = (arr, id) => {
    const updatedList = arr.filter((item) => item.productId !== id);
    return updatedList;
  };

  const handleRemove = async () => {
    try {
      const result = await removeFromCart(productId);
      if (result.success) {
        const response = await getAllProductsInCart();
        setProductsWithQuantity(response?.data);

        const updatedList = removeId(cart, productId);
        setCart(updatedList); 
      } else {
        console.error("Failed removed from Cart:", result.message);
      }
    } catch (error) {
      console.error("Error removing product from Cart:", error);
    }
  };
  return (
    <button
      onClick={handleRemove}
      className="text-gray-400 cursor-pointer hover:text-primary mr-3"
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default DeleteFromCartBtn;
