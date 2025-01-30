import React from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";
import LawStudentDashboard from "./pages/LawStudentDashboard";
import ResearchPapersPage from "./pages/ResearchPapersPage";
import InternshipPage from "./pages/InternshipPage";
import Login from "./pages/LoginSignup.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/lawstudent.html" element={<Dashboard />} />
        <Route
          path="/lawstudent.html/internship"
          element={<InternshipPage />}
        />
        <Route
          path="/lawstudent.html/research-papers"
          element={<ResearchPapersPage />}
        />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
