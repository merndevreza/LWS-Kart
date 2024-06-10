import { useContext } from "react";
import { AuthContext } from "../contextProvider/contexts";

export default function useAuth() {
  const {
    userInfo,
    setUserInfo,
    cart,
    setCart,
    wishlist,
    setWishlist, 
  } = useContext(AuthContext);
  return {
    userInfo,
    setUserInfo,
    cart,
    setCart,
    wishlist,
    setWishlist, 
  };
}
