import React from "react";
import "./LawStudentDashboard.css";

const LawStudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, Law Student</h1>
        <p>Discover research papers and apply for internships posted by lawyers.</p>
      </header>
      <div className="dashboard-content">
        <div className="card research-papers">
          <h2>Research Papers</h2>
          <p>Explore insightful legal research papers shared by experienced lawyers.</p>
          <button>View Research Papers</button>
        </div>
        <div className="card internships">
          <h2>Apply for Internships</h2>
          <p>Browse and apply for internships posted by top legal professionals.</p>
          <button>Explore Internships</button>
        </div>
      </div>
    </div>
  );
};

export default LawStudentDashboard;
