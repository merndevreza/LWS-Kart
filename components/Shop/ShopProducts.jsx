import {
  getAllProducts,
  getProductsFilteredByCategories,
} from "@/database/queries/queries";
import ProductCard from "../Products/ProductCard";
import NoProductsFound from "../NoProductsFound";

const ShopProducts = async ({ search, category, size, min, max }) => {
  let products = [];
  const response = await getAllProducts();
  products = response?.data;
  if (search) {
    const response = await getAllProducts(search);
    products = response?.data;
  }
  if (category) {
    const response = await getProductsFilteredByCategories(category);
    products = response?.data;
  }
  if (min && max) {
    products = products.filter((product) => {
      if (product.discountPrice > min && product.discountPrice < max) {
        return product;
      }
    });
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
      {
        products.length>0?(<div className="grid md:grid-cols-3 grid-cols-2 gap-6">
          {products?.map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </div>):(
          <NoProductsFound message="No products found"/>
        )
      }
      
    </div>
  );
};

export default ShopProducts;
