import LinkWithLocale from "../LinkWithLocale";

const FooterNavWidgets = ({ dictionary }) => {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {dictionary.solutions}
          </h3>
          <div className="mt-4 space-y-4">
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.marketing}
              </span>
            </LinkWithLocale>
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.analitycs}
              </span>
            </LinkWithLocale>
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.commerce}
              </span>
            </LinkWithLocale>
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.insights}
              </span>
            </LinkWithLocale>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {dictionary.support}
          </h3>
          <div className="mt-4 space-y-4">
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.pricing}
              </span>
            </LinkWithLocale>
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.guides}
              </span>
            </LinkWithLocale>
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.apiStatus}
              </span>
            </LinkWithLocale>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {dictionary.solutions}
          </h3>
          <div className="mt-4 space-y-4">
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.marketing}
              </span>
            </LinkWithLocale>
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.analitycs}
              </span>
            </LinkWithLocale>
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.commerce}
              </span>
            </LinkWithLocale>
            <LinkWithLocale href="#">
              <span className="text-base text-gray-500 hover:text-gray-900 block">
                {dictionary.insights}
              </span>
            </LinkWithLocale>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          {dictionary.support}
        </h3>
        <div className="mt-4 space-y-4">
          <LinkWithLocale href="#">
            <span className="text-base text-gray-500 hover:text-gray-900 block">
              {dictionary.pricing}
            </span>
          </LinkWithLocale>
          <LinkWithLocale href="#">
            <span className="text-base text-gray-500 hover:text-gray-900 block">
              {dictionary.guides}
            </span>
          </LinkWithLocale>
          <LinkWithLocale href="#">
            <span className="text-base text-gray-500 hover:text-gray-900 block">
              {dictionary.apiStatus}
            </span>
          </LinkWithLocale>
        </div>
      </div>
    </div>
  );
};

export default FooterNavWidgets;
