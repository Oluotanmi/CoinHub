"use client"

import { cn } from "@/lib/utilis";
import { Search, X } from "lucide-react";
import { useRef, useState } from "react"
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface SearchResult {
    id: string;
    symbol: string;
    name: string;
    image: string;
    currentPrice: number;
    priceChangePercentage24h: number;
    marketCapRank: number;
    type: "coin" | "exchange" | "nft" | "defi";
};

interface SearchBarProps {
    placeholder?: string;
    className?: string;
    variant?: "default" | "compact";
    showRecentSearches?: boolean;
    autoFocus?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    onResultSelect?: (result: SearchResult) => void;
}

export function SearchBar({ 
    placeholder = "Search cryptocurrencies, NFTs, DeFi...",
    className,
    variant = "default",
    showRecentSearches = true,
    autoFocus = false,
    value,
    onChange,
    onResultSelect,
}: SearchBarProps) {
    const [query, setquery] = useState(value || "")

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={cn("relative", className)}>
            <div className="relative">
                <Search  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                <Input 
                  ref={inputRef}
                  type="text"
                  placeholder={placeholder}
                  value={query}
                  className={cn("pl-10 pr-10", variant === "compact" && "h-9")}
                />

                {
                    query && (
                        <Button
                        //   asChild
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"

                        >
                            <X className="w-4 h-4"/>
                        </Button>
                    )
                }
            </div>
        </div>
    )
}