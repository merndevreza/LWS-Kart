import { replaceMongoIdInArray } from "@/utils/replaceMongoId";
import { productsModel } from "../models/products-model";
import connectMongo from "../services/connectMongo";
import { salesModel } from "../models/sales-model";
import { categoryModel } from "../models/category-model";

//products
export async function getLatestProducts(totalProductsNeed) {
  await connectMongo();

  const products = await productsModel
    .find()
    .sort({ createdAt: -1 })
    .limit(totalProductsNeed)
    .select(["title", "discountPrice", "price", "thumbnail"])
    .lean();

  return replaceMongoIdInArray(products);
}

export async function getTrendingProducts(totalProductsNeed) {
  await connectMongo();

  const salesData = await salesModel.find().select("productId").lean();
  const productIds = [...new Set(salesData.map((sale) => sale.productId))];
  
  const products = await productsModel
    .find({ _id: { $in: productIds } })
    .limit(totalProductsNeed)
    .select(["title", "discountPrice", "price", "thumbnail"])
    .lean();

  return replaceMongoIdInArray(products);
}

export async function getAllProducts() {
  await connectMongo();
  const products = await productsModel
    .find()
    .select(["title", "discountPrice", "price", "thumbnail"])
    .lean();

  return replaceMongoIdInArray(products);
}

//category
export async function getAllCategories(totalCategoryNeed) {
  await connectMongo();
  const categories = await categoryModel.find().limit(totalCategoryNeed).lean();

  return replaceMongoIdInArray(categories);
}

export async function getProductsByCategory(categoryId) {
  await connectMongo();
  const { productsId } = await categoryModel
    .findById(categoryId)
    .select(["productsId"])
    .lean();
  const products = await productsModel
    .find({ _id: { $in: productsId } })
    .select(["title", "discountPrice", "price", "thumbnail"])
    .lean();

  return replaceMongoIdInArray(products);
}
