import { useContext } from "react";
import { GuestUserContext } from "../contextProvider/contexts";

export default function useGuestUser() {
   
  const { guestCart, setGuestCart, guestWishlist, setGuestWishlist } =
    useContext(GuestUserContext);

  return { guestCart, setGuestCart, guestWishlist, setGuestWishlist };
}
