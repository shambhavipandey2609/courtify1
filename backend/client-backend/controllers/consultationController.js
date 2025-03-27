// const Consultation = require("../models/Consultation");

// const getClientConsultations = async (req, res) => {
//   try {
//     const clientName = req.session.legalName;

//     if (!clientName) {
//       return res.status(401).json({ message: "Client not logged in" });
//     }

//     const consultations = await Consultation.find({
//       clientName,
//       status: "accepted", // show only accepted
//     });

//     res.json({ data: consultations });
//   } catch (error) {
//     console.error("Error fetching client consultations:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// module.exports = {
//   getClientConsultations,
// };



// import { Consultation } from "../models/Consultation.js";

// export const getClientConsultations = async (req, res) => {
//   try {
//     const clientName = req.session.legalName;

//     if (!clientName) {
//       return res.status(401).json({ message: "Client not logged in" });
//     }

//     const consultations = await Consultation.find({
//       clientName,
//       status: "accepted",
//     });

//     res.json({ data: consultations });
//   } catch (error) {
//     console.error("Error fetching client consultations:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };


// controllers/consultationController.js
import { Consultation } from "../models/Consultation.js";

// export const getClientConsultations = async (req, res) => {
//   try {
//     const clientName = req.session.legalName; // or req.user.legalName if using JWT
//     const consultations = await Consultation.find({ 
//       clientName,
//       status: "accepted"
//     });

//     res.json({ data: consultations });
//   } catch (error) {
//     console.error("Error fetching client consultations:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// exports.getClientConsultations = async (req, res) => {
//   try {
//     const consultations = await Consultation.find({
//       clientId: req.user._id, // Filter by logged-in client's ID
//       status: { $in: ["accepted", "pending"] } // Show both accepted and pending
//     }).populate('lawyer', 'name image'); // Populate lawyer details if needed

//     res.json({ success: true, data: consultations });
//   } catch (error) {
//     console.error("Error fetching consultations:", error);
//     res.status(500).json({ success: false, error: "Server error" });
//   }
// };
export const getClientConsultations = async (req, res) => {
    try {
      const consultations = await Consultation.find({
        clientId: req.user._id,
        status: { $in: ["accepted", "pending"] }
      });
  
      res.json({ success: true, data: consultations });
    } catch (error) {
      console.error("Error fetching consultations:", error);
      res.status(500).json({ success: false, error: "Server error" });
    }
  };