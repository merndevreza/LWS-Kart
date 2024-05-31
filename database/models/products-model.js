import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  title: {
    required: true,
    type: String,
  }, 
  stock: {
    required: true,
    type: Number,
  }, 
  category: {
    required: true,
    type: String,
  },
  discountPrice: {
    required: false,
    type: Number,
  },
  price: {
    required: true,
    type: Number,
  }, 
  size: {
    required: true,
    type: String,
  },
  sku: {
    required: true,
    type: String,
  },
  brand: {
    required: true,
    type: String,
  },
  shortDescription: {
    required: true,
    type: String,
  },
  fullDescription: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  gallery: {
    required: true,
    type: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export const productsModel =
  mongoose.models.products ?? mongoose.model("products", productsSchema);
