import Image from "next/image";
import LinkWithLocale from "../LinkWithLocale";
import DeleteFromCartBtn from "./DeleteFromCartBtn";

const CartProductCard = ({ product, quantity,  setProductsWithQuantity }) => {
  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          width={120}
          height={80}
          className="w-full"
        />
      </div>
      <div className="w-2/3 space-y-2">
        <LinkWithLocale href={`/shop/${product?._id}`}>
          <h2 className="text-white text-md font-medium uppercase hover:text-primary">
            {product?.title}
          </h2>
        </LinkWithLocale>
        <p className="text-gray-300 text-sm">Quantity: {quantity}</p>
        <div className="text-primary text-lg font-semibold">
          ${product?.discountPrice}
        </div>
      </div>

      <DeleteFromCartBtn
        productId={product?._id} 
        setProductsWithQuantity={setProductsWithQuantity}
      />
    </div>
  );
};

export default CartProductCard;
