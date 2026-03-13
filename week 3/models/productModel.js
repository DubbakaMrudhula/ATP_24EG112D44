import { Schema, model, Types } from 'mongoose';

// Cart schema (used in User schema, not Product)
const cartSchema = new Schema({
  product: {
    type: Types.ObjectId,
    ref: "Product" // Ensure this matches your product model name
  },
  count: {
    type: Number,
    default: 1
  }
});

// Product schema
const productSchema = new Schema({
  productId: { type: Number, required: [true, "Product ID is mandatory"], unique: true },
  productName: { type: String, required: [true, "Product name is mandatory"] },
  price: { type: Number, required: [true, "Price is mandatory"], min: [10000, "Price must be at least 10000"], max: [50000, "Price must be at most 50000"] },
  brand: { type: String, required: [true, "Brand is mandatory"] }
}, 
{ 
  versionKey: false,
  timestamps: true
});

// Generate ProductModel
export const productModel = model("Product", productSchema);