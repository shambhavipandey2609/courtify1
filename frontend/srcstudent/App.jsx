import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResearchPapers from "./pages/ResearchPapers";
import Internships from "./pages/Internships";
import Profile from "./pages/Profile";
import './styles/index.css';


const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar activeMenu="dashboard" />
        <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/research" element={<ResearchPapers />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
