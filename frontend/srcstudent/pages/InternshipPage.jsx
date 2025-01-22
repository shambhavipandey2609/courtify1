import React from "react";
import "./InternshipPage.css";

const InternshipPage = () => {
  return (
    <div className="internship-page">
      <h1>Internships</h1>
      <p>Explore and apply for internships posted by lawyers.</p>
      <div className="internship-container">
        <div className="internship-card">
          <h3>Legal Research Internship</h3>
          <p>Location: Remote</p>
          <button>Apply</button>
        </div>
        <div className="internship-card">
          <h3>Corporate Law Internship</h3>
          <p>Location: New York</p>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
