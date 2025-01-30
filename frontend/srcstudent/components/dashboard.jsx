// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import InternshipPage from "../pages/InternshipPage.jsx";
// import ResearchPapersPage from "../pages/ResearchPapersPage.jsx";
// import "./Dashboard.css";
// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1 className="dashboard-title">LawStudent Dashboard</h1>
//       <div className="options">
//         <Link to="internship" className="btn">
//           Internship
//         </Link>
//         <Link to="research-papers" className="btn">
//           Reseach Papers
//         </Link>
//       </div>

//       {/* Nested Routes */}
//       <Routes>
//         <Route path="internship" element={<InternshipPage />} />
//         <Route path="research-papers" element={<ResearchPapersPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default Dashboard;

import { Routes, Route, Link } from "react-router-dom";
import InternshipPage from "../pages/InternshipPage.jsx";
import ResearchPapersPage from "../pages/ResearchPapersPage.jsx";
import "./dashboard.css";
import { assets } from "../assets/assets";
// import TopStudent from "./TopStudent.jsx"

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
            Connect with clients seeking your legal guidance and make a
            difference today.
          </p>
          <a href="#" className="appointment-btn">
            Book appointment <img src={assets.arrow_icon} alt="Arrow" />
          </a>
        </div>
        <div className="hero-image">
          <img src={assets.header_img} alt="Lawyers" />
        </div>
      </div>
      <br />
      <br />
      <div className="dashboard-content">
        <h1 className="dashboard-title">LawStudent Dashboard</h1>
        <div className="options">
          <Link to="internship" className="btn">
            Internship
          </Link>
          <Link to="research-papers" className="btn">
            Reseach Papers
          </Link>
        </div>
        <br />
        <br />
        {/* Nested Routes */}
        {/* <Routes>
          <Route path="internship" element={<InternshipPage />} />
          <Route path="research-papers" element={<ResearchPapersPage />} />
        </Routes> */}
      </div>
    </div>
  );
};

export default Dashboard;
