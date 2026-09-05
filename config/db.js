import dns from 'dns';
import mongoose, { connect } from "mongoose";

dns.setServers(['8.8.8.8', '8.8.4.4']);

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);

    console.log(`MongoDB connected ✅: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);

    throw error;
  }
}