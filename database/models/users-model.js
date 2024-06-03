import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: false, unique: true },
  phone: { type: String, required: false },
  password: { type: String, required: false },
  wishlist: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product" }, 
    },
  ],
  cart: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
  },
  billingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
