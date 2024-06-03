import { useContext } from "react";
import { WishlistContext } from "../contextProvider/contexts";

export default function useWishlist(){
   const { products, setProducts } = useContext(WishlistContext);
   return { products, setProducts }
}