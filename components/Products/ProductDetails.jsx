import SocialShare from "../SocialShare";
import AddToCartBtn from "./AddToCartBtn";
import AddWishlistBtn from "./AddWishlistBtn";
import ProductSummary from "./ProductSummary";

const ProductDetails = ({product}) => {
  return (
    <div>
      <ProductSummary product={product}/>
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            4
          </div>
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
            +
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <AddToCartBtn productDetails={true} productId={product?.id}/>
        <AddWishlistBtn />
      </div>

      <SocialShare productId={product?.id}/>
    </div>
  );
};

export default ProductDetails;
