"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByPrice = () => {
  const [query, setQuery] = useState({
    min: "",
    max: "",
  });

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const minPrice = params.get("min");
    const maxPrice = params.get("max");

    if (minPrice && maxPrice) {
      setQuery({ min: minPrice, max: maxPrice });
    }
  }, []);

  useEffect(() => {
    if (query.min && query.max ) {
      params.set("min",query.min);
      params.set("max",query.max);
    } else {
      params.delete("min");
      params.delete("max");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query,pathname,replace]);
console.log(query);
  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Price
      </h3>
      <div className="mt-4 flex items-center">
        <input
          type="number"
          name="min"
          id="min"
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="min"
          value={query.min}
          onChange={handleChange}
        />
        <span className="mx-3 text-gray-500">-</span>
        <input
          type="number"
          name="max"
          id="max"
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="max"
          value={query.max}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterByPrice;
