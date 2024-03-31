import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();
const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("error :", error.message);
    throw new Error(error);
  }
};
