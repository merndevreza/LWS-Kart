import Image from "next/image";
import LinkWithLocale from "../LinkWithLocale";

const CategoryCard = ({ category }) => {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <Image
        src={category?.thumbnail}
        alt={category?.name}
        className="w-full"
        width={400}
        height={400}
      />
      <LinkWithLocale href={`/shop?categoryId=${category?.id}`}>
        <span className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          {category?.name}
        </span>
      </LinkWithLocale>
    </div>
  );
};

export default CategoryCard;
