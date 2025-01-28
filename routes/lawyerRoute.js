import express from "express";
import {
  uploadMiddleware,
  addLawyer,
} from "../controllers/lawyerController.js";

const router = express.Router();

// Define the route for adding a lawyer
router.post("/add-lawyer", uploadMiddleware, addLawyer);

export default router;
