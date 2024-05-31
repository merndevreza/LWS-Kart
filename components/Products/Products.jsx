import ProductCard from "./ProductCard";

const Products = ({products}) => {
   return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
         {
            products.map(product=><ProductCard key={product.id} product={product}/>)
         }
      </div>
   );
};

export default Products;