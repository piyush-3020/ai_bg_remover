import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Database Connection Error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Database Disconnected");
    });

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Mongoose successfully connected.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
