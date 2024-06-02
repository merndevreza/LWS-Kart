import FilterByCategory from "./Filter/FilterByCategory";
import FilterByPrice from "./Filter/FilterByPrice";
import FilterBySize from "./Filter/FilterBySize";

const DesktopSidebar = ({allAvailableSizes,categories}) => {
  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        <FilterByCategory categories={categories}/>
        <FilterByPrice />
        <FilterBySize allAvailableSizes={allAvailableSizes}/>
      </div>
    </div>
  );
};

export default DesktopSidebar;
