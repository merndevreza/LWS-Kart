"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";

const SocialShare = ({ productId }) => {
  return (
    <div className="flex gap-3 mt-4">
      <FacebookShareButton
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/shop/${productId}`}
      >
        <span className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
      </FacebookShareButton>
      <TwitterShareButton
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/shop/${productId}`}
      >
        <span className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </TwitterShareButton>
      <LinkedinShareButton
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/shop/${productId}`}
      >
        <span className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </span>
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
