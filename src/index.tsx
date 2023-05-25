import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

import '0xpass/style.css';
import { connectorsForWallets, PassProvider } from '0xpass';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import App from './App';
import {ledgerWallet, metaMaskWallet, googleMagicWallet} from "0xpass/wallets";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]

);


const projectId = process.env.REACT_APP_PROJECT_ID || ""
const apiKey = process.env.REACT_APP_API || ""

console.log(projectId)
console.log(apiKey)

const connectors = connectorsForWallets([
    {
        groupName: "Social",
        wallets: [
            googleMagicWallet({
                apiKey,
                chains
            })
        ],
    },
    {
        groupName: "EOA",
        wallets: [
            metaMaskWallet({projectId, chains}),
            ledgerWallet({projectId, chains}),
        ],
    },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <PassProvider apiKey={apiKey} chains={chains}>
        <App />
      </PassProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
