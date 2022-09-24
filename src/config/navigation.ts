import { INavItem, INavigationConfig, DEFAULT_NAVIGATION_ITEMS, DEFAULT_NAVIGATION_CONFIG } from '../internal/config/navigation';

// export const DEFAULT_NAVIGATION_ITEMS: INavItem[] = [];

/**
 * Default Navigation Items Contains no items
 * Add items below of type INavItem to add them to the navigation bar
 * INavItem {
 *     label: string;
 *     subLabel?: string; /// Optional
 *     children?: INavItem[] /// optional
 *     href?: string; /// Path -> Recommened to Not Leave Empty
 * }
 *
 * The DEFAULT_NAVIGATION_ITEMS is provided in order to utilize a shared medium for users.
 * If you know what you are doing, you can utilize different navigation by page
 */

export const GlobalNavigationBarItems: INavItem[] = DEFAULT_NAVIGATION_ITEMS.concat([
  /// Add your Items Here
]);

/**
 *
 * Default Navigation Config Contains the core config for the navigation
 * Interface is INavigationConfig {
 *    useNavigation: boolean; /// DEFAULT => True which enables the navigation bar for all pages
 *    useOnPage: string[] /// DEFAULT => [] empty
 *      - Utilization of this parameter will only enable the navigation on pages that match
 * }
 */

export const NavigationConfig: INavigationConfig = {
  ...DEFAULT_NAVIGATION_CONFIG,
  // useNavigation: false -> Uncomment to Remove Navigation by default
}
