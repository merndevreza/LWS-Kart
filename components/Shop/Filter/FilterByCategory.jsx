"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByCategory = ({ categories }) => {
  const [query, setQuery] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const checked = event.target.checked;

    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filtered = query.filter((item) => item !== name);
      setQuery(filtered);
    }
  };

  useEffect(() => {
    const category = params.get("category");

    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInCategory = decodedCategory.split("|");
      setQuery(queryInCategory);
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query, pathname, replace]);

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
              checked={query.includes(category.name)}
              onChange={handleChange}
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
