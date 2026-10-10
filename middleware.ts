import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import {
  DESIGN_COOKIE,
  DESIGN_COOKIE_MAX_AGE,
  DESIGN_PARAM,
  isDesignId,
} from "./designs/ids";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // `?design=<id>` picks a design from a shared link: remember it, then drop the param.
  const design = request.nextUrl.searchParams.get(DESIGN_PARAM);
  if (design !== null) {
    const url = request.nextUrl.clone();
    url.searchParams.delete(DESIGN_PARAM);
    const response = NextResponse.redirect(url);
    if (isDesignId(design)) {
      response.cookies.set(DESIGN_COOKIE, design, {
        path: "/",
        maxAge: DESIGN_COOKIE_MAX_AGE,
        sameSite: "lax",
      });
    }
    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|es)/:path*"],
};
