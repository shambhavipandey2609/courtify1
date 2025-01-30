// // import React from "react";
// // import { Routes, Route, Link } from "react-router-dom";
// // import ProvideConsultationPage from "../pages/ProvideConsultationPage.jsx";
// // import PostInternshipPage from "../pages/PostInternshipPage.jsx";
// // import { assets } from "../assets/assets";
// // import "./Dashboard.css";
// // const Dashboard = () => {
// //   return (
// //     <div className="dashboard">
// //        <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 ">
// //            {/* --------- Header Left --------- */}
// //            <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
// //              <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
// //                Book Appointment <br /> With Trusted Lawyers
// //              </p>
// //              <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
// //                <img className="w-28" src={assets.group_profiles} alt="" />
// //                <p>
// //                  Simply browse through our extensive list of trusted lawyers,{" "}
// //                  <br className="hidden sm:block" /> schedule your appointment
// //                  hassle-free.
// //                </p>
// //              </div>
// //              <a
// //                href="#speciality"
// //                className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
// //              >
// //                Book appointment{" "}
// //                <img className="w-3" src={assets.arrow_icon} alt="" />
// //              </a>
// //            </div>
// //            <div className="md:w-1/2 relative">
// //              <img
// //                className="w-full h-full object-cover rounded-lg"
// //                src={assets.header_img}
// //                alt=""
// //              />
// //         </div>
// //     </div> 
// //       <h1 className="dashboard-title">Lawyer Dashboard</h1>
// //       <div className="options">
// //         <Link to="provide-consultation" className="btn">
// //           Provide Consultations
// //         </Link>
// //         <Link to="post-internship" className="btn">
// //           Post Internship
// //         </Link>
// //       </div>
    
// //       {/* Nested Routes */}
// //       <Routes>
// //         <Route path="provide-consultation" element={<ProvideConsultationPage />} />
// //         <Route path="post-internship" element={<PostInternshipPage />} />
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// // // import React from "react";
// // // import { Routes, Route, Link } from "react-router-dom";
// // // import ProvideConsultationPage from "../pages/ProvideConsultationPage.jsx";
// // // import PostInternshipPage from "../pages/PostInternshipPage.jsx";
// // // import { assets } from "../assets/assets";
// // // import "./Dashboard.css";

// // // const Dashboard = () => {
// // //   return (
// // //     <div className="dashboard">
// // //       {/* Navbar */}
// // //       <nav className="navbar flex justify-between items-center py-4 px-10 shadow-md bg-white">
// // //         <div className="flex items-center">
// // //           <img src={assets.logo} alt="Courtify Logo" className="h-12" />
// // //         </div>
// // //         <div className="nav-links flex gap-6 text-lg font-medium">
// // //           <Link to="/" className="text-black hover:underline">Home</Link>
// // //           <Link to="/lawyers" className="text-black hover:underline">Lawyers</Link>
// // //           <Link to="/about" className="text-black hover:underline">About Us</Link>
// // //           <Link to="/contact" className="text-black hover:underline">Contact</Link>
// // //         </div>
// // //         <div className="profile flex items-center gap-3">
// // //           <img src={assets.profile_icon} alt="User" className="h-10 rounded-full border border-gray-300" />
// // //         </div>
// // //       </nav>

// // //       {/* Header Section */}
// // //       <div className="header-container flex flex-col md:flex-row items-center justify-between bg-[#1e3557] text-white p-12 rounded-lg mt-6 shadow-lg">
// // //         {/* Left Content */}
// // //         <div className="md:w-1/2">
// // //           <h2 className="text-5xl font-bold leading-snug">
// // //             Book Appointment <br /> With Trusted Lawyers
// // //           </h2>
// // //           <div className="flex items-center gap-4 my-4">
// // //             <img className="w-12 h-12 rounded-full border-2 border-white" src={assets.group_profiles} alt="Profiles" />
// // //             <p className="text-lg font-light">
// // //               Simply browse through our extensive list of trusted lawyers and schedule your appointment hassle-free.
// // //             </p>
// // //           </div>
// // //           <a
// // //             href="#speciality"
// // //             className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all flex items-center gap-2"
// // //           >
// // //             Book appointment <img className="w-4" src={assets.arrow_icon} alt="Arrow" />
// // //           </a>
// // //         </div>

