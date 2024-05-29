"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkWithLocale = ({ children, href }) => {
  const pathname = usePathname();
  let locale = "";

  if (pathname.includes("/bn") || pathname.includes("/bn/")) {
    locale = "/bn";
  } else {
    locale = "/en";
  } 
  
  return <Link href={locale + href}>{children}</Link>;
};

export default LinkWithLocale;
