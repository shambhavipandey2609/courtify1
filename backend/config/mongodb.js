// import mongoose from "mongoose";

// // const connectDB = async () => {
// //   mongoose.connection.on("Connected", () => console.log("Database connected"));
// //   await mongoose.connect(`${process.env.MONGODB_URI}/courtify`);
// // };
// // export default connectDB;


// const connectDB = async () => {
//   try {
//     mongoose.connection.on("connected", () => console.log("Database connected"));
//     await mongoose.connect(`${process.env.MONGODB_URI}/courtify`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   } catch (error) {
//     console.error("Database connection error:", error.message);
//     process.exit(1);
//   }
// };
// export default connectDB;

import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     mongoose.connection.on("connected", () => console.log("Database connected"));
//     await mongoose.connect(`${process.env.MONGODB_URI}/courtify`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   } catch (error) {
//     console.error("Database connection error:", error.message);
//     process.exit(1);
//   }
// };
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Database connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/courtify`);
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
