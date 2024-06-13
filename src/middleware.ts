import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let locales: string[] = ["en", "en-US", "nl-NL", "nl"];
const defaultLocale: string = "en-US";

function getLocale(req: NextRequest): string {
  const negotiatorHeaders = {
    "accept-language": req.headers.get("accept-language") || "",
  };
  const negotiator = new Negotiator({ headers: negotiatorHeaders });
  const availableLanguages = negotiator.languages(locales);
  return match(availableLanguages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
  ],
};
