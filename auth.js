import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"; 
import CredentialProvider from "next-auth/providers/credentials"; 
import bcrypt from "bcryptjs";
import { userModel } from "./database/models/users-model";
import clientPromise from "./database/mongoClientPromise";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise, { databaseName: "LWS-Kart" }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const foundUser = await userModel.findOne({
            email: credentials.email,
          }); 
          
          if (foundUser) {
            const isMatched = bcrypt.compare(
              credentials.password,
              foundUser.password
            );
            if (isMatched) {
              return foundUser;
            } else {
              throw new Error("Email or password mismatched");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
