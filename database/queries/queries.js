"use server";
import {
  convertMongoIdToString,
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/replaceMongoId";
import { productsModel } from "../models/products-model";
import connectMongo from "../services/connectMongo";
import { salesModel } from "../models/sales-model";
import { categoryModel } from "../models/category-model";
import { reviewModel } from "../models/review-model";
import { userModel } from "../models/users-model";
import { auth } from "@/auth";

//User
export async function getUserInfo() {
  try {
    await connectMongo();
    const session = await auth();  
    if (!session?.user) {
      throw new Error("User not found");
    } 
    const user = await userModel
      .findById(session?.user?._id || session?.user?.id)
      .lean();

    if (!user) {
      throw new Error("User not found");
    }

    return {
      success: true,
      message: "User found",
      data: convertMongoIdToString(user),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
//products
export async function getAllProducts(search) {
  try {
    await connectMongo();
    const regex = new RegExp(search, "i");
    const products = await productsModel
      .find({ title: { $regex: regex } })
      .select(["title", "stock", "discountPrice", "price", "size", "thumbnail"])
      .lean();

    return {
      success: true,
      message: "Searched Products",
      data: replaceMongoIdInArray(products),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function getLatestProducts(totalProductsNeed) {
  try {
    await connectMongo();
    const products = await productsModel
      .find()
      .sort({ createdAt: -1 })
      .limit(totalProductsNeed)
      .select(["title", "stock", "discountPrice", "price", "thumbnail"])
      .lean();

    return {
      success: true,
      message: "Latest Products",
      data: replaceMongoIdInArray(products),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function getTrendingProducts(totalProductsNeed) {
  try {
    await connectMongo();

    const salesData = await salesModel.find().select("productId").lean();
    const productIds = [...new Set(salesData.map((sale) => sale.productId))];
    const products = await productsModel
      .find({ _id: { $in: productIds } })
      .limit(totalProductsNeed)
      .select(["title", "stock", "discountPrice", "price", "thumbnail"])
      .lean();

    return {
      success: true,
      message: "Trending Products Found",
      data: replaceMongoIdInArray(products),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function getProductById(id) {
  try {
    await connectMongo();
    const product = await productsModel.findById(id).lean();
    return {
      success: true,
      message: "Product Found",
      data: replaceMongoIdInObject(product),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
//review
export async function getAllReviewsByProductId(productId) {
  try {
    await connectMongo();
    const reviews = await reviewModel
      .find({ productId })
      .select(["rating"])
      .lean();
    return {
      success: true,
      message: "Products Ratings Found",
      data: replaceMongoIdInArray(reviews),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
//category
export async function getAllCategories(totalCategoryNeed) {
  try {
    await connectMongo();
    const categories = await categoryModel
      .find()
      .limit(totalCategoryNeed)
      .lean();
    return {
      success: true,
      message: "Categories Found",
      data: replaceMongoIdInArray(categories),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
//for related products
export async function getProductsByCategoryName(categoryName) {
  try {
    await connectMongo();
    const regex = new RegExp(categoryName, "i");
    const { productsId } = await categoryModel
      .findOne({ name: { $regex: regex } })
      .select(["productsId"])
      .lean();
    if (productsId.length > 0) {
      const products = await productsModel
        .find({ _id: { $in: productsId } })
        .select(["title", "stock", "discountPrice", "price", "thumbnail"])
        .lean();

      return {
        success: true,
        message: "Products Found",
        data: replaceMongoIdInArray(products),
      };
    } else {
      throw new Error(`No products found in ${categoryName} category`);
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Filter by category
export async function getProductsFilteredByCategories(categories) {
  try {
    await connectMongo();
    const categoriesToMatch = categories.split("|");

    const allProducts = await productsModel
      .find()
      .select([
        "title",
        "stock",
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

    return {
      success: true,
      message: "Products Found",
      data: replaceMongoIdInArray(filteredProducts),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
// Filter by Size

export async function getAllSizes() {
  try {
    await connectMongo();
    const allProducts = await productsModel.find().select(["size"]).lean();
    const allSizes = [...new Set(allProducts.map((product) => product.size))];

    return {
      success: true,
      message: "All Available Sizes",
      data: allSizes,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
//wishlist

export async function getWishlist() {
  try {
    await connectMongo();
    const session = await auth();
    if (!session?.user) {
      throw new Error("User not found");
    }
    const { wishlist } = await userModel
      .findById(session?.user?._id || session?.user?.id)
      .select(["wishlist"])
      .lean();

    return {
      success: true,
      message: "All wishlist Products Found",
      data: wishlist,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
export async function getWishlistProducts() {
  try {
    await connectMongo();
    const session = await auth();
    if (!session?.user) {
      throw new Error("User not found");
    }
    const { wishlist } = await userModel
      .findById(session?.user?._id || session?.user?.id)
      .select(["wishlist"])
      .lean();
    const productsId = wishlist.map((item) => item.productId);
    const products = await productsModel
      .find({ _id: { $in: productsId } })
      .select(["title", "stock", "discountPrice", "price", "thumbnail"])
      .lean();
    return {
      success: true,
      message: "All wishlist Products Found",
      data: replaceMongoIdInArray(products),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
//Cart products

export async function getCartLength() {
  try {
    await connectMongo();
    const session = await auth();
    if (!session?.user) {
      throw new Error("User not found");
    }
    const { cart } = await userModel
      .findById(session?.user?._id || session?.user?.id)
      .select(["cart"])
      .lean();
    return {
      success: true,
      message: "All Carts Products Found",
      data: cart.length,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
export async function getAllProductsInCart() {
  try {
    await connectMongo();
    const session = await auth();
    if (!session?.user) {
      throw new Error("User not found");
    }
    const { cart } = await userModel
      .findById(session?.user?._id || session?.user?.id)
      .select(["cart"])
      .lean();

    const products = await Promise.all(
      cart.map(async (item) => {
        const product = await productsModel
          .findById(item.productId)
          .select(["title", "stock", "size", "discountPrice", "thumbnail"])
          .lean();

        const productWithQuantity = {
          product: convertMongoIdToString(product),
          quantity: item?.quantity,
        };
        return productWithQuantity;
      })
    );

    return {
      success: true,
      message: "All Carts Products Found",
      data: products,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
