import React from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./pages/LoginSignup.jsx";
import ProvideConsultationPage from "./pages/ProvideConsultationPage";
import PostInternshipPage from "./pages/PostInternshipPage";
import ChatPage from "../srclawyer/pages/ChatPage";
import LoginSignup from "./pages/LoginSignup.jsx";
import Profile from "./pages/Profile";
import PostCaseStudyPage from "./pages/PostCaseStudyPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/lawyer.html" element={<Dashboard />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/provide-consultation"
          element={<ProvideConsultationPage />}
        />
        <Route path="/post-internship" element={<PostInternshipPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post-case-study" element={<PostCaseStudyPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
