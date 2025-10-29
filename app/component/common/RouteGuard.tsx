"use client"

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { isProtectedRoute, isAuthRoute } from "../../../lib/auth-utils";
import React, { useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner";


interface RouteGuardProps {
    children: React.ReactNode
}

export function RouteGuard( {children} : RouteGuardProps) {

    // const { isAuthenticated, isLoading } = useAuth();
    
    // const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {

        const currentPath = pathname;

       
        
    })

    if(isProtectedRoute(pathname)) {
        return (
         <div className="flex items-center justify-center min-h-screen">
             <LoadingSpinner size="lg"/>
         </div>
        )
     }

    return <>{children}</>

}