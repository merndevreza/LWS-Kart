"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterBySize = ({allAvailableSizes }) => {
  const [query, setQuery] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setQuery(value);
    } else {
      setQuery("");
    }
  };

  useEffect(() => {
    const sizeInParams = searchParams.get("size");
    if (sizeInParams) {
      setQuery(sizeInParams);
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set("size", query);
    } else {
      params.delete("size");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query, pathname, replace, searchParams]);

  return (
    <div className="pt-4">
      <h3 className="text-xl md:text-gray-800 mb-3 uppercase font-medium">Size</h3>
      <div className="flex items-center gap-2">
        {allAvailableSizes.map((size) => (
          <div key={size} className="size-selector">
            <input
              type="radio"
              name="size"
              value={size}
              checked={query === size}
              id={size}
              className="hidden"
              onChange={handleChange}
            />
            <label
              htmlFor={size}
              className={`${query === size ? "bg-primary" : ""} text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm md:text-gray-600`}
            >
              {size}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBySize;
