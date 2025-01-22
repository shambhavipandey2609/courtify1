import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LawStudentPage from "./pages/LawStudentPage";
import LawStudentDashboard from "./pages/LawStudentDashboard";
import ResearchPapersPage from "./pages/ResearchPapersPage";
import InternshipPage from "./pages/InternshipPage";
import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__layout">
          <Sidebar />
          <main className="app__content">
            <Routes>
              <Route path="/" element={<LawStudentPage />} />
              <Route path="/dashboard" element={<LawStudentDashboard />} />
              <Route path="/research-papers" element={<ResearchPapersPage />} />
              <Route path="/internships" element={<InternshipPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
