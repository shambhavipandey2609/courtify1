// const mongoose = require("mongoose");
import mongoose from "mongoose";
const CaseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  fileUrl: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
});

// module.exports = mongoose.model("CaseStudy", CaseStudySchema);

const CaseStudy = mongoose.model("CaseStudy", CaseStudySchema);
export default CaseStudy;
