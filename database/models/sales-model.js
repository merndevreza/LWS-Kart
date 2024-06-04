import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema(
  {
    street: {
      required: false,
      type: String,
    },
    city: {
      required: false,
      type: String,
    },
    state: {
      required: false,
      type: String,
    },
    zipCode: {
      required: false,
      type: String,
    },
    phone: {
      required: false,
      type: String,
    }
  },
  { _id: false }
); // Prevent Mongoose from creating an _id for the sub-document

const salesSchema = new Schema({
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: false },
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },
  name: {
    required: false,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },
  company: {
    required: false,
    type: String,
  },
  amount: {
    required: false,
    type: Number,
  }, 
  shippingAddress: {
    type: addressSchema,
    required: false,
  },  
  shippingCost: {
    type: Number,
    default: 0,
  }, 
});

export const salesModel =
  mongoose.models.sales ?? mongoose.model("sales", salesSchema);
