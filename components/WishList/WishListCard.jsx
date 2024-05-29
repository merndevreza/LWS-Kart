import Image from "next/image";
import AddToCartBtn from "../Products/AddToCartBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const WishListCard = () => {
  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image
          src="../assets/images/products/product6.jpg"
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          Italian L shape
        </h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">$320.00</div>

      <AddToCartBtn sizeSmall={true} />
      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <FontAwesomeIcon icon={faTrash} /> 
      </div>
    </div>
  );
};

export default WishListCard;
