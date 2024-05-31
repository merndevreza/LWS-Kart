import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: false,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  wishlist: {
    required: false,
    type: Array,
  },
  cart: {
    required: false,
    type: Array,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
