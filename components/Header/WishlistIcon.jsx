"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import LinkWithLocale from "../LinkWithLocale";
import useAuth from "@/app/hooks/useAuth";

const WishlistIcon = ({dictionary}) => {
   const { wishlist } = useAuth();
  return (
    <LinkWithLocale href="/shop/wishlist">
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-2xl">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="text-xs leading-3">{dictionary.wishlist}</div>
        <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {wishlist?.length}
        </div>
      </div>
    </LinkWithLocale>
  );
};

export default WishlistIcon;
