import React from "react";
import ToggleSidebar from "./ToggleSidebar";
import DrawerSidebar from "./DrawerSidebar";
import DesktopSidebar from "./DesktopSidebar";

const ShopSidebar = () => {
  return (
    <>
      <ToggleSidebar />
      <DrawerSidebar />
      <DesktopSidebar/>
    </>
  );
};

export default ShopSidebar;
