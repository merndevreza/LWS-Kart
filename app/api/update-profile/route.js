import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";  
import connectMongo from "@/database/services/connectMongo";
import { userModel } from "@/database/models/users-model";

export async function PATCH(request) {
  // Connect to MongoDB
  await connectMongo();

  // Validate request method
  if (request.method !== 'PATCH') {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }

  // Extract user details from request body
  const { name, phone } = await request.json();

  // Get user session to authenticate the user
  const session = await getSession({ req: request });

  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const userId = session.user.id; // Assuming the session has the user ID

  try {
    // Update user's profile
    await userModel.findByIdAndUpdate(userId, { name, phone }, { new: true });

    return new NextResponse('Profile updated successfully', { status: 200 });
  } catch (error) {
    console.error('Error updating profile:', error);
    return new NextResponse('An error occurred while updating the profile', { status: 500 });
  }
}
