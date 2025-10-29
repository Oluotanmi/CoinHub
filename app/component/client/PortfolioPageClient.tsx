"use client"

import { useState } from "react";
import { Header } from "../layout/Header";

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

interface MockPerformanceData {
    timestamp: number;
    totalValue: number;
    totalCost: number;
    pnl: number;
    pnlPercentage: number;
}

interface PortfolioPageClientProps {
    portfolio: MockPortfolio;
    // holdings: MockHolding[];
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

function PortfolioPageClientComponent({ portfolio }: PortfolioPageClientProps) {

  const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
       <div>
          <Header 
              variant="simplified"
              isMobileMenuOpen={sidebarOpen}
              setIsMobileMenuOpen={setSidebarOpen}
          />
       </div> 
    )
}

export default PortfolioPageClientComponent