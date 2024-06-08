import { getTrendingProducts } from "@/database/queries/queries";
import Products from "../Products/Products";
import SectionTitle from "../SectionTitle";

const TrendingProducts = async({dictionary}) => {
   const products=await getTrendingProducts(8)
   return (
     <section className="container pb-16">
       <SectionTitle title={dictionary.productsSectionTitle}/>
       <Products products={products?.data}/>
     </section>
   );
 };
export default TrendingProducts;