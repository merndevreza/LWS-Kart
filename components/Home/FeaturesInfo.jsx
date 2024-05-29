import Image from "next/image";
import deliveryIcon from "@/public/assets/images/icons/delivery-van.svg"
import moneyBackIcon from "@/public/assets/images/icons/money-back.svg"
import serviceHoursIcon from "@/public/assets/images/icons/service-hours.svg"

const FeaturesInfo = ({dictionary}) => {
  return (
    <section className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={deliveryIcon}
            alt="Delivery"
            className="object-contain"
            width={48}
            height={48}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">{dictionary.featureTitle1}</h4>
            <p className="text-gray-500 text-sm">{dictionary.featureSubtitle1}</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={moneyBackIcon} 
            alt="Money Back Guarantee"
            className="object-contain"
            width={48}
            height={48}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">{dictionary.featureTitle2}</h4>
            <p className="text-gray-500 text-sm">{dictionary.featureSubtitle2}</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={serviceHoursIcon}
            alt="Service Hours icon"
            className="object-contain"
            width={48}
            height={48}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">{dictionary.featureTitle3}</h4>
            <p className="text-gray-500 text-sm">{dictionary.featureSubtitle3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesInfo;
