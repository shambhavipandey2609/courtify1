import React from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";
import LawStudentDashboard from "./pages/LawStudentDashboard";
import ResearchPapersPage from "./pages/ResearchPapersPage";
import InternshipPage from "./pages/InternshipPage";

const App = () => {
  return (
   <Router>
      <Header/>
      <Dashboard/>
      <Footer/>
    </Router>
  );
};

export default App;

