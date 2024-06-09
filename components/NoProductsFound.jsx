import noProductImg from "@/public/assets/images/no-product.png";
import Image from "next/image";
const NoProductsFound = ({message}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="space-y-3 text-center w-[800px]">
        <Image src={noProductImg} alt="No product found" />
        <h2 className="text-2xl font-medium text-red-500">Oops!</h2>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};

export default NoProductsFound;
