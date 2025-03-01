export interface Product {
  id: string;
  title: string;
  articleNumber: string;
  price: {
    current: number;
    old: number;
  };
  savings: {
    amount: number;
    percentage: number;
  };
  image: string;
  inStock: boolean;
  stockCount?: number;
  labels: {
    isAdviced?: boolean;
    isNew?: boolean;
    isHit?: boolean;
    isDiscount?: boolean;
  };
  isFavorite?: boolean;
}

export type ViewMode = "grid" | "list" | "compact" | "basic";
export type Filter = {
  type: "hit" | "advice" | "new" | "discount";
};
