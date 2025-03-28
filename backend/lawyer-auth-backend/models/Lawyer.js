// const mongoose = require("mongoose");

// const LawyerSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function (v) {
//           return /^[A-Za-z\s]+$/.test(v); // Allows only letters and spaces
//         },
//         message: "Name must contain only alphabets and spaces.",
//       },
//     },
//     email: { type: String, required: true, unique: true },
//     password: {
//       type: String,
//       required: true,
//       minlength: [8, "Password must be at least 8 characters long."],
//     },
//     barCouncilId: {
//       type: String,
//       required: true,
//       unique: true,
//       validate: {
//         validator: function (v) {
//           return /^[A-Za-z0-9]{6}$/.test(v); // Exactly 6 alphanumeric chars
//         },
//         message: "barCouncilId must be exactly 6 alphanumeric characters (e.g., A1B2C3, ABC123).",
//       },
//     },
//     areaOfPractice: { type: String, required: true },
//     phoneNumber: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function (v) {
//           return /^\d{10}$/.test(v); // Ensures exactly 10 digits
//         },
//         message: "Phone number must be exactly 10 digits.",
//       },
//     },
//     yearsOfExperience: { type: Number, required: true },
//     photo: { type: String }, // Added photo field
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Lawyer", LawyerSchema);

// const mongoose = require("mongoose");
import mongoose from "mongoose";

const LawyerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[A-Za-z\s]+$/.test(v); // Only letters/spaces
        },
        message: "Name must contain only alphabets and spaces.",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Valid email
        },
        message: "Invalid email format.",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password must be at least 8 characters long."],
    },
    barCouncilId: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[A-Za-z0-9]{6}$/.test(v); // 6 alphanumeric chars
        },
        message:
          "barCouncilId must be exactly 6 alphanumeric characters (e.g., A1B2C3).",
      },
    },
    areaOfPractice: { type: String, required: true },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v); // Exactly 10 digits
        },
        message: "Phone number must be exactly 10 digits.",
      },
    },
    yearsOfExperience: {
      type: Number,
      required: true,
      min: [0, "Experience cannot be negative."],
      max: [60, "Experience exceeds reasonable limit."],
    },
    photo: { type: String },
  },
  { timestamps: true }
);

// Optional: Add index for faster queries
LawyerSchema.index({ barCouncilId: 1 }, { unique: true });

// module.exports = mongoose.model("Lawyer", LawyerSchema);

const Lawyer = mongoose.model("Lawyer", LawyerSchema);
export default Lawyer;
