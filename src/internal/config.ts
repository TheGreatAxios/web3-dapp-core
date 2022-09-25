export interface IConfig {
  title: string; /// Application Name Found in Nav Bar
  theme: string; /// Default Theme the application starts on
}

export const DEFAULT_CONFIG: IConfig = {
  title: "NFT dApp",
  theme: "dark"
};
