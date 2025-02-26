const express = require("express");
const multer = require("multer");
const CaseStudy = require("../models/CaseStudy");
const path = require("path");

const router = express.Router();

// ✅ Set up storage for uploaded case studies
const storage = multer.diskStorage({
  destination: "uploads/case-studies/", // Store inside uploads folder
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ POST: Upload case study (Only for lawyers)
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { title } = req.body;
    const fileUrl = `/uploads/case-studies/${req.file.filename}`;

    const newCaseStudy = new CaseStudy({ title, fileUrl });
    await newCaseStudy.save();

    res
      .status(201)
      .json({
        message: "Case study uploaded successfully!",
        caseStudy: newCaseStudy,
      });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload case study" });
  }
});

// ✅ GET: Fetch all case studies
router.get("/", async (req, res) => {
  try {
    const caseStudies = await CaseStudy.find();
    res.status(200).json(caseStudies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch case studies" });
  }
});

module.exports = router;
