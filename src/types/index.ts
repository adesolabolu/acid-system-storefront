export interface ProductVariant {
  id: number;
  product_id: number;
  size_label: string;
  sku: string;
  price_modifier: number;
  inventory_count: number;
}

export interface Product {
  id: string | number;
  category_id?: number;
  category_name?: string;
  category_slug?: string;
  name: string;
  slug?: string;
  sku_code?: string;
  base_price: number;
  currency?: string;
  badge?: string;
  description: string;
  telemetry_spec?: string;
  material?: string;
  cad_type: string;
  in_stock: boolean;
  variants: ProductVariant[];
  
  // Aliasing for compatibility with existing components if needed
  category: string;
  price: number;
  isSoldOut: boolean;
  edition: string;
  tag: string;
  visualType: string;
  telemetrySpec?: string;
  colorway?: string;
  specs?: { label: string; value: string }[];
  materials?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  count: string;
  isLarge: boolean;
  visualType: 'outerwear' | 'accessories' | 'hardware' | 'apparel';
}
