export interface IPageConfig {
  documentHead: string;
}

export interface IConfig {
  pages: {[key: string]: IPageConfig};
}

export const Config: IConfig = {
  pages: {
    /// Add Pages Here
  }
}
