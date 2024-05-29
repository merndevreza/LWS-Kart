import Image from "next/image";
import SectionTitle from "../SectionTitle";
import LinkWithLocale from "../LinkWithLocale";

const Categories = ({ dictionary }) => {
  return (
    <section className="container py-16">
      <SectionTitle title={dictionary.categorySectionTitle} />
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/category-1.jpg"
            alt="category 1"
            className="w-full"
            width={400}
            height={400}
          />
          <LinkWithLocale href="#">
            <span className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
              Bedroom
            </span>
          </LinkWithLocale>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/category-2.jpg"
            alt="category 1"
            className="w-full"
            width={400}
            height={400}
          />
          <LinkWithLocale href="#">
            <span className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
              Bedroom
            </span>
          </LinkWithLocale>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/category-3.jpg"
            alt="category 1"
            className="w-full"
            width={400}
            height={400}
          />
          <LinkWithLocale href="#">
            <span className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
              Bedroom
            </span>
          </LinkWithLocale>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/category-4.jpg"
            alt="category 1"
            className="w-full"
            width={400}
            height={400}
          />
          <LinkWithLocale href="#">
            <span className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
              Bedroom
            </span>
          </LinkWithLocale>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/category-5.jpg"
            alt="category 1"
            className="w-full"
            width={400}
            height={400}
          />
          <LinkWithLocale href="#">
            <span className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
              Bedroom
            </span>
          </LinkWithLocale>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/category-6.jpg"
            alt="category 1"
            className="w-full"
            width={400}
            height={400}
          />
          <LinkWithLocale href="#">
            <span className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
              Bedroom
            </span>
          </LinkWithLocale>
        </div>
      </div>
    </section>
  );
};

export default Categories;
