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
  price: BigNumber;
}

export interface ISaleContract {
  isUnlimited: boolean;
  maxSupply: number | BigNumber;
  prices: {[key: string]: IToken};
  functions: {[key: string]: IFunction};
}
