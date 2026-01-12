"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";


interface WithAuthOptions {
    redirectTo?: string;
    requireAuth?: boolean;
    redirectIfAuthenticated?: boolean;
  }

// export function withAuth<P extends object> (
//     WrappedComponent: React.ComponentType<P>,
//     options: WithAuthOptions = {}
// ) {
//     const {
//         redirectTo = "/login",
//         requireAuth = true,
//         redirectIfAuthenticated = false,
//     }
// }