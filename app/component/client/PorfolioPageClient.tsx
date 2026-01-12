"use client";

import { useState } from "react";
import { Header } from "../layout/Header";
import Sidebar from "../layout/Sidebar";

import {
    Plus,
    Settings,
    Download,
    TrendingUp,
    TrendingDown,
  } from "lucide-react";

  interface MockPortfolio {
    id: string;
    name: string;
    totalValue: number;
    totalCost: number;
    totalPnL: number;
    totalPnLPercentage: number;
    dayChange: number;
    dayChangePercentage: number;
    weekChange: number;
    weekChangePercentage: number;
    monthChange: number;
    monthChangePercentage: number;
    allTimeHigh: number;
    allTimeLow: number;
    volatility: number;
    sharpeRatio: number;
  }
  
  interface MockHolding {
    coinId: string;
    symbol: string;
    name: string;
    image: string;
    amount: number;
    averagePrice: number;
    currentPrice: number;
    value: number;
    allocation: number;
    priceChange24h: number;
    priceChangePercentage24h: number;
  }

  interface MockPerformanceData {
    timestamp: number;
    totalValue: number;
    totalCost: number;
    pnl: number;
    pnlPercentage: number;
  }

  interface PortfolioPageClientProps {
    portfolio: MockPortfolio;
    holdings: MockHolding[];
    performanceData: MockPerformanceData[];
    metrics: {
      totalValue: number;
      totalCost: number;
      totalPnL: number;
      totalPnLPercentage: number;
      dayChange: number;
      dayChangePercentage: number;
      weekChange: number;
      weekChangePercentage: number;
      monthChange: number;
      monthChangePercentage: number;
      allTimeHigh: number;
      allTimeLow: number;
      volatility: number;
      sharpeRatio: number;
    };
  }

function PorfolioPageClientComponent( {portfolio}: PortfolioPageClientProps ) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const formatValue = (value: number) => {
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return `$${value.toFixed(2)}`;
  };

  const isPositive = portfolio.totalPnL >= 0;

  const handleAddHolding = (data: Record<string, unknown>) => {
    console.log("Adding holding:", data);
    // In a real app, this would update the portfolio
  };

   return (
    <div className="min-h-screen bg-background">
        <Header
        variant="simplified"
        isMobileMenuOpen={sidebarOpen}
        setIsMobileMenuOpen={setSidebarOpen}
        /> 

        <div className="container mx-auto px-4">
            <div className="w-full max-w-[1536px] mx-auto flex">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <main className="flex-1 p-5">
                    <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                     <div>
                        <h1 className="text-3xl font-bold">{portfolio.name}</h1>
                        <div className="flex items-center space-x-4 mt-2">
                            <span className="text-3xl font-bold">
                            {formatValue(portfolio.totalValue)}
                            </span>
                            <div
                            className={`flex items-center space-x-1 ${
                                isPositive ? "text-green-600" : "text-red-600"
                            }`}
                            >
                            {isPositive ? (
                                <TrendingUp className="w-5 h-5" />
                            ) : (
                                <TrendingDown className="w-5 h-5" />
                            )}
                            <span className="font-semibold text-lg">
                                {isPositive ? "+" : ""}
                                {formatValue(portfolio.totalPnL)}
                            </span>
                            <span className="text-sm">
                                ({isPositive ? "+" : ""}
                                {portfolio.totalPnLPercentage.toFixed(2)}%)
                            </span>
                            </div>
                        </div>
                            <p className="text-muted-foreground mt-1">
                                Total invested: {formatValue(portfolio.totalCost)}
                            </p>
                        </div>
                     </div>
                    </div>
              </main>
            </div>
        </div>
    </div>  
   );
}

// export const PortfolioPageClient = withAuthRequired(
//   PortfolioPageClientComponent
// )