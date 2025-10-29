"use client"

import { Button } from "../ui/button"
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Bell,
    Menu,
    X,
    TrendingUp,
    Wallet,
    Settings,
    LogOut,
    Star,
    BarChart3,
    
  } from "lucide-react";
import Logo from "../common/Logo";

import {
      DropdownMenu, DropdownMenuContent 
  } from "../ui/dropdown-menu";
import { Badge } from "../ui/badge";
import { ThemeToggle } from "../common/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage} from '../ui/avatar'
import { DropdownMenuTrigger } from "../ui/dropdown-menu";

interface HeaderProps {
   variant?: "full" | "simplified";
   isMobileMenuOpen?: boolean;
   setIsMobileMenuOpen?: (open: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({
    variant = "full",
    isMobileMenuOpen = false,
    setIsMobileMenuOpen,
}) => {
    
    const pathname = usePathname();
    const router = useRouter();

    // if(variant === "simplified"){

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
           <div className="container mx-auto">
              <div className="flex h-14 items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Button
                       variant="ghost"
                       className="xl:hidden"
                       size="icon"
                       onClick={() => setIsMobileMenuOpen?.(!isMobileMenuOpen)}
                      >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                           
                        )}
                    </Button>

                    <Logo />
                </div>
         
               {/* Right Side - Mobile optimized */}
                <div className="flex items-center gap-2">
                 { true && 
                    ( <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hidden md:flex"
                    >
                        <Link
                          href="/porfolio"
                          className="flex items-center space-x-1"
                        >
                        <Wallet className="h-10 w-10" />
                        <span>Portfolio</span>
                        </Link>
                    </Button>)} 
                    {/* Always show theme toggle */}
                    <ThemeToggle />

                    {/* notiification-Only for logged in users */}
                    {true &&
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative "
                      >
                        <Bell
                          className="h-4 w-4"
                        />
                        <Badge
                          variant="destructive"
                        >
                            3
                        </Badge>
                      </Button>
                    }

                    {/* desktop:show wallet connect */}
                    <div>
                        {
                            false ?
                            (<DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="relative h-8 w-8"
                                >
                                 <Avatar className="h-8 w-8">
                                    <AvatarImage 
                                    //    src="/cendclothing.png"
                                    />
                                    <AvatarFallback>

                                    </AvatarFallback>
                                 </Avatar>
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    
                                </DropdownMenuContent>
                            </DropdownMenu>)
                            :
                            (
                                <div>
                                </div>
                            )
                        }
                    </div>
                </div>
              </div>
           </div>
        </header>
    )
 }
// }