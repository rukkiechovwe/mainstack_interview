export interface GraphData {
  graph_data: PageViewData;
  top_locations: TopItemsData[];
  top_sources: TopItemsData[];
}

export interface PageViewData {
  views: PageViewItem;
}

export interface PageViewItem {
  [key: string]: string;
}

export interface TopItemsData {
  country?: string;
  source?: string;
  count: string;
  percent: string;
}

interface NavItemProp {
  item: string;
  icon: string;
  active: boolean;
}

export interface NavItemsProp {
  title: string;
  items: NavItemProp[];
}
