import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import LinkWithLocale from "../LinkWithLocale";

const CategoryMenu = ({ dictionary }) => {
  return (
    <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
      <span className="text-white">
        <FontAwesomeIcon icon={faBars} />
      </span>
      <span className="capitalize ml-2 text-white hidden">
        {dictionary.allCategories}
      </span>

      <div className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px] z-40">
        <LinkWithLocale href="#">
          <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <Image
              src="/assets/images/icons/sofa.svg"
              alt="sofa"
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
            />
            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
          </div>
        </LinkWithLocale>
        <LinkWithLocale href="#">
          <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <Image
              src="/assets/images/icons/sofa.svg"
              alt="sofa"
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
            />
            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
          </div>
        </LinkWithLocale>
        <LinkWithLocale href="#">
          <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <Image
              src="/assets/images/icons/sofa.svg"
              alt="sofa"
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
            />
            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
          </div>
        </LinkWithLocale>
        <LinkWithLocale href="#">
          <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <Image
              src="/assets/images/icons/sofa.svg"
              alt="sofa"
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
            />
            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
          </div>
        </LinkWithLocale>
        <LinkWithLocale href="#">
          <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <Image
              src="/assets/images/icons/sofa.svg"
              alt="sofa"
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
            />
            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
          </div>
        </LinkWithLocale>
      </div>
    </div>
  );
};

export default CategoryMenu;
