import React from "react";
import "./LawStudentDashboard.css";

const LawStudentDashboard = () => {
  return (
    <div className="law-student-dashboard">
      <div className="card-container">
        <div className="card">
          <h2>Research Papers</h2>
          <p>Explore a wide variety of legal research papers from lawyers.</p>
          <a href="/research-papers" className="btn btn-primary">
            View Research Papers
          </a>
        </div>
        <div className="card">
          <h2>Internships</h2>
          <p>Apply for internships posted by experienced lawyers.</p>
          <a href="/internships" className="btn btn-primary">
            Apply for Internships
          </a>
        </div>
      </div>
    </div>
  );
};

export default LawStudentDashboard;
