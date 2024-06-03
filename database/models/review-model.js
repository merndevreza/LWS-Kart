import mongoose, { Schema } from "mongoose";

const reviewsSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

export const reviewModel =
  mongoose.models.reviews ?? mongoose.model("reviews", reviewsSchema);
