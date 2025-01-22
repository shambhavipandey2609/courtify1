import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LawStudentPage from "./pages/LawStudentPage";
import LawStudentDashboard from "./pages/LawStudentDashboard";
import ResearchPapersPage from "./pages/ResearchPapersPage";
import InternshipPage from "./pages/InternshipPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "../styles/index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="dashboard-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LawStudentPage />} />
            <Route path="/dashboard" element={<LawStudentDashboard />} />
            <Route path="/research-papers" element={<ResearchPapersPage />} />
            <Route path="/internships" element={<InternshipPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
