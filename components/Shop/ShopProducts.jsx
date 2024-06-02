import {
  getAllProducts,
  getProductsFilteredByCategories,
} from "@/database/queries/queries";
import ProductCard from "../Products/ProductCard";

const ShopProducts = async ({ search, category, size }) => {
  let products = [];
  products = await getAllProducts();
  
  if (search) {
    products = await getAllProducts(search);
  }
  if (category) {
    products = await getProductsFilteredByCategories(category);
  }
  if (size) {
    products = products.filter((product) => {
      if (product.size === size) {
        return product;
      }
    });
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
