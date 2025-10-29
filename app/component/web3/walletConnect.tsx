"use client"

import React from "react"
import { Button } from "../ui/button"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { Badge } from "../ui/badge"
import { DropdownMenuTrigger, DropdownMenu } from "../ui/dropdown-menu"
import { Wallet } from "lucide-react";

interface WalletConnectProps {
   onConnect?: (address: string) => void;
   onDisconnect?: ()=> void;
   supportedWallets?: ("metamask" | "walletconnect" | "coinbase")[];
}

export const WalletConnect: React.FC<WalletConnectProps> = ({
    onConnect,
    onDisconnect
}) => {

    // const { address , isConnected, chain } = useAccount();
    // const { connect, connectors } = useConnect();
    // const { disconnect } = useDisconnect()

    // const handleConnect = (connector: Connector) => {
    //     connect({ connector });
    //     if(onConnect && address) {
    //         onConnect(address)
    //     }
    // }

    // if(isConnected && address) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button  variant="outline" className="gap-2">
                        <Wallet className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
            </DropdownMenu>
        )
    // }    
}