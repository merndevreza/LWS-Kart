import SocialShare from "../SocialShare";
import ProductDetailsActions from "./ProductDetailsActions";
import ProductSummary from "./ProductSummary";

const ProductDetails = async ({ product }) => { 
  return (
    <div>
      <ProductSummary product={product} />
      <ProductDetailsActions 
        productId={product?.id}
        stock={product?.stock}
      />
      <SocialShare productId={product?.id} />
    </div>
  );
};

export default ProductDetails;
