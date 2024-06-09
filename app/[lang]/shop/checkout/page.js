import BreadCrumb from "@/components/BreadCrumb";
import { getDictionary } from "../../dictionary/dictionary";
import CheckoutWrapper from "@/components/Checkout/CheckoutWrapper";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const CheckoutPage = async({params:{lang}}) => {
  const dictionary = await getDictionary(lang);
  const session=await auth();
  if (!session?.user) {
    redirect("/login")
  }
  return (
    <main>
      <BreadCrumb pageTitle="Checkout" />
      <CheckoutWrapper dictionary={dictionary}/>
    </main>
  );
};

export default CheckoutPage;
