"use client";
import { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";
import { getAllProductsInCart } from "@/database/queries/queries";
import NoProductsFound from "../NoProductsFound";

const CartProducts = ({ handleNavigate }) => {
  const [productsWithQuantity, setProductsWithQuantity] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const result = await getAllProductsInCart();
      if (result.success) {
        setProductsWithQuantity(result?.data);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      {productsWithQuantity.length > 0 ? (
        <>
          <div className="mx-auto space-y-4 max-w-6xl">
            {productsWithQuantity.map((item) => (
              <CartProductCard
                key={item?.product._id}
                product={item?.product}
                quantity={item?.quantity}
                setProductsWithQuantity={setProductsWithQuantity}
              />
            ))}
          </div>

          <button
            onClick={handleNavigate}
            className="bg-primary text-white border-primary border hover:bg-transparent hover:text-primary transition block w-full py-3 text-center mt-5 rounded-sm text-lg"
          >
            Checkout
          </button>
        </>
      ) : (
        <NoProductsFound message="Your Cart is empty" />
      )}
    </div>
  );
};

export default CartProducts;
