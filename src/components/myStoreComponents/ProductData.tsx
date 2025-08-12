export interface ProductVariant {
  label: string;
  options: string[];
}

export interface ProductData {
  productName: string;
  category: string;
  brand?: string;
  sku?: string;
  shortDescription?: string;
  detailedDescription?: string;
  regularPrice: number;
  salePrice?: number;
  stockQuantity: number;
  lowStockThreshold?: number;
  mainImage?: File;
  additionalImages?: File[];
  variants?: ProductVariant[];
  weight?: number;
  shippingClass?: string;
  tags?: string[];
}
