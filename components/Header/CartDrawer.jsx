"use client";
import { usePathname, useRouter } from "next/navigation";
import CartProducts from "./CartProducts";

const CartDrawer = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  let locale = "";

  if (pathname.includes("/bn") || pathname.includes("/bn/")) {
    locale = "/bn";
  } else {
    locale = "/en";
  }
  const handleNavigate = () => {
    setIsOpen(false);
    router.push(`${locale}/shop/checkout`);
  };
  return (
    <div
    onClick={(e) =>{
      e.stopPropagation()
      setIsOpen(false)
    } }
      className={`${
        !isOpen ? "-translate-x-full" : ""
      } fixed top-0 left-0 z-40 h-screen w-full transition-transform duration-1000 ease-in-out mr-0 ml-0 bg-slate-400/25`}
    >
      <div className="h-full ml-auto mr-0 p-4 overflow-y-auto bg-white w-[500px] dark:bg-gray-800">
        <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-300">
          Cart
        </h5>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close Cart</span>
        </button>
        <CartProducts handleNavigate={handleNavigate}/>
      </div>
    </div>
  );
};

export default CartDrawer;
