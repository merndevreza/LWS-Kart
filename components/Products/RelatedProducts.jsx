import { getProductsByCategoryName } from "@/database/queries/queries";
import Products from "./Products";

const RelatedProducts = async({categoryName}) => {
const products= await getProductsByCategoryName(categoryName) 
  return (
    <section className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Related products
      </h2>
      <Products products={products?.data}/>
    </section>
  );
};

export default RelatedProducts;
