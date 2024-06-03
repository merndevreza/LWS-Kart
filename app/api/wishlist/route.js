import { productsModel } from "@/database/models/products-model";
import { userModel } from "@/database/models/users-model";
import connectMongo from "@/database/services/connectMongo";
import { replaceMongoIdInArray } from "@/utils/replaceMongoId";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectMongo();
  const user = await userModel.findById().select(["wishlist"]).lean();
  const productsId = user.wishlist.map((item) => item.productId);
  const products = await productsModel
    .find({ _id: { $in: productsId } })
    .select(["title", "stock", "discountPrice", "price", "thumbnail"])
    .lean();

  return NextResponse.json(replaceMongoIdInArray(products));
}
