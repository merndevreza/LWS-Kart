"use client"
import { useEffect, useState } from "react";
import { GuestUserContext } from "../contexts";

const GuestUserProvider = ({ children }) => {
  const [guestCart, setGuestCart] = useState({});
  const [guestWishlist, setGuestWishlist] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(guestCart));
  }, [guestCart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(guestWishlist));
  }, [guestWishlist]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist"));
    if (cartItems) {
      setGuestCart(cartItems);
    }
    if (wishlistItems) {
      setGuestWishlist(wishlistItems);
    }
  }, []);
  return (
    <GuestUserContext.Provider
      value={{ guestCart, setGuestCart, guestWishlist, setGuestWishlist }}
    >
      {children}
    </GuestUserContext.Provider>
  );
};

export default GuestUserProvider;
