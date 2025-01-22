import React from "react";
import "../styles/index.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const LawStudentDashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-layout">
        <Sidebar activeMenu="dashboard" />
        <div className="main-content">
          <h1 className="dashboard-title">Law Student Dashboard</h1>
          <div className="card-container">
            <div className="card">
              <h2>Research Papers</h2>
              <p>Explore a wide variety of legal research papers from lawyers.</p>
              <Link to="/research-papers" className="btn btn-primary">
                View Research Papers
              </Link>
            </div>
            <div className="card">
              <h2>Internships</h2>
              <p>Apply for internships posted by experienced lawyers.</p>
              <Link to="/internships" className="btn btn-primary">
                Apply for Internships
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawStudentDashboard;
