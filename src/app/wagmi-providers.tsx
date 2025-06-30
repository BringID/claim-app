'use client'
import { OnchainKitProvider } from 'zkbring-onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import { defineAppNetwork } from '@/utils'
import 'zkbring-onchainkit/styles.css'
import { config } from '@/app/configs/wagmi'
import {
  onchainApiKey,
  projectId
} from '@/app/configs'
 
function Provider (props: {
  children: ReactNode;
  initialState?: State;
}) {
  const queryClient = new QueryClient()

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={onchainApiKey} 
          chain={defineAppNetwork()} // add baseSepolia for testing 
          projectId={projectId}
          config={{
            appearance: {
              name: 'zkBring',        // Displayed in modal header
              logo: '/sign-in-wallet.png',// Displayed in modal header
              mode: 'dark',                 // 'light' | 'dark' | 'auto'
              theme: 'default',             // 'default' or custom theme
            },
            wallet: { 
              display: 'modal'
            },
          }}
        >
          {props.children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Provider