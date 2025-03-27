// const express = require("express");
// const router = express.Router();
// const { getClientConsultations } = require("../controllers/consultationController");
// const { verifyToken } = require("../middlewares/authMiddleware"); // or whatever middleware you use

// // Route to get client's accepted consultations
// router.get("/client", verifyToken, getClientConsultations);

// module.exports = router;


// import express from "express";
// import { getClientConsultations } from "../controllers/consultationController.js";
// import { authenticateUser } from "../middlewares/authMiddleware.js";
// import { Consultation } from "../models/Consultation.js";

// const router = express.Router();

// router.get("/client", authenticateUser, getClientConsultations);

// export default router;


// routes/consultationRoutes.js
import express from "express";
import { getClientConsultations } from "../controllers/consultationController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
//import {authMiddleware} from "../middlewares/authMiddleware";
const router = express.Router();

router.get("/client",authenticateUser , getClientConsultations);
// routes/consultationRoutes.js
router.post("/consultation/update-status", async (req, res) => {
    const { bar_council_id, date, time, status, legalName } = req.body;
  
    try {
      const updatedConsult = await Consultation.findOneAndUpdate(
        { bar_council_id, date, time, legalName },
        { status },
        { new: true }
      );
  
      if (!updatedConsult) {
        return res.status(404).json({ message: "Consultation not found" });
      }
  
      res.json({ message: "Status updated successfully", data: updatedConsult });
    } catch (error) {
      console.error("Error updating consultation status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
export default router;
