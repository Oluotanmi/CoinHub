// import { User } from "@/types/auth"

//cookies names
export const Auth_COOKIES = {
    TOKEN: "auth-token",
    SESSION: "session-token",
    USER_SESSION: "user-session",
    REFRESH_TOKEN: "refresh-token"
};



// Route protection utilities
export const ROUTE_CONFIG = {

  // Routes that authenticated users shouldn't access  
  AUTH_ONLY: ["/login", "/register"],


  // Routes that require authentication
  PROTECTED: [
    "portfolio",
    "/transactions",
    "/watchlist",
    "/alerts",
    "/settings",
    "/notifications",
  ]

}

export function isProtectedRoute(pathname: string): boolean {
    return ROUTE_CONFIG.PROTECTED.some (
        (route) => pathname === route || pathname.startsWith(route + "/")
    );
}

// Helper to check if a route is auth-only (login/register)
export function isAuthRoute(pathname: string): boolean {
    return ROUTE_CONFIG.AUTH_ONLY.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );
  }