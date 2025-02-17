// // // import express from "express";
// // // import cors from "cors";
// // // import "dotenv/config";
// // // import connectDB from "./config/mongodb.js";
// // // import connectCloudinary from "./config/cloudinary.js";
// // // import adminRouter from "./routes/adminRoute.js";
// // // //app config
// // // import User from "./models/userModel.js"; // Adjust the path if needed

// // // const app = express();
// // // const port = process.env.PORT || 4000;
// // // connectDB();
// // // connectCloudinary();
// // // //middlewares

// // // app.use(express.json());
// // // app.use(cors());

// // // //api endpoints
// // // app.use("/api/admin", adminRouter);
// // // // localhost:4000/api/admin/add-lawyer
// // // app.post("/login", async (req, res) => {
// // //   const { email, password } = req.body;

// // //   try {
// // //     const user = await User.findOne({ email });
// // //     if (!user) return res.status(400).json({ message: "User not found" });

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch)
// // //       return res.status(400).json({ message: "Invalid credentials" });

// // //     const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
// // //       expiresIn: "1h",
// // //     });

// // //     res.json({ token });
// // //   } catch (error) {
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // });

// // // app.get("/", (req, res) => {
// // //   res.send("API is running fine...");
// // // });

// // // app.listen(port, () => console.log("Server Started", port));

// // import express from "express";
// // import cors from "cors";
// // import "dotenv/config";
// // import connectDB from "./config/mongodb.js";
// // import connectCloudinary from "./config/cloudinary.js";
// // import adminRouter from "./routes/adminRoute.js";
// // import User from "./models/userModel.js"; // ✅ Import User model
// // import bcrypt from "bcryptjs"; // ✅ Import bcrypt
// // import jwt from "jsonwebtoken"; // ✅ Import JWT

// // const app = express();
// // const port = process.env.PORT || 4000;
// // const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// // connectDB();
// // connectCloudinary();

// // app.use(express.json());
// // app.use(cors());

// // app.use("/api/admin", adminRouter);

// // // ✅ Move login route under "/api"
// // app.post("/api/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).json({ message: "User not found" });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch)
// //       return res.status(400).json({ message: "Invalid credentials" });

// //     const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
// //       expiresIn: "1h",
// //     });

// //     res.json({ token });
// //   } catch (error) {
// //     console.error("Login Error:", error); // ✅ Log the error
// //     res.status(500).json({ message: "Server error" });
// //   }
// // });

// // app.get("/", (req, res) => {
// //   res.send("API is running fine...");
// // });

// // app.listen(port, () => console.log("✅ Server Started on Port", port));

// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import connectDB from "./config/mongodb.js"; // ✅ Ensure this file exists
// import connectCloudinary from "./config/cloudinary.js"; // ✅ Ensure this file exists
// import adminRouter from "./routes/adminRoute.js"; // ✅ Ensure this file exists
// import User from "./models/userModel.js"; // ✅ Ensure this file exists

// const app = express();
// const port = process.env.PORT || 4000;
// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// // ✅ Ensure Database and Cloudinary are connected
// connectDB();
// connectCloudinary();

// app.use(express.json());
// app.use(cors());

// app.use("/api/admin", adminRouter);

// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.json({ token });
//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.get("/", (req, res) => {
//   res.send("API is running fine...");
// });

// app.listen(port, () => console.log("✅ Server Started on Port", port));

import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import User from "./models/userModel.js"; // ✅ Ensure this file exists
import { authenticateUser } from "./middlewares/authMiddleware.js";
const app = express();
const port = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/admin", adminRouter);
// app.get("/api/profile", authenticateUser, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json(user);
//   } catch (error) {
//     console.error("Profile Fetch Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.get("/api/profile", async (req, res) => {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).json({ message: "No token provided" });

//   try {
//     const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
//     const user = await User.findById(decoded.userId).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     console.log("User Data:", user); // ✅ Debugging: Check if address is being returned
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.put("/api/profile", async (req, res) => {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).json({ message: "No token provided" });

//   try {
//     const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
//     const { name, phone, address, gender, dob } = req.body;

//     const user = await User.findByIdAndUpdate(
//       decoded.userId,
//       { name, phone, address, gender, dob },
//       { new: true } // ✅ Return updated user
//     );

//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.json({ message: "Profile updated successfully", user });
//   } catch (error) {
//     console.error("Update Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

app.get("/api/profile", async (req, res) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    console.log("User Profile Data:", user); // ✅ Debugging log
    res.json(user);
  } catch (error) {
    console.error("Profile Fetch Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Signup Route (Register New User)
app.post("/api/signup", async (req, res) => {
  const { name, email, password, phone, address, gender, dob } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      gender,
      dob,
    });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, message: "User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Login Route (Authenticate User)
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("API is running fine...");
});

app.listen(port, () => console.log("✅ Server Started on Port", port));
