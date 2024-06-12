import BreadCrumb from "@/components/BreadCrumb";
import { getDictionary } from "../dictionary/dictionary";
import { auth } from "@/auth"; 
import AccountWrapper from "@/components/Accounts/AccountWrapper";

const AccountPage = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);
  const session = await auth();
  
  return (
    <main>
      <BreadCrumb pageTitle={dictionary.account} />
      <AccountWrapper session={session} dictionary={dictionary}/>
    </main>
  );
};

export default AccountPage;
