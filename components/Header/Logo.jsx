import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import LinkWithLocale from "../LinkWithLocale";

const Logo = () => {
  return (
    <LinkWithLocale href="/">
      <Image src={logo} alt="LWSKart Logo" className="w-32" width={128} />
    </LinkWithLocale>
  );
};

export default Logo;
