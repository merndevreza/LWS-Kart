"use client";
import {
  faBagShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkWithLocale from "../LinkWithLocale";
import useAuth from "@/app/hooks/useAuth";

const Actions = ({ dictionary }) => {
  const { cart, wishlist } = useAuth();
  return (
    <div className="flex items-center space-x-4">
      <LinkWithLocale href="/shop/wishlist">
        <div className="text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="text-xs leading-3">{dictionary.wishlist}</div>
          <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            {wishlist.length}
          </div>
        </div>
      </LinkWithLocale>
      <LinkWithLocale href="#">
        <div className="text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <div className="text-xs leading-3">{dictionary.cart}</div>
          <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            {cart.length}
          </div>
        </div>
      </LinkWithLocale>
      <LinkWithLocale href="/ac">
        <div className="text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="text-xs leading-3">{dictionary.account}</div>
        </div>
      </LinkWithLocale>
    </div>
  );
};

export default Actions;
