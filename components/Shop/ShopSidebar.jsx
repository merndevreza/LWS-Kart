import { getAllCategories, getAllSizes } from "@/database/queries/queries";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

const ShopSidebar = async () => {
  //all size
  const allSizes = await getAllSizes();
  const sizeSorting = ["XS", "S", "M", "L", "XL"];
  const allAvailableSizes = sizeSorting
    .map((size) => allSizes?.data.find((s) => s === size))
    .filter((size) => size !== undefined);
  //all categories
  const categories = await getAllCategories(); 
  const plainCategories = JSON.parse(JSON.stringify(categories?.data)); 
  return (
    <>
      <MobileSidebar
        allAvailableSizes={allAvailableSizes}
        categories={plainCategories}
      />
      <DesktopSidebar
        allAvailableSizes={allAvailableSizes}
        categories={plainCategories}
      />
    </>
  );
};

export default ShopSidebar;
