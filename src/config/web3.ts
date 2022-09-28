import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
  Chain,
  configureChains,
  createClient,
} from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const SkaleChain: Chain = {
  id: 0x63e1ef9,
  name: "Actual Secret Cebalrai",
  network: "skale",
  nativeCurrency: {
    decimals: 18,
    name: "SKALE Fuel",
    symbol: "sFUEL"
  },
  rpcUrls: {
    default: "https://staging-v2.skalenodes.com/v1/actual-secret-cebalrai"
  },
  testnet: true
}

export const appChains: Chain[] = [SkaleChain];

const { chains, provider } = configureChains(
  [SkaleChain],
  [
    jsonRpcProvider({
      rpc: (_chain: Chain) => {
        if (_chain.id !== SkaleChain.id) return null;
        return { http: _chain.rpcUrls.default };
      }
    })
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My NFT dApp',
  chains
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});





// /**
//  *
//  * Chains Available for Use
//  *
//  */

// const chains = [
//     {
//       id: "0x1",
//       token: "ETH",
//       label: "Ethereum",
//       rpcUrl: "https://cloudflare-eth.com"
//     },
//     {
//       id: "0x63e1ef9",
//       token: "sFUEL",
//       label: "Calypso - Testnet",
//       rpcUrl: "https://staging-v2.skalenodes.com/v1/actual-secret-cebalrai"
//     }
// ];

