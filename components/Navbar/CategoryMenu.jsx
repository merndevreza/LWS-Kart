import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import LinkWithLocale from "../LinkWithLocale";
import { getAllCategories } from "@/database/queries/queries";

const CategoryMenu = async ({ dictionary }) => {
  const categories = await getAllCategories();

  return (
    <div className="px-8 py-4 bg-primary md:flex category-center cursor-pointer relative group hidden">
      <div className="flex items-center">
        <span className="text-white">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <span className="capitalize ml-2 text-white">
          {dictionary.allCategories}
        </span>
      </div>

      <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-40">
        {categories?.data.map((category) => (
          <LinkWithLocale
            key={category.id}
            href={`/shop?category=${category?.name}`}
          >
            <div className="flex category-center px-6 py-3 hover:bg-gray-100 transition border-b border-dashed border-gray-300">
              <Image
                src={category?.icon}
                alt={category?.name}
                className="w-5 h-5 object-contain"
                width={20}
                height={20}
              />
              <span className="ml-6 text-gray-600 text-sm">
                {category?.name}
              </span>
            </div>
          </LinkWithLocale>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
