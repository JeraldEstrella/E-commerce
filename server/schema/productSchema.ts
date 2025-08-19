import mongoose, { Schema, Document, Types } from 'mongoose';

interface Images {
  mainImage: string;
  additionalImages: string[];
}

interface Variant {
  label: string;
  options: string[];
}

export interface IProduct extends Document {
  storeId: Types.ObjectId;
  productName: string;
  category: string;
  brand: string;
  sku: string;
  shortDescription: string;
  detailedDescription: string;
  regularPrice: number;
  salePrice: number;
  stockQuantity: number;
  lowStockThreshold?: number;
  images: Images;
  variants: Variant[];
  weight?: number;
}

const ImagesSchema = new Schema<Images>(
  {
    mainImage: { type: String, required: true },
    additionalImages: [{ type: String }],
  },
  { _id: false }
);

const VariantSchema = new Schema<Variant>(
  {
    options: [{ type: String, required: true }],
  },
  { _id: false }
);

const ProductSchema = new Schema<IProduct>(
  {
    storeId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    productName: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    sku: { type: String, required: true },
    shortDescription: { type: String, required: true },
    detailedDescription: { type: String, required: true },
    regularPrice: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    lowStockThreshold: { type: Number },
    images: { type: ImagesSchema, required: true },
    variants: { type: [VariantSchema], default: [] },
    weight: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>('Product', ProductSchema);
