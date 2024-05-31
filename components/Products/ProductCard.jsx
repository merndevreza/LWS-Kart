import {
  faHeart,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import LinkWithLocale from "../LinkWithLocale";

const ProductCard = ({product}) => {
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
          <LinkWithLocale href="#">
            <span
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </LinkWithLocale>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <LinkWithLocale href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.title}
          </h4>
        </LinkWithLocale>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">${product?.discountPrice}</p>
          <p className="text-sm text-gray-400 line-through">${product?.price}</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <LinkWithLocale
        href="#"
        
      >
        <span className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</span> 
      </LinkWithLocale>
    </div>
  );
};

export default ProductCard;
