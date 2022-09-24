export interface INavItem {
  label: string;
  subLabel?: string;
  children?: INavItem[];
  href?: string;
}

export interface INavigationConfig {
  useNavigation: boolean;
  useLogoGra: boolean;
  useLogoStr: boolean;
  logo?: string;
  customPageHighlight?: {
    label: string;
    href: string;
    style: {
      color: string;
      hover: string;
      background: string;
    };
  };
  style: {
    background: [string, string];
    color: [string, string];
    border: {
      color: [string, string];
      style: string;
      size: number;
    };
    minHeight: string;
    alignment: string;
  };

}

export const DEFAULT_NAVIGATION_CONFIG: INavigationConfig = {
  useNavigation: true,
  useLogoGra: false,
  useLogoStr: true,
  logo: 'dApp Site',
  customPageHighlight: {
    label: "Mint",
    href: "mint",
    style: {
      color: "pink",
      background: "black",
      hover: "purple"
    }
  },
  style: {
    background: ['white', 'black'],
    color: ['black', 'white'],
    border: {
      color: ['black', 'white'],
      style: 'solid',
      size: 1
    },
    minHeight: '60px',
    alignment: 'center'
  }
};

export const DEFAULT_NAVIGATION_ITEMS: INavItem[] = [];
