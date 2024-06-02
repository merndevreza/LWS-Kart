import {
  getAllProducts,
  getProductsFilteredByCategories,
} from "@/database/queries/queries";
import ProductCard from "../Products/ProductCard";

const ShopProducts = async ({ search, category }) => {
  let products = [];

  if (category && search) {
    products = await getProductsFilteredByCategories(category);
  } else if (search) {
    products = await getAllProducts(search);
  } else if (category) {
    products = await getProductsFilteredByCategories(category);
  } else {
    products = await getAllProducts();
  }

  
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {products?.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;
