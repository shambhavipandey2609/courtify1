// // import React from "react";
// // import "./Header.css";
// // import logo from "../assets/courtifylogo.png";

// // const Header = () => {
// //   return (
// //     <header className="header">
// //       <div className="header__logo">
// //         <img src={logo} alt="Courtify Logo" />
// //         {/* <h1>Courtify</h1> */}
// //       </div>
// //       <nav className="header__nav">
// //         <a href="/" className="header__link">
// //           Home
// //         </a>
// //         {/* <a href="/dashboard" className="header__link">Dashboard</a> */}
// //         <a href="/contact" className="header__link">
// //           Contact
// //         </a>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;

// // import React from "react";
// // import "./Header.css";
// // import logo from "../assets/courtifylogo.png";

// // const LawStudentHeader = () => {
// //   return (
// //     <header className="header">
// //       <div className="header__logo">
// //         <img src={logo} alt="Courtify Logo" />
// //       </div>
// //       <nav className="header__nav">
// //         <a href="/" className="header__link">
// //           Home
// //         </a>
// //         <a href="/internships" className="header__link">
// //           Internships
// //         </a>
// //         <a href="/resources" className="header__link">
// //           Resources
// //         </a>
// //         <a href="/contact" className="header__link">
// //           Contact
// //         </a>
// //         <a href="/login" className="header__link header__login">
// //           Create Account
// //         </a>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default LawStudentHeader;

// // import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Header.css";
// import courtifyLogo from "../assets/courtifylogo.png";

// const LawStudentHeader = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = localStorage.getItem("isAuthenticated");

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("userEmail");
//     navigate("/login");
//   };

//   return (
//     <header className="header flex items-center justify-between py-4 px-8 bg-gradient-to-r from-green-500 to-blue-600 shadow-md text-white">
//       {/* Logo */}
//       <div
//         className="logo text-2xl font-extrabold cursor-pointer hover:text-gray-200 transition-all duration-300"
//         onClick={() => navigate("/")}
//       >
//         <img className="img" src={courtifyLogo} alt="Courtify Logo" />
//       </div>

//       {/* Navigation Links */}
//       <nav className="nav-links flex gap-8 items-center">
//         <a
//           href="/"
//           className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all duration-300"
//         >
//           Home
//         </a>
//         {/* <a
//           href="/internships"
//           className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all duration-300"
//         >
//           Internships
//         </a>
//         <a
//           href="/resources"
//           className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all duration-300"
//         >
//           Resources
//         </a>
//         <a
//           href="/contact"
//           className="text-lg font-medium hover:underline hover:underline-offset-4 transition-all duration-300"
//         >
//           Contact
//         </a> */}

//         {/* Authentication Links */}
//         {isAuthenticated ? (
//           <button
//             className="logout-btn text-lg font-medium bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         ) : (
//           <button
//             className="login-btn text-lg font-medium bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300"
//             onClick={() => navigate("/login")}
//           >
//             Create Account
//           </button>
//         )}

//         {/* Profile Image (Shown only if logged in) */}
//         {isAuthenticated && (
//           <div
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => navigate("/profile")}
//           >
//             <img
//               src="https://via.placeholder.com/40" // Replace with actual profile image
//               alt="Law Student Profile"
//               className="w-10 h-10 rounded-full border-2 border-white hover:scale-105 transition-transform duration-300"
//             />
//             <span className="text-lg font-medium hover:text-gray-200 transition-all duration-300">
//               Profile
//             </span>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default LawStudentHeader;

// import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import courtifyLogo from "../assets/courtifylogo.png";

const LawStudentHeader = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <header
      className="header flex items-center justify-between py-4
px-8 bg-gradient-to-r from-green-500 to-blue-600 shadow-md
text-white"
    >
      {/* Logo */}
      <div
        className="logo text-2xl font-extrabold cursor-pointer
hover:text-gray-200 transition-all duration-300"
        onClick={() => navigate("/")}
      >
        <img className="img" src={courtifyLogo} alt="Courtify Logo" />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links flex gap-8 items-center">
        <a
          href="/"
          className="text-lg font-medium hover:underline
hover:underline-offset-4 transition-all duration-300"
        >
          Home
        </a>
        {/* <a
          href="/internships"
          className="text-lg font-medium hover:underline
hover:underline-offset-4 transition-all duration-300"
        >
          Internships
        </a>
        <a
          href="/resources"
          className="text-lg font-medium hover:underline
hover:underline-offset-4 transition-all duration-300"
        >
          Resources
        </a>
        <a
          href="/contact"
          className="text-lg font-medium hover:underline
hover:underline-offset-4 transition-all duration-300"
        > */}
        {/* Contact
        </a> */}

        {/* Authentication Links */}
        {isAuthenticated ? (
          <button
            className="logout-btn text-lg font-medium bg-red-500 px-4
py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="login-btn text-lg font-medium bg-yellow-500
px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300"
            onClick={() => navigate("/lawstudent.html/LoginSignup")}
          >
            Create Account
          </button>
        )}

        {/* Profile Image (Shown only if logged in) */}
        {isAuthenticated && (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <img
              src="https://via.placeholder.com/40" // Replace with actual
              alt="Law Student Profile"
              className="w-10 h-10 rounded-full border-2 border-white
hover:scale-105 transition-transform duration-300"
            />
            <span
              className="text-lg font-medium hover:text-gray-200
transition-all duration-300"
            >
              Profile
            </span>
          </div>
        )}
      </nav>
    </header>
  );
};

export default LawStudentHeader;
