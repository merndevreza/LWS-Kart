import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "bn"];
const defaultLocale = "en";

const getLocale = (request) => {
  const acceptedLanguage = request.headers.get("accept-language");
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
};

export default function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.search;

  // Check if the URL already contains a valid locale
  const localeInPath = locales.find((locale) => pathname.startsWith(`/${locale}`));

  if (!localeInPath) {
    const locale = getLocale(request);
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    redirectUrl.search = searchParams; // Ensure query params are included
    return NextResponse.redirect(redirectUrl);
  }

  // If the URL already contains a locale, do nothing
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|assets|.*\\..*|_next).*)",
  ],
};
