import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF, 
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

const SocialShare = () => {
   return (
      <div className="flex gap-3 mt-4">
        <Link
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
        <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
        <FontAwesomeIcon icon={faTwitter} /> 
        </Link>
        <Link
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
        <FontAwesomeIcon icon={faInstagram} />  
        </Link>
      </div>
   );
};

export default SocialShare;