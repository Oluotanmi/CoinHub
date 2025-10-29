"use clients"

import React from "react";
import {Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenuTrigger,DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { MoreHorizontal, Star, TrendingUp } from "lucide-react";

interface TrendingCoin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    currentPrice: number;
    priceChange24h: number;
    priceChangePercentage24h: number;
    marketCap: number;
    volume24h: number;
    sparkline: number[];
    rank: number;
  }

  interface TrendingCoinsProps {
    coins: TrendingCoin[];
    isLoading: boolean;
    onAddToWatchlist?: (coinId: String) => void;
    onAddToPortfolio?: (coinId: String) => void;
  }

export const TrendingCoins: React.FC<TrendingCoinsProps> = ({
        coins,
        isLoading = false,
        onAddToWatchlist,
        onAddToPortfolio
     }) => {
//    return(
//     <svg>

//     </svg>
//    )


   return(
     <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
                <span>🔥</span>
                Trending
            </CardTitle>
            <Button variant="ghost" size="sm" asChild>
                <Link
                   href="/"
                   className="text-coingecko-green-500 hover:text-coingecko-green-600"
                >
                   View All
                </Link>
            </Button>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
               {
                coins.slice(0,5).map((coin, index) => (
                    <div
                        key={coin.id}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      {/* Rank */}
                        <div className="w-6 text-center">
                            <span className="text-sm font-medium text-muted-foreground">
                            {index + 1}
                            </span>
                        </div>
                       
                        {/* Coin Info */}
                        <div className="flex items-center space-x-3 min-w-0 flex-1">
                        <div className="relative w-8 h-8 flex-shrink-0">
                            <Image
                                src="/cendclothing.png"
                                alt={coin.name}
                                fill
                                className="rounded-full object-cover"
                                sizes="32px"
                             />
                        </div>
                        <div className="min-w-0 flex-1">
                        <Link
                            href={`/coin/${coin.id}`}
                            className="font-medium hover:text-primary transition-colors truncate block"
                        >
                            {coin.name}
                        </Link>
                        <div className="flex items-center space-x-1">
                            <span className="text-xs text-muted-foreground uppercase">
                            {coin.symbol}
                            </span>
                            <span className="text-xs text-muted-foreground">
                            #{coin.rank}
                            </span>
                        </div>
                       </div>
                     
                     </div>
                        
                    </div>
                ))
               }
            </div>

            {/* Actions */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="w-8 h-8" >
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                        <Star />
                        Add to Watchlist
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Add to Portfolio
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/">View Details</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {coins.length > 5 && (
                <div className="mt-4 pt-4 border-t">
                  <Button  variant="outline" className="w-full" asChildn>
                    <Link href="/market/trending">View All Trfending Coins</Link> 
                  </Button>
                </div>
            )}
        </CardContent>
     </Card>
   )
}