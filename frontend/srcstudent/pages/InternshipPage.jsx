// import React from "react";
// import "../styles/index.css";

// const InternshipPage = () => {
//   const internships = [
//     {
//       id: 1,
//       title: "Corporate Law Internship",
//       company: "LawCorp",
//       duration: "3 months",
//       stipend: "$500/month",
//     },
//     {
//       id: 2,
//       title: "Criminal Law Internship",
//       company: "Justice League",
//       duration: "2 months",
//       stipend: "$400/month",
//     },
//     {
//       id: 3,
//       title: "Family Law Internship",
//       company: "FamilyFirst Legal",
//       duration: "4 months",
//       stipend: "$600/month",
//     },
//   ];

//   return (
//     <div className="internship-page">
//       <h1>Internship Opportunities</h1>
//       <div className="internships">
//         {internships.map((internship) => (
//           <div key={internship.id} className="internship-card">
//             <h2>{internship.title}</h2>
//             <p>Company: {internship.company}</p>
//             <p>Duration: {internship.duration}</p>
//             <p>Stipend: {internship.stipend}</p>
//             <button className="btn btn-primary">Apply Now</button>
//           </div>

//         ))}
//       </div>
//     </div>
//   );
// };

// export default InternshipPage;

import React from "react";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";
import sidebar from "../components/Sidebar";
const InternshipPage = () => {
  // <div className="sidebar">
  //   <h2>Lawyer Options</h2>
  //   <ul>
  //     <li
  //       className={activeMenu === "dashboard" ? "active-menu" : ""}
  //       onClick={() => handleNavigation("dashboard")}
  //     >
  //       Dashboard
  //     </li>
  //     <li
  //       className={activeMenu === "consultations" ? "active-menu" : ""}
  //       onClick={() => handleNavigation("consultations")}
  //     >
  //       Consultations
  //     </li>
  //     <li
  //       className={activeMenu === "internships" ? "active-menu" : ""}
  //       onClick={() => handleNavigation("internships")}
  //     >
  //       Internships
  //     </li>
  //     <li
  //       className={activeMenu === "profile" ? "active-menu" : ""}
  //       onClick={() => handleNavigation("profile")}
  //     >
  //       Profile
  //     </li>
  //   </ul>
  // </div>;
  const internships = [
    {
      id: 1,
      title: "Corporate Law Internship",
      company: "LawCorp",
      duration: "3 months",
      stipend: "$500/month",
    },
    {
      id: 2,
      title: "Criminal Law Internship",
      company: "Justice League",
      duration: "2 months",
      stipend: "$400/month",
    },
    {
      id: 3,
      title: "Family Law Internship",
      company: "FamilyFirst Legal",
      duration: "4 months",
      stipend: "$600/month",
    },
  ];

  return (
    <div className="internship-page">
      <h1>Internship Opportunities</h1>
      <div className="internships">
        {internships.map((internship) => (
          <div key={internship.id} className="data-card">
            <h2>{internship.title}</h2>
            <p>Company: {internship.company}</p>
            <p>Duration: {internship.duration}</p>
            <p>Stipend: {internship.stipend}</p>
            <button className="btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipPage;

// import React, { useState } from "react";
// import "../styles/index.css";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "../components/Sidebar"; // Ensure correct Sidebar import

// const InternshipPage = () => {
//   const navigate = useNavigate();
//   const [activeMenu, setActiveMenu] = useState("dashboard"); // State to track active menu

//   const handleNavigation = (menu) => {
//     setActiveMenu(menu);
//     navigate(`/${menu}`); // Navigates to the respective route
//   };

//   const internships = [
//     {
//       id: 1,
//       title: "Corporate Law Internship",
//       company: "LawCorp",
//       duration: "3 months",
//       stipend: "$500/month",
//     },
//     {
//       id: 2,
//       title: "Criminal Law Internship",
//       company: "Justice League",
//       duration: "2 months",
//       stipend: "$400/month",
//     },
//     {
//       id: 3,
//       title: "Family Law Internship",
//       company: "FamilyFirst Legal",
//       duration: "4 months",
//       stipend: "$600/month",
//     },
//   ];

//   return (
//     <div className="internship-page">
//       {/* Sidebar Section */}
//       <div className="sidebar">
//         <h2>Lawyer Options</h2>
//         <ul>
//           <li
//             className={activeMenu === "dashboard" ? "active-menu" : ""}
//             onClick={() => handleNavigation("dashboard")}
//           >
//             Dashboard
//           </li>
//           <li
//             className={activeMenu === "consultations" ? "active-menu" : ""}
//             onClick={() => handleNavigation("consultations")}
//           >
//             Consultations
//           </li>
//           <li
//             className={activeMenu === "internships" ? "active-menu" : ""}
//             onClick={() => handleNavigation("internships")}
//           >
//             Internships
//           </li>
//           <li
//             className={activeMenu === "profile" ? "active-menu" : ""}
//             onClick={() => handleNavigation("profile")}
//           >
//             Profile
//           </li>
//         </ul>
//       </div>

//       {/* Internship Content Section */}
//       <div className="content">
//         <h1>Internship Opportunities</h1>
//         <div className="internships">
//           {internships.map((internship) => (
//             <div key={internship.id} className="data-card">
//               <h2>{internship.title}</h2>
//               <p>Company: {internship.company}</p>
//               <p>Duration: {internship.duration}</p>
//               <p>Stipend: {internship.stipend}</p>
//               <button className="btn">Apply Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InternshipPage;
