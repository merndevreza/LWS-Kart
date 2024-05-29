import ProductCard from "./ProductCard";

const Products = () => {
   return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
      </div>
   );
};

export default Products;