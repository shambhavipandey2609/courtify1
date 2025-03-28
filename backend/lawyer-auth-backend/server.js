// require("dotenv").config();
// import dotenv from "dotenv";
// dotenv.config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// const authRoutes = require("./routes/authRoutes"); // Import authentication routes
// const caseStudyRoutes = require("./routes/caseStudyRoutes"); // Import case study routes
// const consultationRoutes = require("./routes/consultationRoutes");
// import connectCloudinary from "./config/cloudinary.js";
import connectCloudinary from "./config/cloudinary.js";
import authRoutes from "./routes/authRoutes.js";
import caseStudyRoutes from "./routes/caseStudyRoutes.js";
import consultationRoutes from "./routes/consultationRoutes.js";

connectCloudinary();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // Middleware to parse JSON
app.use("/api/consultations", consultationRoutes);

// // ✅ Serve Static Files (for profile pictures & case studies)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use(
//   "/uploads/case-studies",
//   express.static(path.join(__dirname, "uploads/case-studies"))
// );
// import path from "path";
import { fileURLToPath } from "url";
// import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
