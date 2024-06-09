import LinkWithLocale from "../LinkWithLocale";

const MainMenu = ({ dictionary }) => {
  return (
    <div className="flex items-center space-x-6 capitalize">
      <LinkWithLocale
        className="text-gray-200 hover:text-white transition"
        href="/"
      >
        <span>{dictionary.home}</span>
      </LinkWithLocale>
      <LinkWithLocale
        className="text-gray-200 hover:text-white transition"
        href="/shop"
      >
        {dictionary.shop}
      </LinkWithLocale>
      <LinkWithLocale
        className="text-gray-200 hover:text-white transition"
        href="#"
      >
        {dictionary.aboutUs}
      </LinkWithLocale>
      <LinkWithLocale
        className="text-gray-200 hover:text-white transition"
        href="#"
      >
        {dictionary.contactUs}
      </LinkWithLocale>
    </div>
  );
};

export default MainMenu;
