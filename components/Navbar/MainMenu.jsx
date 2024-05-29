import LinkWithLocale from "../LinkWithLocale";

const MainMenu = ({ dictionary }) => {
  return (
    <div className="flex items-center space-x-6 capitalize">
      <LinkWithLocale href="/">
        <span className="text-gray-200 hover:text-white transition">
          {dictionary.home}
        </span>
      </LinkWithLocale>
      <LinkWithLocale href="/shop">
        <span className="text-gray-200 hover:text-white transition">
          {dictionary.shop}
        </span>
      </LinkWithLocale>
      <LinkWithLocale href="#">
        <span className="text-gray-200 hover:text-white transition">
          {dictionary.aboutUs}
        </span>
      </LinkWithLocale>
      <LinkWithLocale href="#">
        <span className="text-gray-200 hover:text-white transition">
          {dictionary.contactUs}
        </span>
      </LinkWithLocale>
    </div>
  );
};

export default MainMenu;
