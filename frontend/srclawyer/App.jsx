// import React from 'react';
// import Header from './components/Header';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import HomePage from './pages/HomePage';
// // import LawyerPage from './pages/LawyerPage';
// // import PostInternshipPage from './pages/PostInternshipPage';
// // import ProvideConsultationPage from './pages/ProvideConsultationPage';
// import Dashboard from './components/Dashboard';
// import Footer from './components/Footer';
// import ProvideConsultationPage from "./pages/ProvideConsultationPage";
// import PostInternshipPage from "./pages/PostInternshipPage";
// import ChatPage from "../srclawyer/pages/ChatPage";
// const App = () => {
//   return (
//     <Router>
//       <Header />
//       {/* <Routes>
//         <Route path="/*" element={<Dashboard />} />
//       </Routes> */}
//       <Dashboard />
//       <Footer />
//     </Router>
//   );
// };

// export default App;

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
          <Dashboard />
          <Footer />
        </Router>
      );
    };

export default App;
