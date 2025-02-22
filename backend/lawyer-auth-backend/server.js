// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes"); // Import authentication routes

// const app = express(); // ✅ Define app first
// app.use(cors({ origin: "http://localhost:5173", credentials: true })); // ✅ Now app is defined

// app.use(express.json()); // Middleware to parse JSON

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.log("❌ Error connecting to MongoDB:", err));

// // Register API routes
// app.use("/api/lawyers", authRoutes);

// const PORT = process.env.PORT || 4001;
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

// Internship Schema
const internshipSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
  stipend: String,
  postedAt: { type: Date, default: Date.now },
});

const Internship = mongoose.model("Internship", internshipSchema);

// Route to post internship
app.post("/api/internships", async (req, res) => {
  try {
    const newInternship = new Internship(req.body);
    await newInternship.save();
    res.status(201).json({ message: "Internship posted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to post internship" });
  }
});
// Route to fetch internships
app.get("/api/internships", async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch internships" });
  }
});
// Register API routes
app.use("/api/lawyers", authRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`✅ Server Started on Port ${PORT}`));
