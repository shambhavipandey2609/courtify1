// // // // import validator from "validator";
// // // // import { v2 as cloudinary } from "cloudinary";
// // // // import bcrypt from "bcrypt";
// // // // import lawyerModel from "../models/lawyerModel.js";

// // // // //API for adding doctor
// // // // const addLawyer = async (req, res) => {
// // // //   try {
// // // //     const {
// // // //       name,
// // // //       email,
// // // //       password,
// // // //       speciality,
// // // //       degree,
// // // //       experience,
// // // //       about,
// // // //       fees,
// // // //       address,
// // // //     } = req.body;
// // // //     const imageFile = req.file;
// // // //     //checking for all data to add doctor
// // // //     if (
// // // //       !name ||
// // // //       !email ||
// // // //       !password ||
// // // //       !speciality ||
// // // //       !degree ||
// // // //       !experience ||
// // // //       !about ||
// // // //       !fees ||
// // // //       !address ||
// // // //       !imageFile
// // // //     ) {
// // // //       return res.json({ success: false, message: "Missing details" });
// // // //     }
// // // //     //validating email formal
// // // //     if (!validator.isEmail(email)) {
// // // //       return res.json({
// // // //         success: false,
// // // //         message: "Please enter a valid email",
// // // //       });
// // // //     }

// // // //     //validating strong password
// // // //     if (password.length < 8) {
// // // //       return res.json({ success: false, message: "Enter strong password" });
// // // //     }
// // // //     //hashing lawyer password
// // // //     const salt = await bcrypt.genSalt(10);
// // // //     const hashedPassword = await bcrypt.hash(password, salt);

// // // //     //upload image to cloudinary
// // // //     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
// // // //       resource_type: "image",
// // // //     });
// // // //     const imageUrl = imageUpload.secure_url;

// // // //     const lawyerData = {
// // // //       name,
// // // //       email,
// // // //       password: hashedPassword,
// // // //       image: imageUrl,
// // // //       speciality,
// // // //       degree,
// // // //       experience,
// // // //       about,
// // // //       fees,
// // // //       address: JSON.parse(address),
// // // //       date: Date.now(),
// // // //     };
// // // //     const newLawyer = new lawyerModel(lawyerData);
// // // //     await newLawyer.save();

// // // //     res.json({ success: true, message: "Lawyer Added" });
// // // //   } catch (error) {
// // // //     console.log(error);
// // // //     res.json({ success: false, message: "abc" });
// // // //   }
// // // // };

// // // // export { addLawyer };

// // // // // // import validator from "validator";
// // // // // // import { v2 as cloudinary } from "cloudinary";
// // // // // // import bcrypt from "bcrypt";
// // // // // // import lawyerModel from "../models/lawyerModel.js";
// // // // // // import multer from "multer";
// // // // // // const addLawyer = async (req, res) => {
// // // // // //   try {
// // // // // //     const {
// // // // // //       name,
// // // // // //       email,
// // // // // //       password,
// // // // // //       speciality,
// // // // // //       degree,
// // // // // //       experience,
// // // // // //       about,
// // // // // //       fees,
// // // // // //       address,
// // // // // //     } = req.body;
// // // // // //     const imageFile = req.file;

// // // // // //     // Check if all required fields are provided
// // // // // //     if (
// // // // // //       !name ||
// // // // // //       !email ||
// // // // // //       !password ||
// // // // // //       !speciality ||
// // // // // //       !degree ||
// // // // // //       !experience ||
// // // // // //       !about ||
// // // // // //       !fees ||
// // // // // //       !address ||
// // // // // //       !imageFile
// // // // // //     ) {
// // // // // //       return res
// // // // // //         .status(400)
// // // // // //         .json({ success: false, message: "Missing details" });
// // // // // //     }

// // // // // //     // Validate email format
// // // // // //     if (!validator.isEmail(email)) {
// // // // // //       return res.status(400).json({
// // // // // //         success: false,
// // // // // //         message: "Please enter a valid email",
// // // // // //       });
// // // // // //     }

