// // require("dotenv").config();
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");

// // const authRoutes = require("./routes/authRoutes"); // Import authentication routes

// // const app = express(); // ✅ Define app first
// // app.use(cors({ origin: "http://localhost:5173", credentials: true })); // ✅ Now app is defined

// // app.use(express.json()); // Middleware to parse JSON

// // // Connect to MongoDB
// // mongoose
// //   .connect(process.env.MONGODB_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log("✅ MongoDB connected"))
// //   .catch((err) => console.log("❌ Error connecting to MongoDB:", err));

// // // Register API routes
// // app.use("/api/lawyers", authRoutes);

// // const PORT = process.env.PORT || 4001;
// // app.listen(PORT, () => console.log(`✅ Server Started on Port ${PORT}`));

// // require("dotenv").config();
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");

// // const authRoutes = require("./routes/authRoutes"); // Import authentication routes

// // const app = express(); // ✅ Define app first
// // app.use(cors({ origin: "http://localhost:5173", credentials: true })); // ✅ Now app is defined

// // app.use(express.json()); // Middleware to parse JSON

// // // Connect to MongoDB
// // mongoose
// //   .connect(process.env.MONGODB_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log("✅ MongoDB connected"))
// //   .catch((err) => console.log("❌ Error connecting to MongoDB:", err));

// // // Internship Schema
// // const internshipSchema = new mongoose.Schema({
// //   title: String,
// //   description: String,
// //   duration: String,
// //   stipend: String,
// //   postedAt: { type: Date, default: Date.now },
// // });

// // const Internship = mongoose.model("Internship", internshipSchema);

// // // Route to post internship
// // app.post("/api/internships", async (req, res) => {
// //   try {
// //     const newInternship = new Internship(req.body);
// //     await newInternship.save();
// //     res.status(201).json({ message: "Internship posted successfully!" });
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to post internship" });
// //   }
// // });
// // // Route to fetch internships
// // app.get("/api/internships", async (req, res) => {
// //   try {
// //     const internships = await Internship.find();
// //     res.status(200).json(internships);
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to fetch internships" });
// //   }
// // });
// // // Register API routes
// // app.use("/api/lawyers", authRoutes);

// // const PORT = process.env.PORT || 4001;
// // app.listen(PORT, () => console.log(`✅ Server Started on Port ${PORT}`));

// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");

// const authRoutes = require("./routes/authRoutes"); // Import authentication routes
// const caseStudyRoutes = require("./routes/caseStudyRoutes"); // Import case study routes

// const app = express();
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.json()); // Middleware to parse JSON

// // ✅ Serve Static Files (to load lawyer profile pictures)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ✅ Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.log("❌ Error connecting to MongoDB:", err));

// // ✅ Internship Schema
// const internshipSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   duration: String,
//   stipend: String,
//   googleFormLink: String,
//   postedAt: { type: Date, default: Date.now },
// });

// const Internship = mongoose.model("Internship", internshipSchema);

// // ✅ Route to post internship
// // app.post("/api/internships", async (req, res) => {
// //   try {
// //     const newInternship = new Internship(req.body);
// //     await newInternship.save();
// //     res.status(201).json({ message: "Internship posted successfully!" });
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to post internship" });
// //   }
// // });
// app.post("/api/internships", async (req, res) => {
//   try {
//     const { title, description, duration, stipend, googleFormLink } = req.body;

//     const newInternship = new Internship({
//       title,
//       description,
//       duration,
//       stipend,
//       googleFormLink, // ✅ Save Google Form link
//     });

//     await newInternship.save();
//     res.status(201).json({ message: "Internship posted successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to post internship" });
//   }
// });
// // ✅ Route to fetch internships
// app.get("/api/internships", async (req, res) => {
//   try {
//     const internships = await Internship.find();
//     res.status(200).json(internships);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch internships" });
//   }
// });

// // ✅ Register API routes
// app.use("/api/lawyers", authRoutes);

// const PORT = process.env.PORT || 4001;
// app.listen(PORT, () => console.log(`✅ Server Started on Port ${PORT}`));

// /////////////////////////////////////////////////////////
// // require("dotenv").config();
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");

// // const app = express();

// // // Middleware
// // app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// // app.use(express.json());

// // // MongoDB Connection
// // mongoose
// //   .connect(process.env.MONGODB_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log("✅ MongoDB connected"))
// //   .catch((err) => console.log("❌ Error connecting to MongoDB:", err));

// // // User Schema
// // const userSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   password: String,
// // });

// // const User = mongoose.model("User", userSchema);

// // // User Registration Route
// // app.post("/api/register", async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newUser = new User({ name, email, password: hashedPassword });

// //     await newUser.save();
// //     res.status(201).json({ message: "User registered successfully!" });
// //   } catch (error) {
// //     res.status(500).json({ error: "Registration failed" });
// //   }
// // });

// // // User Login Route
// // app.post("/api/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const user = await User.findOne({ email });

// //     if (!user) {
// //       return res.status(400).json({ error: "User not found" });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ error: "Invalid credentials" });
// //     }

// //     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "1h",
// //     });

// //     res.status(200).json({ message: "Login successful", token });
// //   } catch (error) {
// //     res.status(500).json({ error: "Login failed" });
// //   }
// // });

// // // Server Port
// // const PORT = process.env.PORT || 4001;
// // app.listen(PORT, () => console.log(`✅ Server Started on Port ${PORT}`));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes"); // Import authentication routes
const caseStudyRoutes = require("./routes/caseStudyRoutes"); // Import case study routes

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // Middleware to parse JSON

// ✅ Serve Static Files (for profile pictures & case studies)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  "/uploads/case-studies",
  express.static(path.join(__dirname, "uploads/case-studies"))
);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Error connecting to MongoDB:", err));

// ✅ Internship Schema
const internshipSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
  stipend: String,
  googleFormLink: String,
  postedAt: { type: Date, default: Date.now },
});

const Internship = mongoose.model("Internship", internshipSchema);

// ✅ Route to post internship
app.post("/api/internships", async (req, res) => {
  try {
    const { title, description, duration, stipend, googleFormLink } = req.body;

    const newInternship = new Internship({
      title,
      description,
      duration,
      stipend,
      googleFormLink, // ✅ Save Google Form link
    });

    await newInternship.save();
    res.status(201).json({ message: "Internship posted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to post internship" });
  }
});

// ✅ Route to fetch internships
app.get("/api/internships", async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch internships" });
  }
});

// ✅ Register API routes
app.use("/api/lawyers", authRoutes);
app.use("/api/case-studies", caseStudyRoutes); // ✅ Added route for case studies

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`✅ Server Started on Port ${PORT}`));
