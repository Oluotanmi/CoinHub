"use client"

import { cn } from "../../../lib/utilis"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl" ;
  variant?: "default" | "dots" | "pulse" | "bars";
  className?: string;
  text?: string;
}

export function LoadingSpinner ({
   size = "md",
   variant = "default",
   className,
   text
}: LoadingSpinnerProps) {
   const sizeClasses = {
     sm: "w-4 h-4",
     md: "w-6 h-6",
     lg: "w-8 h-8",
     xl: "w-12 h-12",
   };

   const spinnerSize = sizeClasses[size];

   if ( variant === "dots" ) {
    <div
    className={cn("flex items-center justify-center space-x-1", className)}
  >
    <div
      className={cn(
        "rounded-full bg-primary animate-bounce",
        size === "sm" ? "w-2 h-2" : size === "lg" ? "w-4 h-4" : "w-3 h-3"
      )}
      style={{ animationDelay: "0ms" }}
    />
    <div
      className={cn(
        "rounded-full bg-primary animate-bounce",
        size === "sm" ? "w-2 h-2" : size === "lg" ? "w-4 h-4" : "w-3 h-3"
      )}
      style={{ animationDelay: "150ms" }}
    />
    <div
      className={cn(
        "rounded-full bg-primary animate-bounce",
        size === "sm" ? "w-2 h-2" : size === "lg" ? "w-4 h-4" : "w-3 h-3"
      )}
      style={{ animationDelay: "300ms" }}
    />
    {text && (
      <span className="ml-2 text-sm text-muted-foreground">{text}</span>
    )}
  </div>
   }

   // Default spinner
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-primary border-t-transparent",
          spinnerSize
        )}
      />
      {text && (
        <span className="ml-2 text-sm text-muted-foreground">{text}</span>
      )}
    </div>
  );

}