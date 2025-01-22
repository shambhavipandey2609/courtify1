// import express from "express";
// import {
//   uploadMiddleware,
//   addLawyer,
// } from "../controllers/lawyerController.js";

// const router = express.Router();

// // Define the route for adding a lawyer
// router.post("/add-lawyer", uploadMiddleware, addLawyer);

// export default router;


// const express = require('express');
// const router = express.Router();
// const Lawyer = require('../models/Lawyer');

// // POST /api/lawyers/signup - Create a new lawyer
// router.post('/signup', async (req, res) => {
//   try {
//     const newLawyer = new Lawyer(req.body);
//     await newLawyer.save();
//     res.status(201).json({ message: 'Lawyer registered successfully!' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// module.exports = router;


import express from 'express';
import Lawyer from '../models/lawyerModel.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const newLawyer = new Lawyer(req.body);
    await newLawyer.save();
    res.status(201).json({ message: 'Lawyer registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
