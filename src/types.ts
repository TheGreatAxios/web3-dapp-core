import { BigNumber } from 'ethers';

export interface IAppConfig {
  title: string;
  theme: string;
}

export interface ICollection {
  name: string;
  symbol?: string;
  type: string;
  chainId: number;
  rpcUrl: string;
  address: string;
  graphics: string[];
}

export interface IFunction {
  name: string;
  params: any;
}

export interface IToken {
  name: string;
  symbol: string;
  decimals: number;
  price: string; // utilize ethers.utils.parseEther(price);
}

export interface ISaleContract {
  saleAddress: string;
  isUnlimited: boolean;
  maxSupply: number | BigNumber;
  prices: {[key: string]: IToken};
}
