import BreadCrumb from "@/components/BreadCrumb";
import { getDictionary } from "../../dictionary/dictionary";
import CheckoutWrapper from "@/components/Checkout/CheckoutWrapper";

const CheckoutPage = async({params:{lang}}) => {
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <BreadCrumb pageTitle="Checkout" />
      <CheckoutWrapper dictionary={dictionary}/>
    </main>
  );
};

export default CheckoutPage;
