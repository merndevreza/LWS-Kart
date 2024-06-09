import LinkWithLocale from "../LinkWithLocale";

const SignInOut = ({ dictionary }) => {
  return (
    <>
      <LinkWithLocale className="text-gray-200 hover:text-white transition" href="/login"> 
          {dictionary.login} 
      </LinkWithLocale>
    </>
  );
};

export default SignInOut;
