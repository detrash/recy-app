'use client';

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { State, WagmiProvider } from 'wagmi';

import { projectId, wagmiConfig } from '@/config';

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');

// Create modal
createWeb3Modal({
  enableAnalytics: true,
  // Optional - defaults to your Cloud configuration
  enableOnramp: true,

  projectId,
  wagmiConfig, // Optional - false as default
});

export function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
