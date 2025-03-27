import express from "express";
import { addLawyer } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

adminRouter.post("/add-lawyer", upload.single("image"), addLawyer);

export default adminRouter;
