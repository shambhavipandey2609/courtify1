import React from "react";
import "./ResearchPapersPage.css";

const ResearchPapersPage = () => {
  return (
    <div className="research-papers-page">
      <h1>Research Papers</h1>
      <p>Explore insightful research papers shared by experienced lawyers.</p>
      <div className="papers-container">
        <div className="paper-card">
          <h3>Legal Ethics in Corporate Law</h3>
          <p>By Lawyer John Doe</p>
          <button>Read Paper</button>
        </div>
        <div className="paper-card">
          <h3>Property Disputes in India</h3>
          <p>By Lawyer Jane Smith</p>
          <button>Read Paper</button>
        </div>
      </div>
    </div>
  );
};

export default ResearchPapersPage;
