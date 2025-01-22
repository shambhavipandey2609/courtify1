// // import express from "express";
// // import { addLawyer } from "../contollers/adminController.js";
// // import upload from "../middlewares/multer.js";

// // const adminRouter = express.Router();

// // adminRouter.post("/add-lawyer", upload.single("image"), addLawyer);

// // export default adminRouter;


// import express from "express";
// import upload from "../middlewares/multer.js"; // Import the multer configuration
// import { addLawyer } from "../contollers/adminController.js"; // Import the controller function

// const adminRouter = express.Router();

// // Define the POST route for adding a lawyer
// adminRouter.post(
//   "/add-lawyer",
//   upload.single("image"), // Use the upload middleware
//   addLawyer // Use the controller function
// );

// export default adminRouter;

import express from "express";
import upload from "../middlewares/multer.js";
import { addLawyer } from "../contollers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/add-lawyer", upload.single("image"), addLawyer);

export default adminRouter;
