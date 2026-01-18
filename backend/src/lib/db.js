import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        // Debug check: This will print in your console so you can see if the URL is correct
        console.log("Attempting to connect with URL:", ENV.DB_URL);
        if(!ENV.DB_URL) {
            throw new Error("DB_URL is not defined in enviornment variables!");
        }
        const conn = await mongoose.connect(ENV.DB_URL, {
            serverSelectionTimeoutMS: 5000,
            family: 4, // Forces IPv4 (your successful test used IPv4)
        });

        console.log("✅ Connected to MongoDb:", conn.connection.host);
    } catch (error) {
        console.error("❌ Error connecting to MongoDb:", error.message);
        process.exit(1);
    }
};