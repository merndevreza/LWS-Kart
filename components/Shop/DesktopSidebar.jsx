import FilterByCategory from "./Filter/FilterByCategory";
import FilterByPrice from "./Filter/FilterByPrice";
import FilterBySize from "./Filter/FilterBySize";

const DesktopSidebar = () => {
  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        <FilterByCategory />
        <FilterByPrice />
        <FilterBySize />
      </div>
    </div>
  );
};

export default DesktopSidebar;
