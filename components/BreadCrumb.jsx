import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkWithLocale from "./LinkWithLocale";

const BreadCrumb = ({ pageTitle }) => {
  return (
    <div className="container py-4 flex items-center gap-3">
      <LinkWithLocale className="text-primary text-base" href="/">
      <FontAwesomeIcon icon={faHouse} />
      </LinkWithLocale>
      <span className="text-sm text-gray-400">
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      <p className="text-gray-600 font-medium">{pageTitle}</p>
    </div>
  );
};

export default BreadCrumb;
