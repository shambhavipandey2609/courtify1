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
import "./Dashboard.css";
// import TopStudent from "./TopStudent.jsx"
const Dashboard = () => {
  return (
    <div className="dashboard">
        {/* <TopStudent/>    */}
      <h1 className="dashboard-title">LawStudent Dashboard</h1>
      <div className="options">
        <Link to="internship" className="btn">
          Internship
        </Link>
        <Link to="research-papers" className="btn">
          Reseach Papers
        </Link>
      </div>

      {/* Nested Routes */}
      <Routes>
        <Route path="internship" element={<InternshipPage />} />
        <Route path="research-papers" element={<ResearchPapersPage />} />
      </Routes>
    </div>
  );
};

export default Dashboard;