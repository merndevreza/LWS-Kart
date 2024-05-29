import Image from "next/image";
import LinkWithLocale from "../LinkWithLocale";

const CTA = () => {
  return (
    <section className="container pb-16">
      <LinkWithLocale href="#">
        <Image
          src="/assets/images/offer.jpg"
          alt="ads"
          className="w-full"
          width={1920}
          height={480}
        />
      </LinkWithLocale>
    </section>
  );
};

export default CTA;
