import { getLatestProducts } from "@/database/queries/queries";
import ProductCard from "../Products/ProductCard";
import SectionTitle from "../SectionTitle";

const NewArrival = async({dictionary}) => {
  const products=await getLatestProducts(4)
  return (
    <section className="container pb-16">
      <SectionTitle title={dictionary.newArrivalSectionTitle}/> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {
          products?.data.map(product=><ProductCard key={product.id} product={product}/>)
        } 
      </div>
    </section>
  );
};

export default NewArrival;
