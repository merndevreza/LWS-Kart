import React from "react";
import ToggleSidebar from "./ToggleSidebar";
import DrawerSidebar from "./DrawerSidebar";
import DesktopSidebar from "./DesktopSidebar";
import { getAllCategories } from "@/database/queries/queries";

const ShopSidebar = async() => {
  const categories = await getAllCategories();

  const plainCategories = JSON.parse(JSON.stringify(categories));
  return (
    <>
      <ToggleSidebar />
      <DrawerSidebar categories={plainCategories}/>
      <DesktopSidebar categories={plainCategories}/>
    </>
  );
};

export default ShopSidebar;
