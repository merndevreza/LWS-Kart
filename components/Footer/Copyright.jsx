import Image from "next/image";
import paymentsImg from "@/public/assets/images/methods.png"

const Copyright = ({dictionary}) => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; LWSKart - {dictionary.allRightsReserved}</p>
        <div>
          <Image src={paymentsImg} alt="methods" className="h-5" width={333} height={28} />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
