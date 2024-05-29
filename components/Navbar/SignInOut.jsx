import LinkWithLocale from "../LinkWithLocale";

const SignInOut = ({ dictionary }) => {
  return (
    <>
      <LinkWithLocale href="/login">
        <span className="text-gray-200 hover:text-white transition">
          {dictionary.login}
        </span>
      </LinkWithLocale>
    </>
  );
};

export default SignInOut;
