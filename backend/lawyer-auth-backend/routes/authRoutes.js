const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Lawyer = require("../models/Lawyer");
const authMiddleware = require("../middlewares/authMiddleware");
require("dotenv").config();

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ message: "Lawyer API is working!" });
});

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.user.id).select("-password"); // Exclude password
    if (!lawyer) {
      return res.status(404).json({ error: "Lawyer not found" });
    }
    res.json(lawyer);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Signup
router.post("/signup", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      barCouncilId,
      areaOfPractice,
      phoneNumber,
      yearsOfExperience,
    } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !barCouncilId ||
      !areaOfPractice ||
      !phoneNumber ||
      !yearsOfExperience
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingLawyer = await Lawyer.findOne({ email });
    if (existingLawyer) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newLawyer = new Lawyer({
      name,
      email,
      password: hashedPassword,
      barCouncilId,
      areaOfPractice,
      phoneNumber,
      yearsOfExperience,
    });

    await newLawyer.save();
    res.status(201).json({ message: "Lawyer registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const lawyer = await Lawyer.findOne({ email });

    if (!lawyer) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, lawyer.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: lawyer._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
