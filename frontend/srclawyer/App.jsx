import React from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import ProvideConsultationPage from "./pages/ProvideConsultationPage";
import PostInternshipPage from "./pages/PostInternshipPage";
import ChatPage from "../srclawyer/pages/ChatPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/lawyer.html" element={<Dashboard />} />
        <Route path="/provide-consultation" element={<ProvideConsultationPage />} />
        <Route path="/post-internship" element={<PostInternshipPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
