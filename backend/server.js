// // // import express from "express";
// // // import cors from "cors";
// // // import "dotenv/config";
// // // import connectDB from "./config/mongodb.js";
// // // import connectCloudinary from "./config/cloudinary.js";
// // // import adminRouter from "./routes/adminRoute.js";
// // // //import connectCloudinary from "./config/cloudinary.js";

// // // connectCloudinary();

// // // //app config
// // // const app = express();
// // // const port = process.env.PORT || 4000;
// // // connectDB();
// // // connectCloudinary();
// // // //middlewares
// // // app.use(express.json());
// // // app.use(cors());

// // // //api endpoints
// // // // app.use("/api/admin", adminRouter);
// // // // // localhost:4000/api/admin/add-lawyer
// // // app.use((req, res) => {
// // //   res.status(404).json({ success: false, message: "Route not found" });
// // // });

// // // app.get("/", (req, res) => {
// // //   res.send("API is running fine...");
// // // });

// // // app.listen(port, () => console.log("Server Started", port));


// // import express from "express";
// // import cors from "cors";
// // import "dotenv/config";
// // import connectDB from "./config/mongodb.js";
// // import connectCloudinary from "./config/cloudinary.js";
// // import adminRouter from "./routes/adminRoute.js";

// // connectDB();
// // connectCloudinary();

// // const app = express();
// // const port = process.env.PORT || 4000;

// // app.use(express.json());
// // app.use(cors());

// // app.use("/api/admin", adminRouter);

// // app.get("/", (req, res) => {
// //   res.send("API is running fine...");
// // });

// // app.listen(port, () => console.log(`Server running on port ${port}`));


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();

// const lawyerRoutes = require('./routes/lawyerRoutes');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // API Routes
// app.use('/api/lawyers', lawyerRoutes);

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import lawyerRoutes from './routes/lawyerRoute.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// // API Routes
// app.use('/api/lawyers', lawyerRoutes);
// const lawyerRoutes = require('./routes/lawyerRoutes');
app.use('/api/lawyers', lawyerRoutes);

// Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
