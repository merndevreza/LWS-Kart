import ProductCard from "../Products/ProductCard";
import SectionTitle from "../SectionTitle";

const NewArrival = ({dictionary}) => {
  return (
    <section className="container pb-16">
      <SectionTitle title={dictionary.newArrivalSectionTitle}/> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
  );
};

export default NewArrival;
