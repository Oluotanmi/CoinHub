"use client"

import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./theme-providers";
import { queryObjects } from "v8";

const createQueryClient = () => 
   new QueryClient({
     defaultOptions: {
        queries: {
          staleTime: 5 * 60 * 1000, //5 min
          gcTime: 10 * 60 * 1000,
          retry: 3,
          retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        },
        mutations: {
            retry: 1,
          },
     }
   });

interface ProviderProps {
    children: React.ReactNode
}

export function Providers( {children} : ProviderProps) {

    const queryClient = useMemo(() => createQueryClient(), [])

  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider
           attribute="class"
        >
            {children}
        </ThemeProvider>
    </QueryClientProvider>
  )
}