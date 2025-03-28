// const express = require("express");
// const router = express.Router();
// const Consultation = require("../models/Consultation");

// // Book a new consultation
// router.post("/", async (req, res) => {
//   try {
//     const { clientName, date, time, lawyerId } = req.body;

//     const newConsultation = new Consultation({
//       clientName,
//       date,
//       time,
//       lawyerId
//     });
//     await newConsultation.save();

//     res.status(201).json({ success: true, data: newConsultation });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Get all consultations for a specific lawyer
// router.get("/:lawyerId", async (req, res) => {
//   try {
//     const { lawyerId } = req.params;
//     const consultations = await Consultation.find({ lawyerId })
//       .sort({ date: 1, time: 1 });
//     res.json({ success: true, data: consultations });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Update consultation status (accept/reject)
// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     if (!["accepted", "rejected"].includes(status)) {
//       return res.status(400).json({ success: false, error: "Invalid status" });
//     }

//     const updatedConsultation = await Consultation.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     );

//     res.json({ success: true, data: updatedConsultation });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Consultation = require("../models/Consultation");
import express from "express";
import Consultation from "../models/Consultation.js";

const router = express.Router();
// Book a consultation (No lawyerId)
// router.post("/", async (req, res) => {
//   try {
//     const { clientName, date, time } = req.body; // No lawyerId needed
//     const newConsultation = new Consultation({ clientName, date, time });
//     await newConsultation.save();
//     res.status(201).json({ success: true, data: newConsultation });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });
router.post("/", async (req, res) => {
  try {
    const { clientName, bar_council_id, date, time, legalName } = req.body;

    if (!clientName || !bar_council_id || !date || !time || !legalName) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }

    const newConsultation = new Consultation({
      clientName,
      bar_council_id,
      date,
      time,
      legalName, // ✅ Save this
      status: "pending",
      isPaid: false,
    });

    await newConsultation.save();
    res.status(201).json({ success: true, data: newConsultation });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all consultations (No lawyer filtering)
router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ date: 1, time: 1 });
    res.json({ success: true, data: consultations });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update status (Accept/Reject)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedConsultation = await Consultation.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json({ success: true, data: updatedConsultation });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// module.exports = router;

export default router;
