// // // import React from 'react';
// // // import './Header.css'; // Create a CSS file for styling

// // // const Header = () => {
// // //   return (
// // //     <header className="header">
// // //       <div className="logo">Courtify</div>
// // //       <nav className="nav-links">
// // //         <a href="/">Home</a>
// // //         <a href="/about">About Us</a>
// // //         <a href="/contact">Contact</a>
// // //         <img src="" alt="" />
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const Header = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <header className="header flex items-center justify-between py-4 px-8 bg-white shadow-md">
// //       {/* Logo */}
// //       <div className="logo text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
// //         Courtify
// //       </div>

// //       {/* Navigation Links */}
// //       <nav className="nav-links flex gap-6 items-center">
// //         <a href="/" className="text-gray-700 hover:text-blue-600">
// //           Home
// //         </a>
// //         <a href="/about" className="text-gray-700 hover:text-blue-600">
// //           About Us
// //         </a>
// //         <a href="/contact" className="text-gray-700 hover:text-blue-600">
// //           Contact
// //         </a>

// //         {/* Profile Image */}
// //         <img
// //           src="https://via.placeholder.com/40" // Replace with actual profile image URL
// //           alt="Lawyer Profile"
// //           className="w-10 h-10 rounded-full cursor-pointer"
// //           onClick={() => navigate("/profile")} // Navigate to the profile page
// //         />
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import courtifyLogo from "../assets/courtifylogo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header flex items-center justify-between py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-600 shadow-md text-white">
      {/* Logo */}
      <div
        className="logo text-2xl font-extrabold cursor-pointer hover:text-gray-200 transition-all duration-300"
        onClick={() => navigate("/")}
      >
       <img className="img" src={courtifyLogo} alt="Courtify Logo" />
        {/* Courtify */}
      </div>

      {/* Navigation Links */}
      <nav className="nav-links flex gap-8 items-center">
        <a
          href="/"
          className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all duration-300"
        >
          About Us
        </a>
        <a
          href="/contact"
          className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all duration-300"
        >
          Contact
        </a>

        {/* Profile Image */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <img
            src="https://via.placeholder.com/40" // Replace with the lawyer's profile image URL
            alt="Lawyer Profile"
            className="w-10 h-10 rounded-full border-2 border-white hover:scale-105 transition-transform duration-300"
          />
          <span className="text-lg font-medium hover:text-gray-200 transition-all duration-300">
            Profile
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;


// import React from "react";
// import { useNavigate } from "react-router-dom";


// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <header
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "16px 32px",
//         background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
//         color: "white",
//       }}
//     >
//       {/* Logo */}
//       <div
//         style={{ fontSize: "1.5rem", fontWeight: "800", cursor: "pointer" }}
//         onClick={() => navigate("/")}
//       >
//         Courtify
//       </div>

//       {/* Navigation Links */}
//       <nav style={{ display: "flex", gap: "16px" }}>
//         <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
//           Home
//         </a>
//         <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>
//           About Us
//         </a>
//         <a href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
//           Contact
//         </a>

//         {/* Profile Image */}
//         <div
//           onClick={() => navigate("/profile")}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//             cursor: "pointer",
//           }}
//         >
//           <img
//             src="https://via.placeholder.com/40"
//             alt="Profile"
//             style={{
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               border: "2px solid white",
//             }}
//           />
//           <span>Profile</span>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
