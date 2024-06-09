import LoginForm from "@/components/Auth/LoginForm";
import SocialLogin from "@/components/Auth/SocialLogin";
import { getDictionary } from "../../dictionary/dictionary";
import LinkWithLocale from "@/components/LinkWithLocale";

export default async function LoginPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">
          {dictionary.login}
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          {dictionary.welcomeBackCustomer}
        </p>

        <LoginForm dictionary={dictionary} />
        <SocialLogin title={dictionary.orLoginWith} />

        <p className="mt-4 text-center text-gray-600">
          {dictionary.doNotHaveAccount}
          <LinkWithLocale className="text-primary" href="/register">
            {dictionary.registerNow}
          </LinkWithLocale>
        </p>
      </div>
    </div>
  );
}
