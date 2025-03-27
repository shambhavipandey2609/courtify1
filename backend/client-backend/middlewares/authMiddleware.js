// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import User from "../models/userModel.js";

// dotenv.config();
// // client-backend/middlewares/authMiddleware.js

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "") || 
//                 req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ 
//       message: "Client access denied. No token provided." 
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.CLIENT_JWT_SECRET);
    
//     // Verify this is a client token
//     if (decoded.role !== "client") {
//       return res.status(403).json({ 
//         message: "Invalid token type. Client token required." 
//       });
//     }
    
//     req.client = decoded; // Store client data
//     next();
//   } catch (err) {
//     res.status(401).json({ 
//       message: "Invalid client token." 
//     });
//   }
// };
// export const authenticateUser = async (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token)
//     return res
//       .status(401)
//       .json({ message: "Access Denied. No token provided." });

//   try {
//     const decoded = jwt.verify(
//       token.replace("Bearer ", ""),
//       process.env.JWT_SECRET
//     );
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: "Invalid token." });
//   }
// };


// client-backend/middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

export const clientAuth = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "") || 
                req.cookies.token;

  if (!token) {
    return res.status(401).json({ 
      message: "Client access denied. No token provided." 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.CLIENT_JWT_SECRET);
    
    // Verify this is a client token
    if (decoded.role !== "client") {
      return res.status(403).json({ 
        message: "Invalid token type. Client token required." 
      });
    }
    
    req.client = decoded; // Store client data
    next();
  } catch (err) {
    res.status(401).json({ 
      message: "Invalid client token." 
    });
  }
};

export const authenticateUser = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "") || 
                req.cookies.token;

  if (!token) {
    return res.status(401).json({ 
      message: "Access Denied. No token provided." 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Optional: Verify user exists in database
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ 
        message: "User not found." 
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ 
      message: "Invalid token." 
    });
  }
};