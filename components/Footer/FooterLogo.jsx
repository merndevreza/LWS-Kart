import Image from "next/image";
import logo from "@/public/assets/images/logo.svg"; 
import SocialLinks from "../SocialLinks";

const FooterLogo = ({dictionary}) => {
  return (
    <div className="col-span-1 space-y-4">
      <Image src={logo} alt="logo" width={128} />
      <div className="mr-2">
        <p className="text-gray-500">
          {dictionary.tagLine}
        </p>
      </div>
      <SocialLinks/>
    </div>
  );
};

export default FooterLogo;
