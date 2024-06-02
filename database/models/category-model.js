import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  productsId: {
    required: true,
    type: Array,
  },
});

export const categoryModel =
  mongoose.models.categories ?? mongoose.model("categories", categorySchema);
