import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://builinhvb205_db_user:10101023@cluster0.85kttgm.mongodb.net/social_app"
    );
    console.log(" Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

export default connectDB;
