import BreadCrumb from "@/components/BreadCrumb";
import ShopProducts from "@/components/Shop/ShopProducts";
import ShopSidebar from "@/components/Shop/ShopSidebar";
import {
  getAllProducts, 
  getProductsByCategoryName,
} from "@/database/queries/queries";

const ShopPage = async ({ searchParams: { category,search } }) => {
  let products = [];

  if (category && search) {
    products = await getAllProducts(search);
  } else if(search) {
    products = await getAllProducts(search);
  } else if(category) {
    products = await getProductsByCategoryName(category);
  }else{
    products = await getAllProducts();
  }

  return (
    <main>
      <BreadCrumb pageTitle="Shop" />
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <ShopSidebar />
        <ShopProducts products={products} />
      </div>
    </main>
  );
};

export default ShopPage;
