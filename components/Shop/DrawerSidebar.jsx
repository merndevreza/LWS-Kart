"use client";
import FilterByCategory from "./Filter/FilterByCategory";
import FilterByPrice from "./Filter/FilterByPrice";
import FilterBySize from "./Filter/FilterBySize";

const DrawerSidebar = ({
  allAvailableSizes,
  categories,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className={`${
        !isOpen ? "translate-x-full":""
      } fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800`}
    >
      <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-300">
        Filter Products
      </h5>
      <button
        onClick={() => setIsOpen(false)}
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="divide-y divide-gray-200 space-y-5 text-gray-400 dark:text-gray-200">
        <FilterByCategory categories={categories} />
        <FilterByPrice />
        <FilterBySize allAvailableSizes={allAvailableSizes} />
      </div>
    </div>
  );
};

export default DrawerSidebar;
