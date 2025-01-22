// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './Dashboard.css';

// // const Dashboard = () => {
// //   return (
// //     <div className="dashboard">
// //       <h1>Lawyer Dashboard</h1>
// //       <div className="options">
// //         <Link to="/ProvideConsultationPage" className="btn">Provide Consultations</Link>
// //         <Link to="/PostInternshipPage" className="btn">Post Internship</Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import ProvideConsultationPage from '../pages/ProvideConsultationPage.jsx';
// import PostInternshipPage from '../pages/PostInternshipPage.jsx';

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1>Lawyer Dashboard</h1>
//       <div className="options">
//         <Link to="provide-consultation" className="btn">Provide Consultations</Link>
//         <Link to="post-internship" className="btn">Post Internship</Link>
//       </div>

//       {/* Nested Routes */}
//       <Routes>
//         <Route path="provide-consultation" element={<ProvideConsultationPage />} />
//         <Route path="post-internship" element={<PostInternshipPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProvideConsultationPage from "../pages/ProvideConsultationPage.jsx";
import PostInternshipPage from "../pages/PostInternshipPage.jsx";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Lawyer Dashboard</h1>
      <div className="options">
        <Link to="provide-consultation" className="btn">
          Provide Consultations
        </Link>
        <Link to="post-internship" className="btn">
          Post Internship
        </Link>
      </div>

      {/* Nested Routes */}
      <Routes>
        <Route path="provide-consultation" element={<ProvideConsultationPage />} />
        <Route path="post-internship" element={<PostInternshipPage />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
