import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/assets/images/banner-bg.jpg";
import LinkWithLocale from "../LinkWithLocale";

const Hero = ({ dictionary }) => {
  return (
    <section className="relative w-full min-h-[550px]">
      <Image
        className="absolute left-0 top-0 w-full h-full object-cover"
        src={heroBg}
        alt="LWSKart Hero Image"
      />
      <div className="absolute w-full h-full left-0 top-0 flex items-center">
        <div className="container">
          <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize max-w-2xl">
            {dictionary.heroTitle}
          </h1>
          <p className="max-w-2xl">{dictionary.heroSubtitle}</p>
          <div className="mt-12">
            <LinkWithLocale href="#">
              <span
                className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                  rounded-md hover:bg-transparent hover:text-primary"
              >
                {" "}
                {dictionary.shopNow}
              </span>
            </LinkWithLocale>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
