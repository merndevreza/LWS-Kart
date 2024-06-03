import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddToCartBtn = ({
  productCard,
  wishListCard,
  productDetails,
  productId,
}) => {
  return (
    <button className={`${productCard ? "block w-full" : ""}`}>
      {productCard && (
        <span className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
          Add to cart
        </span>
      )}
      {wishListCard && (
        <span className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
          Add to cart
        </span>
      )}
      {productDetails && (
        <span className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
          <FontAwesomeIcon icon={faBagShopping} />
          Add to cart
        </span>
      )}
    </button>
  );
};

export default AddToCartBtn;
