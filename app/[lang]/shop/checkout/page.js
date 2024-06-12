import BreadCrumb from "@/components/BreadCrumb";
import { getDictionary } from "../../dictionary/dictionary";
import CheckoutWrapper from "@/components/Checkout/CheckoutWrapper";
import { auth } from "@/auth"; 

const CheckoutPage = async({params:{lang}}) => {
  const dictionary = await getDictionary(lang);
  const session=await auth(); 
  return (
    <main>
      <BreadCrumb pageTitle="Checkout" />
      <CheckoutWrapper session={session} dictionary={dictionary}/>
    </main>
  );
};

export default CheckoutPage;
