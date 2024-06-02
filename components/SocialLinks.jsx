import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faInstagramSquare,
  faFacebookSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex space-x-5">
      <Link href="https://www.facebook.com" className="text-gray-400 hover:text-gray-500">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </Link>
      <Link href="https://www.instagram.com" className="text-gray-400 hover:text-gray-500">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </Link>
      <Link href="https://x.com" className="text-gray-400 hover:text-gray-500">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </Link>
      <Link href="https://github.com" className="text-gray-400 hover:text-gray-500">
        <FontAwesomeIcon icon={faGithubSquare} />
      </Link>
    </div>
  );
};

export default SocialLinks;
