"use server";
import { auth, signIn } from "@/auth"; 
import { salesModel } from "@/database/models/sales-model";
import { userModel } from "@/database/models/users-model";
import { getUserInfo } from "@/database/queries/queries";
import connectMongo from "@/database/services/connectMongo";

export async function doSocialLogin(formData) {
  await connectMongo();
  const action = formData.get("action");
  const response = await signIn(action, {
    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  });
  console.log("social login response", response);
  const userInfo = await getUserInfo();
  console.log("social login user", userInfo);
  return response;
}

export async function addToCart(productId, quantity) {
  try {
    await connectMongo();
    const session = await auth();

    const user = await userModel.findById(session?.user?._id);
    if (!user) {
      throw new Error("User not found");
    }

    const productInCart = user.cart.find(
      (item) => item.productId.toString() === productId
    );

    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }

    await user.save();

    return { success: true, message: "Product added to cart" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
export async function addToWishlist(productId) {
  try {
    await connectMongo();

    const session = await auth();
    const user = await userModel.findById(session?.user?._id);
    if (!user) {
      throw new Error("User not found");
    }

    const productInWishlist = user.wishlist.find(
      (item) => item.productId.toString() === productId
    );

    if (!productInWishlist) {
      user.wishlist.push({ productId });
    }
    await user.save();
    return { success: true, message: "Product added to Wishlist" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function removeFromWishlist(productId) {
  try {
    await connectMongo();
    const session = await auth();
    const user = await userModel.findById(session?.user?._id);
    if (!user) {
      throw new Error("User not found");
    }

    const initialWishlistLength = user.wishlist.length;

    user.wishlist = user.wishlist.filter(
      (item) => item.productId.toString() !== productId
    );

    if (user.wishlist.length === initialWishlistLength) {
      return { success: false, message: "Product not found in Wishlist" };
    }

    await user.save();

    return { success: true, message: "Product removed from Wishlist" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function removeFromCart(productId) {
  try {
    await connectMongo();
    const session = await auth();
    const user = await userModel.findById(session?.user?._id);
    if (!user) {
      throw new Error("User not found");
    }

    const initialCartLength = user.cart.length;
    user.cart = user.cart.filter(
      (item) => item.productId.toString() !== productId
    );
    if (user.cart.length === initialCartLength) {
      return { success: false, message: "Product not found in Cart" };
    }
    await user.save();

    return { success: true, message: "Product removed from Cart" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
//user

export async function updateUserProfile(formData, type) {
  try {
    await connectMongo();
    const session = await auth();
    const user = await userModel.findById(session?.user?._id);
    if (!user) {
      throw new Error("User not found");
    }
    if (type === "profile") {
      user.name = formData.name;
      user.email = formData.email;
      user.phone = formData.phone;
    } else if (type === "shipping") {
      user.shippingAddress.street = formData.street;
      user.shippingAddress.city = formData.city;
      user.shippingAddress.state = formData.state;
      user.shippingAddress.zip = formData.zip;
      user.shippingAddress.phone = formData.phone;
    } else if (type === "billing") {
      user.billingAddress.street = formData.street;
      user.billingAddress.city = formData.city;
      user.billingAddress.state = formData.state;
      user.billingAddress.zip = formData.zip;
      user.billingAddress.phone = formData.phone;
    }
    await user.save();

    return { success: true, message: "Profile Updated" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
//checkout

// Function to place an order
export async function placeOrder(formData) {
  try {
    await connectMongo();
    const session = await auth();
    const user = await userModel.findById(session?.user?._id);
    if (!user) {
      throw new Error("User not found");
    }

    const newSale = new salesModel({
      products: user.cart,
      userId: user._id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || "",
      amount: formData.amount,
      shippingAddress: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
      },
      shippingCost: 0,
    });
    await newSale.save();
    user.cart = [];
    await user.save();
    return {
      success: true,
      message: "Order placed successfully",
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
