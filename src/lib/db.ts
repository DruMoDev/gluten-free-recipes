import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// TODO: Add a cache to avoid connecting multiple times
export const connectToDatabase = async () => {
  mongoose.connect(MONGODB_URI);
};
