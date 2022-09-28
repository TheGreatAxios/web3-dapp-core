import _CollectionsJson from './collections.json';
import * as T from '../types';

export const Collections: T.ICollection[] = _CollectionsJson as T.ICollection[];

export const AppGlobal: T.IAppConfig = {
  theme: "dark",
  title: "NFT Mint dApp"
};

/// See src/types.ts for ISaleContract
// Key -> String | number = ChainId
// key -> String => Sale Contract Address (may be nft address if contracts are merged)
export const SaleContracts: {[key: string | number]: {[key: string]: T.ISaleContract}} = {
  "104734457": {
    "0x459a4737611dDDdb79DA5C5827A1C143b0887c1B": {
      saleAddress: "0xbA9E8905F3c3C576f048eEbB3431ede0d5D27682",
      isUnlimited: false,
      maxSupply: 1000,
      prices: {
        "0x4a4957e463439df0f9a32231884bd31b9C016C41": {
          name: "Ethereum",
          symbol: "ETH",
          price: "0.003",
          decimals: 18
        }
      }
    }
  }
}
