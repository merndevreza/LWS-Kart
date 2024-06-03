import { auth } from "@/auth";
import SocialShare from "../SocialShare";
import ProductDetailsActions from "./ProductDetailsActions";
import ProductSummary from "./ProductSummary";

const ProductDetails = async ({ product }) => {
  const session = await auth();
  return (
    <div>
      <ProductSummary product={product} />
      <ProductDetailsActions
        userId={session?.user?.id}
        productId={product?.id}
        stock={product?.stock}
      />
      <SocialShare productId={product?.id} />
    </div>
  );
};

export default ProductDetails;
