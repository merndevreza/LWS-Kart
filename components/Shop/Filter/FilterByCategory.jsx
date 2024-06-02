import { getAllCategories } from "@/database/queries/queries";

const FilterByCategory = async () => {
  const categories = await getAllCategories();
  return (
    <div>
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Categories
      </h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center">
            <input
              type="checkbox"
              name={category.name}
              id={category.id}
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor={category.id}
              className="text-gray-600 ml-3 cursor-pointer"
            >
              {category.name}
            </label>
            <div className="ml-auto text-gray-600 text-sm">
              ({category.productsId.length})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByCategory;
