import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LawStudentDashboard from "./pages/LawStudentDashboard";
import ResearchPapersPage from "./pages/ResearchPapersPage";
import InternshipPage from "./pages/InternshipPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LawStudentDashboard />} />
        <Route path="/research-papers" element={<ResearchPapersPage />} />
        <Route path="/internships" element={<InternshipPage />} />
      </Routes>
    </Router>
  );
};

export default App;
