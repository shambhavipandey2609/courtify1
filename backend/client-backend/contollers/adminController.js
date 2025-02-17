import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import lawyerModel from "../models/lawyerModel.js";

//API for adding doctor
const addLawyer = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;
    //checking for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address ||
      !imageFile
    ) {
      return res.json({ success: false, message: "Missing details" });
    }
    //validating email formal
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    //validating strong password
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter strong password" });
    }
    //hashing lawyer password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const lawyerData = {
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newLawyer = new lawyerModel(lawyerData);
    await newLawyer.save();

    res.json({ success: true, message: "Lawyer Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "abc" });
  }
};

export { addLawyer };

// // import validator from "validator";
// // import { v2 as cloudinary } from "cloudinary";
// // import bcrypt from "bcrypt";
// // import lawyerModel from "../models/lawyerModel.js";
// // import multer from "multer";
// // const addLawyer = async (req, res) => {
// //   try {
// //     const {
// //       name,
// //       email,
// //       password,
// //       speciality,
// //       degree,
// //       experience,
// //       about,
// //       fees,
// //       address,
// //     } = req.body;
// //     const imageFile = req.file;

// //     // Check if all required fields are provided
// //     if (
// //       !name ||
// //       !email ||
// //       !password ||
// //       !speciality ||
// //       !degree ||
// //       !experience ||
// //       !about ||
// //       !fees ||
// //       !address ||
// //       !imageFile
// //     ) {
// //       return res
// //         .status(400)
// //         .json({ success: false, message: "Missing details" });
// //     }

// //     // Validate email format
// //     if (!validator.isEmail(email)) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Please enter a valid email",
// //       });
// //     }

// //     // Check if email is already registered
// //     const existingLawyer = await lawyerModel.findOne({ email });
// //     if (existingLawyer) {
// //       return res
// //         .status(400)
// //         .json({ success: false, message: "Email already registered" });
// //     }

// //     // Validate strong password
// //     if (password.length < 8) {
// //       return res
// //         .status(400)
// //         .json({ success: false, message: "Enter a strong password" });
// //     }

// //     // Validate numerical fields
// //     if (isNaN(fees) || fees <= 0) {
// //       return res
// //         .status(400)
// //         .json({ success: false, message: "Invalid fees amount" });
// //     }
// //     if (isNaN(experience) || experience < 0) {
// //       return res
// //         .status(400)
// //         .json({ success: false, message: "Invalid experience value" });
// //     }

// //     // Hash lawyer password
// //     const salt = await bcrypt.genSalt(10);
// //     const hashedPassword = await bcrypt.hash(password, salt);

// //     // Upload image to Cloudinary
// //     if (!imageFile || !imageFile.path) {
// //       return res
// //         .status(400)
// //         .json({ success: false, message: "Image file is missing" });
// //     }
// //     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
// //       resource_type: "image",
// //     });
// //     const imageUrl = imageUpload.secure_url;

// //     // Create lawyer data object
// //     const lawyerData = {
// //       name,
// //       email,
// //       password: hashedPassword,
// //       image: imageUrl,
// //       speciality,
// //       degree,
// //       experience,
// //       about,
// //       fees,
// //       address: JSON.parse(address),
// //       // available: true, // Set default availability
// //       date: new Date(),
// //     };

// //     // Save to database
// //     const newLawyer = new lawyerModel(lawyerData);
// //     await newLawyer.save();

// //     res
// //       .status(201)
// //       .json({ success: true, message: "Lawyer added successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({
// //       success: false,
// //       message: error.message || "Internal server error",
// //     });
// //   }
// // };

// // export { addLawyer };

// import validator from "validator";
// import { v2 as cloudinary } from "cloudinary";
// import bcrypt from "bcrypt";
// import lawyerModel from "../models/lawyerModel.js";
// import multer from "multer";
// import fs from "fs";

// // Configure Multer for file uploads
// const upload = multer({ dest: "uploads/" });

// const addLawyer = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       password,
//       speciality,
//       degree,
//       experience,
//       about,
//       fees,
//       address,
//     } = req.body;

//     const imageFile = req.file; // Access the uploaded image file
//     console.log("Uploaded File:", req.file);

//     // Validate required fields
//     if (
//       !name ||
//       !email ||
//       !password ||
//       !speciality ||
//       !degree ||
//       !experience ||
//       !about ||
//       !fees ||
//       !address ||
//       !imageFile
//     ) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required." });
//     }

//     // Validate email format
//     if (!validator.isEmail(email)) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter a valid email address.",
//       });
//     }

//     // Check if email is already registered
//     const existingLawyer = await lawyerModel.findOne({ email });
//     if (existingLawyer) {
//       return res
//         .status(400)
//         .json({ success: false, message: "This email is already registered." });
//     }

//     // Validate strong password
//     if (password.length < 8) {
//       return res.status(400).json({
//         success: false,
//         message: "Password must be at least 8 characters long.",
//       });
//     }

//     // Validate numerical fields
//     if (isNaN(fees) || fees <= 0) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid fees amount." });
//     }
//     if (isNaN(experience) || experience < 0) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid experience value." });
//     }

//     // Hash the password for security
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Upload image to Cloudinary
//     if (!imageFile || !imageFile.path) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Image file is missing." });
//     }
//     // const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//     //   resource_type: "image",
//     // });
//     // const imageUrl = imageUpload.secure_url; // Cloudinary image URL
//     // try {
//     //   const imageUpload = await cloudinary.uploader.upload(
//     //     "C:/Users/pande/OneDrive/Desktop/courtify/frontend/src/assets/Cyber_Lawyer.png",
//     //     {
//     //       resource_type: "image",
//     //     }
//     //   );
//     //   console.log(imageUpload);
//     // } catch (uploadError) {
//     //   console.error("Cloudinary Upload Error:", uploadError);
//     //   return res.status(500).json({
//     //     success: false,
//     //     message: uploadError.message || "Image upload failed.",
//     //   });
//     // }

//     try {
//       const imageUpload = await cloudinary.uploader.upload(
//         "C:/Users/pande/OneDrive/Desktop/courtify/frontend/src/assets/Cyber_Lawyer.png",
//         {
//           resource_type: "image",
//         }
//       );
//       const imageUrl = imageUpload.secure_url; // Cloudinary URL for the image
//     } catch (uploadError) {
//       console.error("Cloudinary Upload Error:", uploadError);
//       return res
//         .status(500)
//         .json({ success: false, message: "Image upload failed." });
//     }

//     // Remove the uploaded file from the server after uploading to Cloudinary
//     fs.unlinkSync(imageFile.path);

//     // Parse the address from JSON string to object
//     let parsedAddress;
//     try {
//       parsedAddress = JSON.parse(address);
//     } catch (error) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid address format." });
//     }

//     // Create lawyer data object
//     const lawyerData = {
//       name,
//       email,
//       password: hashedPassword,
//       image: imageUrl,
//       speciality,
//       degree,
//       experience,
//       about,
//       fees,
//       address: parsedAddress,
//       date: new Date(),
//     };

//     // Save the lawyer to the database
//     const newLawyer = new lawyerModel(lawyerData);
//     await newLawyer.save();

//     // Send success response
//     res
//       .status(201)
//       .json({ success: true, message: "Lawyer added successfully." });
//   } catch (error) {
//     console.error(error);

//     // Send error response
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal server error.",
//     });
//   }
// };

// export { addLawyer };

// // Multer middleware for handling file uploads
// export const uploadMiddleware = upload.single("image");
