// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token) {
//     return res.status(401).json({ error: "Access Denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(
//       token.replace("Bearer ", ""),
//       process.env.JWT_SECRET
//     );
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: "Invalid token." });
//   }
// };

// // const jwt = require("jsonwebtoken");
// // import jwt from "jsonwebtoken";

// // module.exports = (req, res, next) => {
// //   const token = req.cookies.token; // Read from cookie instead of Authorization header

// //   if (!token) {
// //     return res.status(401).json({ error: "Access Denied. No token provided." });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ error: "Invalid token." });
// //   }
// // };

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access Denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token." });
  }
};

export default authMiddleware;
