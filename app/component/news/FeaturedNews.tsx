"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface NewsArticle {
    id: string;
    title: string;
    summary: string;
    content: string;
    author: string;
    publishedAt: string;
    imageUrl: string;
    sourceUrl: string;
    source: string;
    category:
      | "bitcoin"
      | "ethereum"
      | "defi"
      | "nft"
      | "regulation"
      | "market"
      | "technology";
    readTime: number;
    tags: string[];
  }

interface FeaturedNewsProps {
  articles: NewsArticle[];
  isLoading?: boolean;
} 

export const FeaturedNews: React.FC<FeaturedNewsProps> = ({
    articles,
    isLoading = false,
}) => {

  if(isLoading){
    return (
       <Card>
         <CardHeader>
             <CardTitle>Latest News</CardTitle>
         </CardHeader>
       </Card>
    )
  }

  if ( !articles || articles.length === 0 ) {
      return (
        <Card>
            <CardHeader>
                <CardTitle>Latest News</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No news articles available</p>
              </div>
            </CardContent>
        </Card>
      )
  }

  const featuredArticles = articles[0];
  const otherArticles = articles.slice(1, 4);

  return(
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle  className="flex items-center gap-2">
               <span>📰</span>
               Latest Crypto News
            </CardTitle>
            <Button variant="ghost" size="sm" asChild>
                <Link
                  href="/news"
                  className="text-coingecko-green-500 hover:text-coingecko-green-600"
                > 
                  View All
                </Link>
            </Button>
        </CardHeader>
    </Card>
  )
}