import mongoose from "mongoose";
import { DB_NAME } from "@/constants";

type connectionObject = {
  isConnected?: number;
};
const connection: connectionObject = {};

export const connectDB = async () => {
  if (connection.isConnected) {
    console.log("already connected to the database");
    return;
  }
  try {
    const db = await mongoose.connect(
      `${process.env.MONGO_URII}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("database connected successfully...");
    console.log(db.connection.readyState);
  } catch (error) {
    console.error("Database Connection Failed:", error);
    process.exit(1);
  }
};
