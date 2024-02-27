"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";

const projectId = process.env.NEXT_PUBLIC_WC_ID || "";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId });

export function Web3ModalProvider({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
