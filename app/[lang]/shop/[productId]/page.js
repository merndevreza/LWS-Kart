import BreadCrumb from "@/components/BreadCrumb";
import ProductDescription from "@/components/Products/ProductDescription";
import ProductDetails from "@/components/Products/ProductDetails";
import ProductImageGallery from "@/components/Products/ProductImageGallery";
import RelatedProducts from "@/components/Products/RelatedProducts";
import { getProductById } from "@/database/queries/queries";

const ProductDetailsPage = async ({ params: { productId } }) => {
  const response = await getProductById(productId);
  let product = {};
  if (response.success) {
    product = response?.data;
  } 
  return (
    <main>
      <BreadCrumb pageTitle="Product" />
      <section>
        <div className="container grid grid-cols-2 gap-6 mb-5">
          <ProductImageGallery
            title={product?.title}
            gallery={product?.gallery}
          />
          <ProductDetails product={product} />
        </div>
        <ProductDescription description={product?.fullDescription} />
      </section>
      <RelatedProducts categoryName={product?.category} />
    </main>
  );
};

export default ProductDetailsPage;
