"use client"

import { useState } from "react"
import { Header } from "../component/layout/Header"
import Sidebar from "../component/layout/Sidebar"
import { 
     Card 
    } from "../component/ui/card"
import { Button } from "../component/ui/button"
import { Badge } from "../component/ui/badge"


interface NewsArticle {
    id: string;
    title: string;
    description: string;
    content: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: {
      id: string;
      name: string;
    };
    author: string;
    category: string;
    tags: string[];
    readTime: number;
    sentiment: "positive" | "negative" | "neutral";
    views: number;
    likes: number;
    isBookmarked: boolean;
}

interface MarketSentiment {
    fearGreedIndex: number;
    sentiment: "Extreme Fear" | "Fear" | "Neutral" | "Greed" | "Extreme Greed";
    change24h: number;
  }


// Mock news data
const mockArticles: NewsArticle[] = [
    {
      id: "1",
      title: "Bitcoin Reaches New All-Time High Amid Institutional Adoption",
      description:
        "Major corporations continue to add Bitcoin to their treasury reserves as regulatory clarity improves.",
      content: "Lorem ipsum dolor sit amet...",
      url: "https://example.com/bitcoin-ath",
      urlToImage: "/api/placeholder/300/200",
      publishedAt: "2024-01-15T10:30:00Z",
      source: {
        id: "crypto-news",
        name: "Crypto News Today",
      },
      author: "John Smith",
      category: "Bitcoin",
      tags: ["Bitcoin", "ATH", "Institutional", "Adoption"],
      readTime: 3,
      sentiment: "positive",
      views: 15420,
      likes: 234,
      isBookmarked: false,
    },
    {
      id: "2",
      title: "Ethereum 2.0 Staking Rewards Reach Historic Levels",
      description:
        "The Ethereum network sees record-high staking participation as rewards increase.",
      content: "Lorem ipsum dolor sit amet...",
      url: "https://example.com/eth-staking",
      urlToImage: "/api/placeholder/300/200",
      publishedAt: "2024-01-15T08:15:00Z",
      source: {
        id: "defi-pulse",
        name: "DeFi Pulse",
      },
      author: "Sarah Johnson",
      category: "Ethereum",
      tags: ["Ethereum", "Staking", "ETH2", "Rewards"],
      readTime: 5,
      sentiment: "positive",
      views: 12890,
      likes: 189,
      isBookmarked: true,
    },
    {
      id: "3",
      title: "Regulatory Concerns Impact Altcoin Market",
      description:
        "Recent regulatory announcements cause volatility in the altcoin market.",
      content: "Lorem ipsum dolor sit amet...",
      url: "https://example.com/altcoin-regulation",
      urlToImage: "/api/placeholder/300/200",
      publishedAt: "2024-01-14T16:45:00Z",
      source: {
        id: "regulatory-watch",
        name: "Regulatory Watch",
      },
      author: "Mike Chen",
      category: "Regulation",
      tags: ["Regulation", "Altcoins", "Volatility", "Market"],
      readTime: 4,
      sentiment: "negative",
      views: 8750,
      likes: 95,
      isBookmarked: false,
    },
  ];

  const mockSentiment: MarketSentiment = {
    fearGreedIndex: 72,
    sentiment: "Greed",
    change24h: 8,
  };
  
  const categories = [
    "All",
    "Bitcoin",
    "Ethereum",
    "DeFi",
    "NFT",
    "Regulation",
    "Analysis",
    "Technology",
  ];
  const sources = [
    "All Sources",
    "Crypto News Today",
    "DeFi Pulse",
    "Regulatory Watch",
    "BlockChain Tribune",
  ];

 export default function NewsPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
    const [sentiment] = useState<MarketSentiment>(mockSentiment);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSource, setSelectedSource] = useState("All Sources");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("publishedAt");

    
 }