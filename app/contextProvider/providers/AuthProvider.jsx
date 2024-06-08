"use client";

import { useEffect, useState } from "react";
import { AuthContext } from "../contexts";
import { getUserInfo } from "@/database/queries/queries";

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    async function getUser() {
      const response = await getUserInfo();
      if (response.success) {
        setUserInfo(response?.data);
        setCart(response?.data?.cart);
        setWishlist(response?.data?.wishlist);
      }
    }
    getUser();
  }, []);

  const values = {
    userInfo,
    setUserInfo,
    cart,
    setCart,
    wishlist,
    setWishlist,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
