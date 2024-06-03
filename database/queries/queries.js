import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/replaceMongoId";
import { productsModel } from "../models/products-model";
import connectMongo from "../services/connectMongo";
import { salesModel } from "../models/sales-model";
import { categoryModel } from "../models/category-model";
import { reviewModel } from "../models/review-model";

//products
export async function getAllProducts(search) {
  await connectMongo();
  const regex = new RegExp(search, "i");
  const products = await productsModel
    .find({ title: { $regex: regex } })
    .select(["title", "discountPrice", "price", "size", "thumbnail"])
    .lean();
  return replaceMongoIdInArray(products);
}

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

export async function getProductById(id) {
  await connectMongo();

  const product = await productsModel.findById(id).lean();
  return replaceMongoIdInObject(product);
}
//review
export async function getAllReviewsByProductId(productId) {
  await connectMongo();
  const reviews = await reviewModel
    .find({ productId })
    .select(["rating"])
    .lean();
  return replaceMongoIdInArray(reviews);
}
//category
export async function getAllCategories(totalCategoryNeed) {
  await connectMongo();

  const categories = await categoryModel.find().limit(totalCategoryNeed).lean();

  return replaceMongoIdInArray(categories);
}
//for related products
export async function getProductsByCategoryName(categoryName) {
  await connectMongo();
  const regex = new RegExp(categoryName, "i");

  const { productsId } = await categoryModel
    .findOne({ name: { $regex: regex } })
    .select(["productsId"])
    .lean();

  const products = await productsModel
    .find({ _id: { $in: productsId } })
    .select(["title", "discountPrice", "price", "thumbnail"])
    .lean();

  return replaceMongoIdInArray(products);
}

// Filter by category
export async function getProductsFilteredByCategories(categories) {
  await connectMongo();
  const categoriesToMatch = categories.split("|");

  const allProducts = await productsModel
    .find()
    .select([
      "title",
      "discountPrice",
      "price",
      "size",
      "thumbnail",
      "category",
    ])
    .lean();

  const filteredProducts = allProducts.filter((product) => {
    return categoriesToMatch.includes(product.category);
  });

  return replaceMongoIdInArray(filteredProducts);
}
// Filter by Size

export async function getAllSizes() {
  await connectMongo();
  const allProducts = await productsModel.find().select(["size"]).lean();
  const allSizes = [...new Set(allProducts.map((product) => product.size))];
  return allSizes;
}
