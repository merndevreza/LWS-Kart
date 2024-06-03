"use server";
import { signIn } from "@/auth";
import { userModel } from "@/database/models/users-model";
import connectMongo from "@/database/services/connectMongo";

export async function credentialLogin(formData) {
  try {
    await connectMongo();
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/` });
}

export async function addToCart(userId, productId, quantity) {
  try {
    await connectMongo(); 

    const user = await userModel.findById(userId); 
    if (!user) {
      throw new Error("User not found");
    }

    const productInCart = user.cart.find(item => item.productId.toString() === productId);

    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }

    await user.save();

    return { success: true, message: "Product added to cart" };
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return { success: false, message: error.message };
  }
}
export async function addToWishlist(userId, productId) {
  try {
    await connectMongo(); 

    const user = await userModel.findById(userId); 
    if (!user) {
      throw new Error("User not found");
    }

    const productInWishlist = user.wishlist.find(item => item.productId.toString() === productId);

    if (!productInWishlist) {
      user.wishlist.push({ productId });
    }
    await user.save();
    return { success: true, message: "Product added to Wishlist" };
  } catch (error) {
    console.error("Error adding product to Wishlist:", error);
    return { success: false, message: error.message };
  }
}