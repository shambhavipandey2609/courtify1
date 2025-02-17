const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  college: { type: String, required: true },
  passingYear: { type: Number, required: true },
  phone: { type: String, required: true },
  degree: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Student", StudentSchema);
