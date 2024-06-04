"use client"
import Image from "next/image";
import toggleIcon from "@/public/assets/images/icons/grid.png"

const ToggleSidebar = ({ setIsOpen }) => {
  return (
    <div className="text-center md:hidden">
      <button
        onClick={()=>setIsOpen(true)}
        type="button"
        className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
      > 
      <Image src={toggleIcon} alt="Toggle Sidebar" width={16} height={16}/>
      </button>
    </div>
  );
};

export default ToggleSidebar;
