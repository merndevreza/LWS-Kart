"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ dictionary }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const doSearch = (event) => {
    event.preventDefault();
    let locale = "";

    if (pathname.includes("/bn") || pathname.includes("/bn/")) {
      locale = "/bn";
    } else {
      locale = "/en";
    }

    const params = new URLSearchParams(searchParams);
    params.set("search", searchTerm);

    const query = params.toString();
    router.replace(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/shop?${query}`
    );
    setSearchTerm("")
  };

  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        type="search"
        name="search"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
        placeholder={dictionary.search}
      />
      <button
        onClick={doSearch}
        className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
      >
        {dictionary.search}
      </button>
    </div>
  );
};

export default Search;
