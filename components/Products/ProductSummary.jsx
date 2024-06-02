import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductSummary = ({ product }) => {
  return (
    <>
      <h2 className="text-3xl font-medium uppercase mb-2">{product?.title}</h2>
      <div className="flex items-center mb-4">
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
        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-800 font-semibold space-x-2">
          <span>Availability: </span>
          {product?.stock > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Stock Out</span>
          )}
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Brand: </span>
          <span className="text-gray-600">{product?.brand}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Category: </span>
          <span className="text-gray-600">{product?.category}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">SKU: </span>
          <span className="text-gray-600">{product?.sku}</span>
        </p>
      </div>
      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p className="text-xl text-primary font-semibold">
          ${product?.discountPrice}
        </p>
        <p className="text-base text-gray-400 line-through">
          ${product?.price}
        </p>
      </div>

      <p className="mt-4 text-gray-600">{product?.shortDescription}</p>
    </>
  );
};

export default ProductSummary;
