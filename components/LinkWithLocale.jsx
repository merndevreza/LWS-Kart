"use client";
import useCurrentLocale from "@/app/hooks/useCurrentLocale";
import Link from "next/link"; 

const LinkWithLocale = ({ children, href,className }) => {
  const locale=useCurrentLocale()

  return <Link className={className} href={locale + href}>{children}</Link>;
};

export default LinkWithLocale;
