import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("Connected", () => console.log("Database connected"));
  await mongoose.connect(`${process.env.MONGODB_URI}/courtify`);
};
export default connectDB;
