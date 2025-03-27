// const mongoose = require("mongoose");

// const consultationSchema = new mongoose.Schema({
//   clientName: {
//     type: String,
//     required: true,
//   },

//   date: {
//     type: String,
//     required: true,
//   },
//   time: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["pending", "accepted", "rejected"],
//     default: "pending",
//   },
// }, { timestamps: true });

// module.exports = mongoose.model("Consultation", consultationSchema);

const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  //clientId: { type: mongoose.Schema.Types.ObjectId, required: true },
  clientName: { 
    type: String, 
    required: true 
  },
  bar_council_id: { 
    type: String, 
    required: true, 
   // match: /^[A-Za-z]{3}\d{3}$/ // Format: 3 letters + 3 numbers (e.g., "ABC123")
  },
  date: { 
    type: String, 
    required: true 
  },
  time: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["pending", "accepted", "rejected"], 
    default: "pending" 
  }
}, { timestamps: true });

module.exports = mongoose.model("Consultation", consultationSchema);