import Image from "next/image";
import logo from "@/public/assets/images/logo.svg"; 
import SocialLinks from "../SocialLinks";

const FooterLogo = ({dictionary}) => {
  return (
    <div className="col-span-1 space-y-4 mr-2">
      <Image src={logo} alt="logo" width={400}/>
      <div className="mr-2">
        <p className="text-gray-500 max-w-[300px]">
          {dictionary.tagLine}
        </p>
      </div>
      <SocialLinks/>
    </div>
  );
};

export default FooterLogo;
