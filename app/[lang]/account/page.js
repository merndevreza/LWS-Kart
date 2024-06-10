import BreadCrumb from "@/components/BreadCrumb";
import { getDictionary } from "../dictionary/dictionary";
import ProfileWidget from "@/components/Accounts/ProfileWidget";
import ShippingWidget from "@/components/Accounts/ShippingWidget";
import BillingWidget from "@/components/Accounts/BillingWidget";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const AccountPage = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  const session=await auth(); 
  if (!session?.user) {
   redirect("/login")
 }
 console.log("Account page", session?.user);
  return (
    <main>
      <BreadCrumb pageTitle={dictionary.account} />
      <div className="container  items-start gap-6 pt-4 pb-16">
        <div className="grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <ProfileWidget dictionary={dictionary} />
          <ShippingWidget dictionary={dictionary} />
          <BillingWidget dictionary={dictionary} />
        </div>
      </div>
    </main>
  );
};

export default AccountPage;