// // // // // //     // Check if email is already registered
// // // // // //     const existingLawyer = await lawyerModel.findOne({ email });
// // // // // //     if (existingLawyer) {
// // // // // //       return res
// // // // // //         .status(400)
// // // // // //         .json({ success: false, message: "Email already registered" });
// // // // // //     }

// // // // // //     // Validate strong password
// // // // // //     if (password.length < 8) {
// // // // // //       return res
// // // // // //         .status(400)
// // // // // //         .json({ success: false, message: "Enter a strong password" });
// // // // // //     }

// // // // // //     // Validate numerical fields
// // // // // //     if (isNaN(fees) || fees <= 0) {
// // // // // //       return res
// // // // // //         .status(400)
// // // // // //         .json({ success: false, message: "Invalid fees amount" });
// // // // // //     }
// // // // // //     if (isNaN(experience) || experience < 0) {
// // // // // //       return res
// // // // // //         .status(400)
// // // // // //         .json({ success: false, message: "Invalid experience value" });
// // // // // //     }

// // // // // //     // Hash lawyer password
// // // // // //     const salt = await bcrypt.genSalt(10);
// // // // // //     const hashedPassword = await bcrypt.hash(password, salt);

// // // // // //     // Upload image to Cloudinary
// // // // // //     if (!imageFile || !imageFile.path) {
// // // // // //       return res
// // // // // //         .status(400)
// // // // // //         .json({ success: false, message: "Image file is missing" });
// // // // // //     }
// // // // // //     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
// // // // // //       resource_type: "image",
// // // // // //     });
// // // // // //     const imageUrl = imageUpload.secure_url;

// // // // // //     // Create lawyer data object
// // // // // //     const lawyerData = {
// // // // // //       name,
// // // // // //       email,
// // // // // //       password: hashedPassword,
// // // // // //       image: imageUrl,
// // // // // //       speciality,
// // // // // //       degree,
// // // // // //       experience,
// // // // // //       about,
// // // // // //       fees,
// // // // // //       address: JSON.parse(address),
// // // // // //       // available: true, // Set default availability
// // // // // //       date: new Date(),
// // // // // //     };

// // // // // //     // Save to database
// // // // // //     const newLawyer = new lawyerModel(lawyerData);
// // // // // //     await newLawyer.save();

// // // // // //     res
// // // // // //       .status(201)
// // // // // //       .json({ success: true, message: "Lawyer added successfully" });
// // // // // //   } catch (error) {
// // // // // //     console.error(error);
// // // // // //     res.status(500).json({
// // // // // //       success: false,
// // // // // //       message: error.message || "Internal server error",
// // // // // //     });
// // // // // //   }
// // // // // // };

// // // // // // export { addLawyer };

// // // // // import validator from "validator";
// // // // // import { v2 as cloudinary } from "cloudinary";
// // // // // import bcrypt from "bcrypt";
// // // // // import lawyerModel from "../models/lawyerModel.js";
// // // // // import multer from "multer";
// // // // // import fs from "fs";

// // // // // // Configure Multer for file uploads
// // // // // const upload = multer({ dest: "uploads/" });

// // // // // const addLawyer = async (req, res) => {
// // // // //   try {
// // // // //     const {
// // // // //       name,
// // // // //       email,
// // // // //       password,
// // // // //       speciality,
// // // // //       degree,
// // // // //       experience,
// // // // //       about,
// // // // //       fees,
// // // // //       address,
// // // // //     } = req.body;

// // // // //     const imageFile = req.file; // Access the uploaded image file
// // // // //     console.log("Uploaded File:", req.file);

// // // // //     // Validate required fields
// // // // //     if (
// // // // //       !name ||
// // // // //       !email ||
// // // // //       !password ||
// // // // //       !speciality ||
// // // // //       !degree ||
// // // // //       !experience ||
// // // // //       !about ||
// // // // //       !fees ||
// // // // //       !address ||
// // // // //       !imageFile
// // // // //     ) {
// // // // //       return res
// // // // //         .status(400)
// // // // //         .json({ success: false, message: "All fields are required." });
// // // // //     }

// // // // //     // Validate email format
// // // // //     if (!validator.isEmail(email)) {
// // // // //       return res.status(400).json({
// // // // //         success: false,
// // // // //         message: "Please enter a valid email address.",
// // // // //       });
// // // // //     }

