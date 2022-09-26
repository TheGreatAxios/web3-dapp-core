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
  1: {}
}
