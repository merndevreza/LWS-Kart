import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema({
  street: {
    required: true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
  state: {
    required: true,
    type: String,
  },
  zipCode: {
    required: true,
    type: String,
  },
  country: {
    required: true,
    type: String,
  },
}, { _id: false }); // Prevent Mongoose from creating an _id for the sub-document

const salesSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  amount: {
    required: true,
    type: Number,
  },
  quantity: {
    required: true,
    type: Number,
  },
  saleDate: {
    required: true,
    type: Date,
  },
  paymentMethod: {
    required: true,
    type: String,
  },
  shippingAddress: {
    type: addressSchema,
    required: true,
  },
  billingAddress: {
    type: addressSchema,
    required: true,
  },
  orderStatus: {
    required: true,
    type: String,
  },
  deliveryDate: {
    type: Date,
  },
  transactionId: {
    type: String,
  },
  taxAmount: {
    type: Number,
    default: 0,
  },
  shippingCost: {
    type: Number,
    default: 0,
  },
  currency: {
    required: true,
    type: String,
  },
});

export const salesModel =
  mongoose.models.sales ?? mongoose.model("sales", salesSchema);
