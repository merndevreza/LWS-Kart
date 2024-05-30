import mongoose from "mongoose";

// Here, we are creating a connection with MongoDB and caching the connection so that we don't need to call this connection on every actions of a user.
const MONGO_URI = process.env.MONGO_URI;
const cached = {
  // connection
  // promise
};
async function connectMongo() {
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    );
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "LWS-Kart",
    };
    cached.promise = mongoose.connect(MONGO_URI, opts);
  }
  try {
    cached.connection = await cached.promise;
  } catch (err) {
    cached.promise = undefined;
    throw err;
  }
  return cached.connection;
}
export default connectMongo;
