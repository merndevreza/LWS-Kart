import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LinkWithLocale from "../LinkWithLocale";

const AccountIcon = ({dictionary}) => {
  return (
    <LinkWithLocale href="/account">
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-2xl">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="text-xs leading-3">{dictionary.account}</div>
      </div>
    </LinkWithLocale>
  );
};

export default AccountIcon;
