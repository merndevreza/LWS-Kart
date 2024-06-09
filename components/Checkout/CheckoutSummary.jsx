"use client";
import LinkWithLocale from "../LinkWithLocale";
import { useEffect, useState } from "react";
import { getAllProductsInCart } from "@/database/queries/queries";

const CheckoutSummary = ({ handlePlaceOrder, errors }) => {
  const [productsWithQuantity, setProductsWithQuantity] = useState([]);
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const shippingCost = 0;

  useEffect(() => {
    async function getProducts() {
      const result = await getAllProductsInCart();
      if (result.success) {
        setProductsWithQuantity(result?.data);

        const subtotal = result?.data.reduce((total, item) => {
          return total + item.product.discountPrice * item.quantity;
        }, 0);
        setSubtotalPrice(subtotal.toFixed(2));
      }
    }
    getProducts();
  }, []);

  return (
    <section className="col-span-4 border border-gray-200 p-4 rounded">
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        {productsWithQuantity.map((item) => (
          <div key={item.product._id} className="flex justify-between">
            <div>
              <h5 className="text-gray-800 font-medium">
                {item.product.title}
              </h5>
              <p className="text-sm text-gray-600">Size: {item.product.size}</p>
            </div>
            <p className="text-gray-600">x{item.quantity}</p>
            <p className="text-gray-800 font-medium">
              ${(item.product.discountPrice * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
        <p>subtotal</p>
        <p>${subtotalPrice}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
        <p>shipping</p>
        <p>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
        <p className="font-semibold">Total</p>
        <p>${subtotalPrice + shippingCost}</p>
      </div>

      <form onSubmit={(e) => handlePlaceOrder(e, subtotalPrice)}>
        <div className="flex items-center mb-4 mt-2">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            required
            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
          />
          <label
            htmlFor="agreement"
            className="text-gray-600 ml-3 cursor-pointer text-sm"
          >
            I agree to the{" "}
            <LinkWithLocale
              className="text-primary"
              href="/terms-and-conditions"
            >
              Terms & conditions
            </LinkWithLocale>
          </label>
        </div>

        <button
          type="submit"
          className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
        >
          Place order
        </button>
      </form>
      {errors.message}
    </section>
  );
};

export default CheckoutSummary;
