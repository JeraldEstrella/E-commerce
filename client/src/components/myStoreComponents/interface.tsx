export interface ProductVariant {
  label: string;
  options: string[];
}

export interface fileState {
  mainImage?: File;
  additionalImages: File[];
}

export interface imageData {
  mainImage: string;
  additionalImages: string[];
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
  images: imageData;
  variants?: ProductVariant[];
  weight?: number;
  shippingClass?: string;
  tags?: string[];
}
