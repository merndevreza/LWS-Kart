import RegistrationForm from "@/components/Auth/RegistrationForm";
import SocialLogin from "@/components/Auth/SocialLogin";
import { getDictionary } from "../../dictionary/dictionary";
import LinkWithLocale from "@/components/LinkWithLocale";

const RegistrationPage = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);

  return (
    <main className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">
          {dictionary.createAnAccount}
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          {dictionary.registerForNewCustomer}
        </p>

        <RegistrationForm dictionary={dictionary} />
        <SocialLogin title={dictionary.orSignupWith} />

        <p className="mt-4 text-center text-gray-600">
          {dictionary.alreadyHaveAccount}
          <LinkWithLocale href="/login">
            <span className="text-primary">{dictionary.loginNow}</span>
          </LinkWithLocale>
        </p>
      </div>
    </main>
  );
};

export default RegistrationPage;
