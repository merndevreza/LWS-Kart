"use client";
import { addToCart, addToWishlist } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LinkWithLocale from "../LinkWithLocale";
import useAuth from "@/app/hooks/useAuth";
import useGuestUser from "@/app/hooks/useGuestUser";
import { signIn } from "next-auth/react";
import { getUserInfo } from "@/database/queries/queries";

async function credentialLogin(formData) {
  try { 
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false, 
    });

    if (response?.ok) {
      const userInfo = await getUserInfo();
      return userInfo;
    } else {
      return {
        success: false,
        message: response?.error || "User Not found",
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
}

const LoginForm = ({ dictionary }) => {
  const { setUserInfo, wishlist, setWishlist, cart, setCart } = useAuth();
  const { guestCart, setGuestCart, guestWishlist, setGuestWishlist } =
    useGuestUser();
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget); 
      const response = await credentialLogin(formData);
  
      if (response.success) {
        setUserInfo(response.data);
        setCart(response.data.cart);
        setWishlist(response.data.wishlist);
  
        const result = await addToCart(guestCart.productId, guestCart.quantity);
        if (result.success) {
          setCart([...cart, guestCart]);
          setGuestCart([]);
        }
  
        const res = await addToWishlist(guestWishlist);
        if (res.success) {
          setWishlist([...wishlist, guestWishlist]);
          setGuestWishlist([]);
        }
        router.push("/")
   
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <>
      {error && <div className="text-red-600">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="space-y-2">
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              {dictionary.emailAddress}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              {dictionary.password}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              {dictionary.rememberMe}
            </label>
          </div>
          <LinkWithLocale className="text-primary" href="#">
            {dictionary.forgotPassword}
          </LinkWithLocale>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            {dictionary.login}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
