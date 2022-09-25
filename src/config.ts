export interface IPageConfig {
  documentHead: string;
}

export interface ISale {
  name: string;
  chainId: number;
  rpcUrl: string;
  skale: {
    useMetaport: boolean;
  };
  contractAddress: string;
  contractAbi: any;
  isERC721: boolean;
}

export interface IConfig {
  pages: {[key: string]: IPageConfig};
  sales: ISale[];
}

export const Config: IConfig = {
  pages: {
    /**
     *
     * Add Pages Here
     *
     * Example
     * collections: 'Available Collections'
     */
  },
  sales: [
    /**
     *
     * Add Sales Here
     * Example
     * {
     *    name: "Sale Name",
     *    chainId: 1,
     *    rpcUrl: "https://cloudflare-eth.com",
     *    skale: {
     *      useMetaport: false;
     *    },
     *    contractAddress: "0xABC...",
     *    contractAbi: [...],
     *    isERC721: true
     */
  ]
}
