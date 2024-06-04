import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import LinkWithLocale from "../LinkWithLocale";
import AddToCartBtn from "./AddToCartBtn";
import AverageRating from "./AverageRating";
import AddWishlistBtn from "./AddWishlistBtn";

const ProductCard = async ({ product }) => { 
  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          className="w-full"
          width={400}
          height={400}
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <LinkWithLocale href="#">
            <span
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </LinkWithLocale>
          <AddWishlistBtn
            productId={product?.id}
            card={true}
          />
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <LinkWithLocale href={`/shop/${product?.id}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.title}
          </h4>
        </LinkWithLocale>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">
            ${product?.discountPrice}
          </p>
          <p className="text-sm text-gray-400 line-through">
            ${product?.price}
          </p>
        </div>
        <AverageRating productId={product?.id} />
      </div>
      <AddToCartBtn
        productId={product?.id}
        stock={product?.stock} 
        quantity={1}
        productCard={true}
      />
    </div>
  );
};

export default ProductCard;
