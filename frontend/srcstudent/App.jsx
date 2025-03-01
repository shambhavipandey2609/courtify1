// import React from "react";
// import Header from "./components/Header.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/footer";
// import Dashboard from "./components/dashboard";
// import LawStudentDashboard from "./pages/LawStudentDashboard";
// // import CaseStudiesPage from "./pages/CaseStudies.jsx";
// import CaseStudiesPage from "./pages/CaseStudies.jsx";

// import InternshipPage from "./pages/InternshipPage";
// import LoginSignup from "./pages/LoginSignup.jsx";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/lawstudent.html" element={<Dashboard />} />
//         <Route
//           path="/lawstudent.html/internship"
//           element={<InternshipPage />}
//         />
//         <Route
//           path="/lawstudent.html/CaseStudies"
//           element={<CaseStudiesPage />}
//         />
//         <Route path="/login" element={<LoginSignup />} />
//       </Routes>
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
import LawStudentDashboard from "./pages/LawStudentDashboard";
import CaseStudiesPage from "./pages/CaseStudies";
import InternshipPage from "./pages/InternshipPage";
import LoginSignup from "./pages/LoginSignup.jsx";

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
          path="/lawstudent.html/CaseStudies"
          element={<CaseStudiesPage />}
        />

        <Route path="/login.html" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