// // //         {/* Right Image */}
// // //         <div className="md:w-1/2">
// // //           <img className="w-full h-auto object-cover rounded-lg" src={assets.header_img} alt="Header" />
// // //         </div>
// // //       </div>

// // //       {/* Nested Routes */}
// // //       <Routes>
// // //         <Route path="provide-consultation" element={<ProvideConsultationPage />} />
// // //         <Route path="post-internship" element={<PostInternshipPage />} />
// // //       </Routes>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;

// // // // import React from "react";
// // // // import { Routes, Route, Link } from "react-router-dom";
// // // // import ProvideConsultationPage from "../pages/ProvideConsultationPage.jsx";
// // // // import PostInternshipPage from "../pages/PostInternshipPage.jsx";
// // // // import { assets } from "../assets/assets";
// // // // import "./Dashboard.css";

// // // // const Dashboard = () => {
// // // //   return (
// // // //     <div className="dashboard">
// // // //       {/* ---- Navbar ---- */}
// // // //       <nav className="flex justify-between items-center py-4 px-6 md:px-10 lg:px-20 shadow-md">
// // // //         {/* <div className="flex items-center gap-2">
// // // //           <img src={assets.logo} alt="Courtify Logo" className="w-8" />
// // // //           <span className="text-lg font-bold">COURTIFY</span>
// // // //         </div> */}
// // // //         {/* <ul className="hidden md:flex gap-8 text-gray-700">
// // // //           <li><Link to="/" className="hover:text-primary">Home</Link></li>
// // // //           <li><Link to="/lawyers" className="hover:text-primary">Lawyers</Link></li>
// // // //           <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
// // // //           <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
// // // //         </ul> */}
// // // //         <div className="flex items-center gap-4">
// // // //           <img src={assets.user_avatar} alt="User" className="w-8 h-8 rounded-full border" />
// // // //         </div>
// // // //       </nav>

// // // //       {/* ---- Hero Section ---- */}
// // // //       <div className="flex flex-col md:flex-row items-center bg-primary text-white rounded-lg px-6 md:px-10 lg:px-20 py-10">
// // // //         {/* Left Content */}
// // // //         <div className="md:w-1/2 flex flex-col gap-4">
// // // //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
// // // //             Book Appointment <br /> With Trusted Lawyers
// // // //           </h1>
// // // //           <div className="flex items-center gap-3">
// // // //             <img className="w-28" src={assets.group_profiles} alt="Profiles" />
// // // //             <p className="text-sm">
// // // //               Simply browse through our extensive list of trusted lawyers, 
// // // //               schedule your appointment hassle-free.
// // // //             </p>
// // // //           </div>
// // // //           <a
// // // //             href="#speciality"
// // // //             className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-700 text-sm font-medium hover:scale-105 transition-all duration-300"
// // // //           >
// // // //             Book appointment
// // // //             <img className="w-3" src={assets.arrow_icon} alt="Arrow" />
// // // //           </a>
// // // //         </div>

// // // //         {/* Right Image */}
// // // //         <div className="md:w-1/2">
// // // //           <img className="w-full h-full object-cover rounded-lg" src={assets.header_img} alt="Lawyers" />
// // // //         </div>
// // // //       </div>

// // // //       {/* Routes for Nested Pages */}
// // // //       <Routes>
// // // //         <Route path="provide-consultation" element={<ProvideConsultationPage />} />
// // // //         <Route path="post-internship" element={<PostInternshipPage />} />
// // // //       </Routes>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;


// // // // import React from "react";
// // // // import { Routes, Route, Link } from "react-router-dom";
// // // // import ProvideConsultationPage from "../pages/ProvideConsultationPage.jsx";
// // // // import PostInternshipPage from "../pages/PostInternshipPage.jsx";
// // // // import { assets } from "../assets/assets";
// // // // import "./Dashboard.css";

// // // // const Dashboard = () => {
// // // //   return (
// // // //     <div className="dashboard">
// // // //       {/* ---- Navbar ---- */}
// // // //       <nav className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-20 bg-white shadow-lg">
// // // //         {/* User Profile */}
// // // //         {/* <div className="flex items-center gap-3">
// // // //           {/* <img src={assets.user_avatar} alt="User" className="w-10 h-10 rounded-full border" /> */}
// // // //           {/* <span className="hidden md:block text-gray-700 font-medium">Profile</span> */}
// // // //         {/* </div> */} 
// // // //       </nav>

