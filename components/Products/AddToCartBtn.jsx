import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import LinkWithLocale from "../LinkWithLocale";

const AddToCartBtn = ({ sizeSmall }) => {
  return (
    <LinkWithLocale
      href="#" 
    >
      <span  className={`bg-primary border border-primary text-white py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition ${
        sizeSmall ? "px-6" : "px-8"
      }`}><FontAwesomeIcon icon={faBagShopping}/> Add to cart</span>
      
    </LinkWithLocale>
  );
};

export default AddToCartBtn;
