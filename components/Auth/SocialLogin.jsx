"use client";
import useAuth from "@/app/hooks/useAuth";
import useCurrentLocale from "@/app/hooks/useCurrentLocale";
import useGuestUser from "@/app/hooks/useGuestUser";
import { getUserInfo } from "@/database/queries/queries";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function doSocialLogin(formData) {
  try {
    const action = formData.get("action");
     await signIn(action, {
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    const userInfo = await getUserInfo(); 
    return userInfo; 
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
}

const SocialLogin = ({ title }) => {
  const { setUserInfo, wishlist, setWishlist, cart, setCart } = useAuth();
  const { guestCart, setGuestCart, guestWishlist, setGuestWishlist } =
    useGuestUser();
  const [error, setError] = useState("");
  const router = useRouter();
  const locale=useCurrentLocale()

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doSocialLogin(formData);

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
        router.push(`${locale}`)
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
          {title}
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>

      <form onSubmit={onSubmit} className="mt-4 flex gap-4">
        <button
          type="submit"
          name="action"
          value="fb"
          className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
        >
          facebook
        </button>
        <button
          type="submit"
          name="action"
          value="google"
          className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
        >
          google
        </button>
      </form>
      {error && <div className="text-red-600">{error}</div>}
    </>
  );
};

export default SocialLogin;
