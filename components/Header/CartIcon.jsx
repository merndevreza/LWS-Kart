"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import useAuth from "@/app/hooks/useAuth";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const CartIcon = ({ dictionary }) => {
  const { userInfo } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <span className="text-2xl">
          <FontAwesomeIcon icon={faBagShopping} />
        </span>
        <div className="text-xs leading-3">{dictionary.cart}</div>
        <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {userInfo?.cart ? userInfo.cart.length : 0}
        </div>
      </button>
      {isOpen && <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default CartIcon;