// // // // //     // Check if email is already registered
// // // // //     const existingLawyer = await lawyerModel.findOne({ email });
// // // // //     if (existingLawyer) {
// // // // //       return res
// // // // //         .status(400)
// // // // //         .json({ success: false, message: "This email is already registered." });
// // // // //     }

// // // // //     // Validate strong password
// // // // //     if (password.length < 8) {
// // // // //       return res.status(400).json({
// // // // //         success: false,
// // // // //         message: "Password must be at least 8 characters long.",
// // // // //       });
// // // // //     }

// // // // //     // Validate numerical fields
// // // // //     if (isNaN(fees) || fees <= 0) {
// // // // //       return res
// // // // //         .status(400)
// // // // //         .json({ success: false, message: "Invalid fees amount." });
// // // // //     }
// // // // //     if (isNaN(experience) || experience < 0) {
// // // // //       return res
// // // // //         .status(400)
// // // // //         .json({ success: false, message: "Invalid experience value." });
// // // // //     }

// // // // //     // Hash the password for security
// // // // //     const salt = await bcrypt.genSalt(10);
// // // // //     const hashedPassword = await bcrypt.hash(password, salt);

// // // // //     // Upload image to Cloudinary
// // // // //     if (!imageFile || !imageFile.path) {
// // // // //       return res
// // // // //         .status(400)
// // // // //         .json({ success: false, message: "Image file is missing." });
// // // // //     }
// // // // //     // const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
// // // // //     //   resource_type: "image",
// // // // //     // });
// // // // //     // const imageUrl = imageUpload.secure_url; // Cloudinary image URL
// // // // //     // try {
// // // // //     //   const imageUpload = await cloudinary.uploader.upload(
// // // // //     //     "C:/Users/pande/OneDrive/Desktop/courtify/frontend/src/assets/Cyber_Lawyer.png",
// // // // //     //     {
// // // // //     //       resource_type: "image",
// // // // //     //     }
// // // // //     //   );
// // // // //     //   console.log(imageUpload);
// // // // //     // } catch (uploadError) {
// // // // //     //   console.error("Cloudinary Upload Error:", uploadError);
// // // // //     //   return res.status(500).json({
// // // // //     //     success: false,
// // // // //     //     message: uploadError.message || "Image upload failed.",
// // // // //     //   });
// // // // //     // }

// // // // //     try {
// // // // //       const imageUpload = await cloudinary.uploader.upload(
// // // // //         "C:/Users/pande/OneDrive/Desktop/courtify/frontend/src/assets/Cyber_Lawyer.png",
// // // // //         {
// // // // //           resource_type: "image",
// // // // //         }
// // // // //       );
// // // // //       const imageUrl = imageUpload.secure_url; // Cloudinary URL for the image
// // // // //     } catch (uploadError) {
// // // // //       console.error("Cloudinary Upload Error:", uploadError);
// // // // //       return res
// // // // //         .status(500)
// // // // //         .json({ success: false, message: "Image upload failed." });
// // // // //     }

// // // // //     // Remove the uploaded file from the server after uploading to Cloudinary
// // // // //     fs.unlinkSync(imageFile.path);

// // // // //     // Parse the address from JSON string to object
// // // // //     let parsedAddress;
// // // // //     try {
// // // // //       parsedAddress = JSON.parse(address);
// // // // //     } catch (error) {
// // // // //       return res
// // // // //         .status(400)
// // // // //         .json({ success: false, message: "Invalid address format." });
// // // // //     }

// // // // //     // Create lawyer data object
// // // // //     const lawyerData = {
// // // // //       name,
// // // // //       email,
// // // // //       password: hashedPassword,
// // // // //       image: imageUrl,
// // // // //       speciality,
// // // // //       degree,
// // // // //       experience,
// // // // //       about,
// // // // //       fees,
// // // // //       address: parsedAddress,
// // // // //       date: new Date(),
// // // // //     };

// // // // //     // Save the lawyer to the database
// // // // //     const newLawyer = new lawyerModel(lawyerData);
// // // // //     await newLawyer.save();

