// // // import multer from "multer";

// // // const storage = multer.diskStorage({
// // //   filename: function (req, file, callback) {
// // //     callback(null, file.originalname);
// // //   },
// // // });

// // // const upload = multer({ storage });

// // // export default upload;


// // // import multer from "multer";
// // // import path from "path";

// // // // Multer configuration for in-memory storage
// // // const storage = multer.memoryStorage(); // No local file storage

// // // const fileFilter = (req, file, callback) => {
// // //   // Accept only specific file types (e.g., images)
// // //   const allowedFileTypes = /jpeg|jpg|png/;
// // //   const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
// // //   const mimetype = allowedFileTypes.test(file.mimetype);

// // //   if (extname && mimetype) {
// // //     callback(null, true);
// // //   } else {
// // //     callback(new Error("Only images are allowed"), false);
// // //   }
// // // };

// // // const upload = multer({
// // //   storage,
// // //   fileFilter,
// // //   limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
// // // });

// // // export default upload;

// // import express from "express";
// // import upload from "../middlewares/multer.js"; // Ensure this path is correct
// // import { addLawyer } from "../contollers/adminController.js";

// // const adminRouter = express.Router();

// // adminRouter.post(
// //   "/add-lawyer",
// //   upload.single("image"),
// //   (err, req, res, next) => {
// //     if (err instanceof multer.MulterError) {
// //       return res.status(400).json({ success: false, message: err.message });
// //     } else if (err) {
// //       return res.status(500).json({ success: false, message: "File upload error" });
// //     }
// //     next();
// //   },
// //   addLawyer
// // );

// // export default adminRouter;


// import multer from "multer";
// import path from "path";

// // Multer configuration for in-memory storage
// const storage = multer.memoryStorage(); // Files are stored in memory as buffer

// // File filter for validating uploaded file types
// const fileFilter = (req, file, callback) => {
//   const allowedFileTypes = /jpeg|jpg|png/;
//   const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedFileTypes.test(file.mimetype);

//   if (extname && mimetype) {
//     callback(null, true);
//   } else {
//     callback(new Error("Only images are allowed"), false);
//   }
// };

// // Initialize Multer with configuration
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
// });

// export default upload;


import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

export default upload;

