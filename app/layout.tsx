import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./component/providers/providers";
import { RouteGuard } from "./component/common/RouteGuard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title:
  " Advanced Cryptocurrency Analytics & Portfolio Management",
  description:
    "The most comprehensive cryptocurrency platform with real-time market data, portfolio management, DeFi integration, and educational content. Track 10,000+ cryptocurrencies with advanced analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <Providers>       
           <RouteGuard>{children}</RouteGuard>
         </Providers>
      </body>
    </html>
  );
}
