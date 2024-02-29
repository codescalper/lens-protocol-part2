"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";

const projectId = process.env.NEXT_PUBLIC_WC_ID || "";

const metadata = {
  name: "Lens Protocol Assignment Part2",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: [
    "https://avatars.githubusercontent.com/u/92156721?s=400&u=f394e1b940f43ccca1c407c903df9c36f5ebc916&v=4",
  ],
};

const chains = [polygon, polygonMumbai];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId });

export function Web3ModalProvider({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
