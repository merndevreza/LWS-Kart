"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LinkWithLocale from "../LinkWithLocale";
import useAuth from "@/app/hooks/useAuth";
import Image from "next/image";

const AccountIcon = ({ dictionary }) => {
  const { userInfo } = useAuth();
  return (
    <LinkWithLocale href="/account">
      <div className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-2xl">
          {userInfo ? (
            <Image
              src={userInfo.image}
              alt={userInfo.name}
              width={24}
              height={24}
            />
          ) : (
            <FontAwesomeIcon icon={faUser} />
          )}
        </div>
        <div className="text-xs leading-3">{dictionary.account}</div>
      </div>
    </LinkWithLocale>
  );
};

export default AccountIcon;