// // // //       {/* ---- Hero Section ---- */}
// // // //       <div className="relative w-full bg-primary text-white rounded-lg overflow-hidden px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center">
// // // //         {/* Left Content */}
// // // //         <div className="md:w-1/2 flex flex-col gap-5">
// // // //           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
// // // //             Book Appointment <br /> With Trusted Lawyers
// // // //           </h1>
// // // //           <div className="flex items-center gap-3">
// // // //             <img className="w-24 rounded-full shadow-md" src={assets.group_profiles} alt="Profiles" />
// // // //             <p className="text-sm text-gray-200 leading-relaxed">
// // // //               Simply browse through our extensive list of trusted lawyers, schedule your appointment hassle-free.
// // // //             </p>
// // // //           </div>
// // // //           <a
// // // //             href="#speciality"
// // // //             className="flex items-center gap-3 bg-white px-6 py-3 rounded-full text-gray-800 font-medium shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300"
// // // //           >
// // // //             Book appointment
// // // //             <img className="w-4" src={assets.arrow_icon} alt="Arrow" />
// // // //           </a>
// // // //         </div>

// // // //         {/* Right Image */}
// // // //         <div className="md:w-1/2">
// // // //           <img className="w-full h-full object-cover rounded-lg shadow-lg" src={assets.header_img} alt="Lawyers" />
// // // //         </div>
// // // //       </div>

// // // //       {/* Routes for Nested Pages */}
// // // //       <Routes>
// // // //         <Route path="provide-consultation" element={<ProvideConsultationPage />} />
// // // //         <Route path="post-internship" element={<PostInternshipPage />} />
// // // //       </Routes>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;


// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import ProvideConsultationPage from "../pages/ProvideConsultationPage.jsx";
// import PostInternshipPage from "../pages/PostInternshipPage.jsx";
// import { assets } from "../assets/assets";
// import "./Dashboard.css";

// const Dashboard = () => {
//   return (
    
//     <div className="dashboard">
//       <br />
//       <hr />
//       <br />
//       <div className="hero-section">
//         <div className="hero-content">
//           <h2>Offer Your Expertise, Empower Clients</h2>
//           <p>
//           Connect with clients seeking your legal guidance and make a difference today.
//           </p>
//           {/* <button className="book-appointment-btn">
//             Book appointment <img src={assets.arrow_icon} alt="arrow" />
//           </button> */}
//           <a href="#" class="appointment-btn">
//             Book appointment <img src={assets.arrow_icon} alt="Arrow"/>
//           </a>
//         </div>
//         <div className="hero-image">
//           <img src={assets.header_img} alt="Lawyers" />
//         </div>
//       </div>

//       <div className="dashboard-content">
//         <h1 className="dashboard-title">Lawyer Dashboard</h1>
//         <div className="options">
//           <Link to="provide-consultation" className="btn">
//             Provide Consultations
//           </Link>
//           <Link to="post-internship" className="btn">
//             Post Internship
//           </Link>
//         </div>

//         {/* Nested Routes */}
//         <Routes>
//           <Route path="provide-consultation" element={<ProvideConsultationPage />} />
//           <Route path="post-internship" element={<PostInternshipPage />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <br />
      <hr />
      <br />
      <div className="hero-section">
        <div className="hero-content">
          <h2>Offer Your Expertise, Empower Clients</h2>
          <p>
            Connect with clients seeking your legal guidance and make a difference today.
          </p>
          <a href="#" className="appointment-btn">
            Book appointment <img src={assets.arrow_icon} alt="Arrow" />
          </a>
        </div>
        <div className="hero-image">
          <img src={assets.header_img} alt="Lawyers" />
        </div>
      </div>

      <div className="dashboard-content">
        <h1 className="dashboard-title">Lawyer Dashboard</h1>
        <div className="options">
          <Link to="/provide-consultation" className="btn">
            Provide Consultations
          </Link>
          <Link to="/post-internship" className="btn">
            Post Internship
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;