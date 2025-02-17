const mongoose = require("mongoose");

const LawyerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    barCouncilId: { type: String, required: true, unique: true },
    areaOfPractice: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lawyer", LawyerSchema);
