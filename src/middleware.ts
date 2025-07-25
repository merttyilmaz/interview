import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/checkout")) {
    const authCookie = request.cookies.get("auth");

    if (!authCookie || authCookie.value !== "true") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*"],
};
