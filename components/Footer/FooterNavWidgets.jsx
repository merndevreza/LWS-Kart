import LinkWithLocale from "../LinkWithLocale";

const FooterNavWidgets = ({ dictionary }) => {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-8">
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {dictionary.solutions}
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.marketing}
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.analitycs}
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.commerce}
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.insights}
            </LinkWithLocale>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {dictionary.support}
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.pricing}
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#"> 
                {dictionary.guides} 
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#"> 
                {dictionary.apiStatus} 
            </LinkWithLocale>
          </div>
        </div>
      </div> 
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {dictionary.solutions}
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.marketing}
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.analitycs}
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.commerce}
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.insights}
            </LinkWithLocale>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {dictionary.support}
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#">
            {dictionary.pricing}
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#"> 
                {dictionary.guides} 
            </LinkWithLocale>
            <LinkWithLocale className="text-base text-gray-500 hover:text-gray-900 block" href="#"> 
                {dictionary.apiStatus} 
            </LinkWithLocale>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default FooterNavWidgets;
