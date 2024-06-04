"use client";
import { useState } from "react";
import DrawerSidebar from "./DrawerSidebar";
import ToggleSidebar from "./ToggleSidebar";

const MobileSidebar = ({ allAvailableSizes, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ToggleSidebar setIsOpen={setIsOpen} />
      {isOpen && (
        <DrawerSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          allAvailableSizes={allAvailableSizes}
          categories={categories}
        />
      )}
    </>
  );
};

export default MobileSidebar;
