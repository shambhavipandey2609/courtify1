// const mongoose = require("mongoose");

// const LawyerSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     barCouncilId: { type: String, required: true, unique: true },
//     areaOfPractice: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     yearsOfExperience: { type: Number, required: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Lawyer", LawyerSchema);

// const mongoose = require("mongoose");

// const LawyerSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     barCouncilId: { type: String, required: true, unique: true },
//     areaOfPractice: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     yearsOfExperience: { type: Number, required: true },
//     photo: { type: String }, // Added photo field
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Lawyer", LawyerSchema);

const mongoose = require("mongoose");

const LawyerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[A-Za-z\s]+$/.test(v); // Allows only letters and spaces
        },
        message: "Name must contain only alphabets and spaces.",
      },
    },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password must be at least 8 characters long."],
    },
    barCouncilId: { type: String, required: true, unique: true },
    areaOfPractice: { type: String, required: true },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v); // Ensures exactly 10 digits
        },
        message: "Phone number must be exactly 10 digits.",
      },
    },
    yearsOfExperience: { type: Number, required: true },
    photo: { type: String }, // Added photo field
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lawyer", LawyerSchema);
