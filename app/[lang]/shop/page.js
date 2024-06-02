import BreadCrumb from "@/components/BreadCrumb";
import ShopProducts from "@/components/Shop/ShopProducts";
import ShopSidebar from "@/components/Shop/ShopSidebar";

const refinedCategory = (category) => {
  const decodedCategory = decodeURI(category);
  if (decodedCategory === "undefined") {
    return "";
  }
  return decodedCategory;
};
const ShopPage = async ({ searchParams: { category,search,size } }) => {

  return (
    <main>
      <BreadCrumb pageTitle="Shop" />
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <ShopSidebar />
        <ShopProducts size={size} category={refinedCategory(category)} search={search}/>
      </div>
    </main>
  );
};

export default ShopPage;
