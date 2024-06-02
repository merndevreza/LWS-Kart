import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import LinkWithLocale from "../LinkWithLocale";
import { getAllCategories } from "@/database/queries/queries";

const CategoryMenu = async ({ dictionary }) => {
  const categories = await getAllCategories();

  return (
    <div className="px-8 py-4 bg-primary md:flex categorys-center cursor-pointer relative group hidden">
      <span className="text-white">
        <FontAwesomeIcon icon={faBars} />
      </span>
      <span className="capitalize ml-2 text-white">
        {dictionary.allCategories}
      </span>

      <div className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px] z-40">
        {categories.map((category) => (
          <LinkWithLocale key={category.id} href={`/shop?category=${category?.name}`}>
            <div className="flex categorys-center px-6 py-3 hover:bg-gray-100 transition">
              <Image
                src={category?.icon}
                alt={category?.name}
                className="w-5 h-5 object-contain"
                width={20}
                height={20}
              />
              <span className="ml-6 text-gray-600 text-sm">{category?.name}</span>
            </div>
          </LinkWithLocale>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
