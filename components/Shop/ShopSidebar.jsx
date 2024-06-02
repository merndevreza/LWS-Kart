import React from "react";
import ToggleSidebar from "./ToggleSidebar";
import DrawerSidebar from "./DrawerSidebar";
import DesktopSidebar from "./DesktopSidebar";
import { getAllCategories, getAllSizes } from "@/database/queries/queries";

const ShopSidebar = async () => {
  //all size
  const allSizes = await getAllSizes();
  const sizeSorting = ["XS", "S", "M", "L", "XL"];
  const allAvailableSizes = sizeSorting
    .map((size) => allSizes.find((s) => s === size))
    .filter((size) => size !== undefined);
  //all categories
  const categories = await getAllCategories();
  const plainCategories = JSON.parse(JSON.stringify(categories));
  return (
    <>
      <ToggleSidebar />
      <DrawerSidebar
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
