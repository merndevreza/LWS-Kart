import Products from "../Products/Products";
import SectionTitle from "../SectionTitle";

const ProductsSection = ({dictionary}) => {
  return (
    <section className="container pb-16">
      <SectionTitle title={dictionary.productsSectionTitle}/>
      <Products />
    </section>
  );
};

export default ProductsSection;
