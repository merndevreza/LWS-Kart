"use server";
import { signIn } from "@/auth";
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

export async function updateProfile(formData,userId){

}