// // // // //     // Send success response
// // // // //     res
// // // // //       .status(201)
// // // // //       .json({ success: true, message: "Lawyer added successfully." });
// // // // //   } catch (error) {
// // // // //     console.error(error);

// // // // //     // Send error response
// // // // //     res.status(500).json({
// // // // //       success: false,
// // // // //       message: error.message || "Internal server error.",
// // // // //     });
// // // // //   }
// // // // // };

// // // // // export { addLawyer };

// // // // // // Multer middleware for handling file uploads
// // // // // export const uploadMiddleware = upload.single("image");



// // // import validator from "validator";
// // // import { v2 as cloudinary } from "cloudinary";
// // // import bcrypt from "bcrypt";
// // // import lawyerModel from "../models/lawyerModel.js";

// // // // API for adding a lawyer
// // // const addLawyer = async (req, res) => {
// // //   try {
// // //     const {
// // //       name,
// // //       email,
// // //       password,
// // //       speciality,
// // //       degree,
// // //       experience,
// // //       about,
// // //       fees,
// // //       address,
// // //     } = req.body;
// // //     const imageFile = req.file;

// // //     // Check if all required fields are provided
// // //     if (
// // //       !name ||
// // //       !email ||
// // //       !password ||
// // //       !speciality ||
// // //       !degree ||
// // //       !experience ||
// // //       !about ||
// // //       !fees ||
// // //       !address ||
// // //       !imageFile
// // //     ) {
// // //       return res.status(400).json({ success: false, message: "Missing details" });
// // //     }

// // //     // Validate email format
// // //     if (!validator.isEmail(email)) {
// // //       return res.status(400).json({ success: false, message: "Invalid email format" });
// // //     }

// // //     // Validate password strength
// // //     if (password.length < 8) {
// // //       return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
// // //     }

// // //     // Hash the password
// // //     const salt = await bcrypt.genSalt(10);
// // //     const hashedPassword = await bcrypt.hash(password, salt);

// // //     // Upload the image to Cloudinary
// // //     // const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
// // //     //   resource_type: "image",
// // //     // });
// // //     cloudinary.config({
// // //         cloud_name: "my_cloud_name",
// // //         api_key: "my_api_key",
// // //         api_secret: "my_api_secret",
// // //       });
      
// // //       (async () => {
// // //         try {
// // //           const result = await cloudinary.uploader.upload("./frontend/src/assets/Cyber_Lawyer.png");
// // //           console.log("Image uploaded successfully:", result.secure_url);
// // //         } catch (error) {
// // //           console.error("Cloudinary Error:", error);
// // //         }
// // //       })();
// // //     const imageUrl = imageUpload.secure_url;

// // //     // Parse address JSON string if necessary
// // //     let parsedAddress;
// // //     try {
// // //       parsedAddress = typeof address === "string" ? JSON.parse(address) : address;
// // //     } catch (error) {
// // //       return res.status(400).json({ success: false, message: "Invalid address format" });
// // //     }

// // //     // Prepare lawyer data
// // //     const lawyerData = {
// // //       name,
// // //       email,
// // //       password: hashedPassword,
// // //       image: imageUrl,
// // //       speciality,
// // //       degree,
// // //       experience,
// // //       about,
// // //       fees,
// // //       address: parsedAddress,
// // //       date: new Date(),
// // //     };

// // //     // Save lawyer data to the database
// // //     const newLawyer = new lawyerModel(lawyerData);
// // //     await newLawyer.save();

// // //     res.status(201).json({ success: true, message: "Lawyer added successfully" });
// // //   } catch (error) {
// // //     console.error("Error adding lawyer:", error);
// // //     res.status(500).json({ success: false, message: "Internal server error" });
// // //   }
// // // };

// // // export { addLawyer };



// // import { v2 as cloudinary } from "cloudinary";
// // import bcrypt from "bcrypt";
// // import validator from "validator";
// // import lawyerModel from "../models/lawyerModel.js";

// // // Configure Cloudinary
// // cloudinary.config({
// //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //   api_key: process.env.CLOUDINARY_API_KEY,
// //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // // API for adding a lawyer
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
// //     const imageFile = req.file; // multer provides this

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
// //       return res.status(400).json({ success: false, message: "Missing details abc" });
// //     }

