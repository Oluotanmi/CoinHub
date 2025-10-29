"use client"

import { useEffect, useState } from "react";
import { Header } from "../component/layout/Header"
import Sidebar from "../component/layout/Sidebar";
import { Card, CardContent } from "../component/ui/card";
import { LoadingSpinner } from "../component/common/LoadingSpinner";
import {
    DollarSign,
    Percent,
    Coins,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Users,
    Lock,
 } from "lucide-react";
import { SearchBar } from "../component/common/SearchBar";

interface DeFiProtocol {
    id: string,
    name: string;
    symbol: string;
    logo: string;
    category: string;
    tvl: number;
    tvlChange24h: number;
    apy: number;
    users: number;
    description: string;
    chains: string[];
    website: string;
    risks: string[];
}

// Mock DeFi data
const mockProtocols: DeFiProtocol[] = [
    {
      id: "aave",
      name: "Aave",
      symbol: "AAVE",
      logo: "/api/placeholder/32/32",
      category: "Lending",
      tvl: 6800000000,
      tvlChange24h: 2.5,
      apy: 4.2,
      users: 145000,
      description: "Decentralized lending and borrowing protocol",
      chains: ["Ethereum", "Polygon", "Avalanche"],
      website: "https://aave.com",
      risks: ["Smart Contract Risk", "Liquidation Risk"],
    },
    {
      id: "uniswap",
      name: "Uniswap V3",
      symbol: "UNI",
      logo: "/api/placeholder/32/32",
      category: "DEX",
      tvl: 3900000000,
      tvlChange24h: -1.2,
      apy: 15.8,
      users: 89000,
      description: "Decentralized exchange with concentrated liquidity",
      chains: ["Ethereum", "Polygon", "Arbitrum"],
      website: "https://uniswap.org",
      risks: ["Impermanent Loss", "Smart Contract Risk"],
    },
    {
      id: "compound",
      name: "Compound",
      symbol: "COMP",
      logo: "/api/placeholder/32/32",
      category: "Lending",
      tvl: 2100000000,
      tvlChange24h: 0.8,
      apy: 3.7,
      users: 67000,
      description: "Algorithmic money markets protocol",
      chains: ["Ethereum"],
      website: "https://compound.finance",
      risks: ["Smart Contract Risk", "Governance Risk"],
    },
  ];

  const categories = [
  "All",
  "Lending",
  "DEX",
  "Yield Farming",
  "Derivatives",
  "Insurance", 
 ];

export default function DeFiPag() {
  const [protocols, setProtocols] = useState<DeFiProtocol[]>([]);
  const [filteredProtocols, setFilteredProtocols] = useState<DeFiProtocol[]>(
    []
  );
    
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
        setProtocols(mockProtocols);
        setFilteredProtocols(mockProtocols);
        setIsLoading(false)
    }, 1000)
  },[]);
  
  useEffect(() => {
    let filtered = protocols;
  })

  if(isLoading){
    return (
        <div className="min-h-screen bg-background">
          <Header
             variant="simplified"
             isMobileMenuOpen={sidebarOpen}
             setIsMobileMenuOpen={setSidebarOpen}
           />
         <div className="container mx-auto px-4">
          <div className="w-full max-w-[1536px] mx-auto flex">
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            <main className="flex-1 p-5">
              <div className="flex items-center justify-center min-h-[400px]">
                <LoadingSpinner size="lg" />
              </div>
            </main>
          </div>
         </div>
        </div>
    )
  };

    return (
        <div className="min-h-screen bg-background">
          <Header
              variant="simplified"
              isMobileMenuOpen={sidebarOpen}
              setIsMobileMenuOpen={setSidebarOpen}
          />
          <div>
             <div>
                <Sidebar  isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <main className="flex-1 p-5">
                   <div>
                       {/* Header */}
                      <div className="space-y-4">
                       <div className="flex items-center justify-between">
                        <div>
                         <h1 className="text-4xl font-bold">DeFi Protocols</h1>
                          <p className="text-muted-foreground">
                            Discover and analyze decentralized finance protocols
                          </p>
                       </div>
                     </div>
                     
                     {/* Market Overview */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                       <Card>
                          <CardContent>
                             <div>
                                <DollarSign />
                                <div>
                                 <p className="text-sm text-muted-foreground">
                                   Total TVL
                                 </p>
                                 <p className="text-2xl font-bold">
                                   {/* {formatCurrency(totalTVL)} */}
                                 </p>
                               </div>
                             </div>
                          </CardContent>
                       </Card>
                     </div>

                     <Card>
                      <CardContent className="p-6">
                      <div className="flex items-center space-x-2">
                        {/* <Activity className="h-6 w-6 text-coingecko-green-500" /> */}
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Active Protocols
                          </p>
                          <p className="text-2xl font-bold">
                            {/* {protocols.length} */}
                          </p>
                        </div>
                      </div>
                      </CardContent>
                    </Card>

                    <Card>
                     <CardContent className="p-6">
                      <div className="flex items-center space-x-2">
                        <Percent className="h-6 w-6 text-purple-500" />
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Avg APY
                          </p>
                          {/* <p className="text-2xl font-bold">
                            {(
                              protocols.reduce((sum, p) => sum + p.apy, 0) /
                              protocols.length
                            ).toFixed(1)}
                            %
                          </p> */}
                        </div>
                      </div>
                      </CardContent>
                    </Card>
                    
                    {/* Filters and Search */}
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                               <SearchBar 
                                 placeholder="Search protocols..."                              
                               />
                            </div>
                            <div className="flex gap-2">
                               <select
                                  className="px-3 py-2 border border-border rounded-md bg-background"                               
                               >
                                   <option value="tvl">Sort by TVL</option>
                                   <option value="apy">Sort by APY</option>
                                   <option value="users">Sort by Users</option>
                               </select>
                            </div>
                        </div>



                    </div>

                   {/* Protocols Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {
                        filteredProtocols.map((protocol) => (
                            <Card>
                                
                            </Card>
                        ))
                      }
                    </div>

                    </div>

                    {filteredProtocols.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">
                               No protocols found matching your criteria.
                            </p>
                        </div>
                    )}
                   </div>
                </main>
             </div>
          </div>
        </div>
    )
}