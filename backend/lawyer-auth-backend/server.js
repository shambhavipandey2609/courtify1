// // // require("dotenv").config();
// // // const express = require("express");
// // // const mongoose = require("mongoose");
// // // const cors = require("cors");

// // // const authRoutes = require("./routes/authRoutes");

// // // const app = express();
// // // app.use(express.json());
// // // app.use(cors());

// // // mongoose
// // //   .connect(process.env.MONGO_URI, {
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true,
// // //   })
// // //   .then(() => console.log("MongoDB connected"))
// // //   .catch((err) => console.log("Error connecting to MongoDB:", err));

// // // app.use("/api/lawyers", authRoutes);

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // const express = require("express");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // const Lawyer = require("../models/Lawyer");
// // require("dotenv").config();

// // const router = express.Router();

// // // Lawyer Signup
// // router.post("/signup", async (req, res) => {
// //   try {
// //     const {
// //       name,
// //       email,
// //       password,
// //       barCouncilId,
// //       areaOfPractice,
// //       phoneNumber,
// //       yearsOfExperience,
// //     } = req.body;

// //     if (
// //       !name ||
// //       !email ||
// //       !password ||
// //       !barCouncilId ||
// //       !areaOfPractice ||
// //       !phoneNumber ||
// //       !yearsOfExperience
// //     ) {
// //       return res.status(400).json({ error: "All fields are required" });
// //     }

// //     const existingLawyer = await Lawyer.findOne({ email });
// //     if (existingLawyer) {
// //       return res.status(400).json({ error: "Email already exists" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const newLawyer = new Lawyer({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       barCouncilId,
// //       areaOfPractice,
// //       phoneNumber,
// //       yearsOfExperience,
// //     });

// //     await newLawyer.save();
// //     res.status(201).json({ message: "Lawyer registered successfully" });
// //   } catch (error) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // // Lawyer Login
// // router.post("/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const lawyer = await Lawyer.findOne({ email });

// //     if (!lawyer) {
// //       return res.status(400).json({ error: "Invalid credentials" });
// //     }

// //     const isMatch = await bcrypt.compare(password, lawyer.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ error: "Invalid credentials" });
// //     }

// //     const token = jwt.sign({ id: lawyer._id }, process.env.JWT_SECRET, {
// //       expiresIn: "1h",
// //     });

// //     res.json({ message: "Login successful", token });
// //   } catch (error) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // module.exports = router;

// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes"); // Import authentication routes
// const app = express();
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// app.use(express.json()); // Middleware to parse JSON
// app.use(cors()); // Allow Cross-Origin requests

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("Error connecting to MongoDB:", err));

// // Register API routes
// app.use("/api/lawyers", authRoutes);

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`✅ Server Started on Port ${PORT}`));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes"); // Import authentication routes

const app = express(); // ✅ Define app first
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // ✅ Now app is defined

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Error connecting to MongoDB:", err));

// Register API routes
app.use("/api/lawyers", authRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`✅ Server Started on Port ${PORT}`));