// //     if (!validator.isEmail(email)) {
// //       return res.status(400).json({ success: false, message: "Invalid email format" });
// //     }

// //     if (password.length < 8) {
// //       return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
// //     }

// //     const salt = await bcrypt.genSalt(10);
// //     const hashedPassword = await bcrypt.hash(password, salt);

// //     // Upload image to Cloudinary
// //     // const imageUpload = await cloudinary.uploader.upload_stream(
// //     //   { resource_type: "image" },
// //     //   (error, result) => {
// //     //     if (error) {
// //     //       throw error;
// //     //     }
// //     //     return result;
// //     //   }
// //     // );
// //     const imageUpload = await new Promise((resolve, reject) => {
// //         const uploadStream = cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
// //           if (error) reject(error);
// //           resolve(result);
// //         });
      
// //         // Pipe the file buffer to Cloudinary
// //         streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
// //       });
// //       const imageUrl = imageUpload.secure_url;
      
// //     // const imageUrl = imageUpload.secure_url;

// //     let parsedAddress;
// //     try {
// //       parsedAddress = typeof address === "string" ? JSON.parse(address) : address;
// //     } catch {
// //       return res.status(400).json({ success: false, message: "Invalid address format" });
// //     }

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
// //       address: parsedAddress,
// //       date: new Date(),
// //     };

// //     const newLawyer = new lawyerModel(lawyerData);
// //     await newLawyer.save();

// //     res.status(201).json({ success: true, message: "Lawyer added successfully" });
// //   } catch (error) {
// //     console.error("Error adding lawyer:", error);
// //     res.status(500).json({ success: false, message: "Internal server error" });
// //   }
// // };

// // export { addLawyer };


// import { v2 as cloudinary } from "cloudinary";
// import bcrypt from "bcrypt";
// import validator from "validator";
// import lawyerModel from "../models/lawyerModel.js";
// import streamifier from "streamifier";
// // API for adding a lawyer
// const addLawyer = async (req, res) => {
//   try {
//     const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
//     const imageFile = req.file;

//     // Validate fields
//     if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile) {
//       return res.status(400).json({ success: false, message: "Missing details" });
//     }
//     if (!validator.isEmail(email)) return res.status(400).json({ success: false, message: "Invalid email format" });
//     if (password.length < 8) return res.status(400).json({ success: false, message: "Password too short" });

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Upload image to Cloudinary
//     const imageUpload = await new Promise((resolve, reject) => {
//       const uploadStream = cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
//         if (error) reject(error);
//         resolve(result);
//       });
//       streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
//     });

//     const lawyerData = {
//       name,
//       email,
//       password: hashedPassword,
//       image: imageUpload.secure_url,
//       speciality,
//       degree,
//       experience,
//       about,
//       fees,
//       address: JSON.parse(address),
//       date: new Date(),
//     };

//     const newLawyer = new lawyerModel(lawyerData);
//     await newLawyer.save();

//     res.status(201).json({ success: true, message: "Lawyer added successfully" });
//   } catch (error) {
//     console.error("Error adding lawyer:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// export { addLawyer };


import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import validator from "validator";
import lawyerModel from "../models/lawyerModel.js";
import streamifier from "streamifier";

// Controller for adding a lawyer
const addLawyer = async (req, res) => {
  try {
    const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
    const imageFile = req.file;

    // Validate input
    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile) {
      return res.status(400).json({ success: false, message: "Missing details" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password too short" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Upload image to Cloudinary
    const imageUpload = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
    });

    // Parse address if necessary
    let parsedAddress;
    try {
      parsedAddress = typeof address === "string" ? JSON.parse(address) : address;
    } catch {
      return res.status(400).json({ success: false, message: "Invalid address format" });
    }

    // Save lawyer data to the database
    const lawyerData = {
      name,
      email,
      password: hashedPassword,
      image: imageUpload.secure_url,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: parsedAddress,
      date: new Date(),
    };

    const newLawyer = new lawyerModel(lawyerData);
    await newLawyer.save();

    res.status(201).json({ success: true, message: "Lawyer added successfully" });
  } catch (error) {
    console.error("Error adding lawyer:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { addLawyer };
