import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkWithLocale from "../LinkWithLocale";

const AddWishlistBtn = () => {
  return (
    <LinkWithLocale href="#">
      <span className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
        <FontAwesomeIcon icon={faHeart} />
        Wishlist
      </span>
    </LinkWithLocale>
  );
};

export default AddWishlistBtn;
