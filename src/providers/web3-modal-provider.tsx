import type { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import type { State } from 'wagmi';
import { WagmiProvider } from 'wagmi';

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { mainnet, sepolia } from 'wagmi/chains';

// Get projectId at https://cloud.walletconnect.com
export const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

if (!projectId) throw new Error('WalletConnect Project ID is not defined');

const metadata = {
  description: 'Web3Modal Example',
  // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],

  name: 'Web3Modal',
  url: 'https://web3modal.com',
};

// Create wagmiConfig
const chains = [mainnet, sepolia] as const;

const config = defaultWagmiConfig({
  chains,
  metadata,
  projectId,
});

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');

// Create modal
createWeb3Modal({
  enableAnalytics: true,
  // Optional - defaults to your Cloud configuration
  enableOnramp: true,
  projectId,
  wagmiConfig: config,
});

export function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
