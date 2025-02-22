// // import React from "react";
// // import "../styles/index.css";
// // import { useNavigate } from "react-router-dom";
// // import sidebar from "../components/Sidebar";
// // const InternshipPage = () => {
// //   const internships = [
// //     {
// //       id: 1,
// //       title: "Corporate Law Internship",
// //       company: "LawCorp",
// //       duration: "3 months",
// //       stipend: "Rs 15000/month",
// //     },
// //     {
// //       id: 2,
// //       title: "Criminal Law Internship",
// //       company: "Justice League",
// //       duration: "2 months",
// //       stipend: "Rs 20000/month",
// //     },
// //     {
// //       id: 3,
// //       title: "Family Law Internship",
// //       company: "FamilyFirst Legal",
// //       duration: "4 months",
// //       stipend: "Rs 13000/month",
// //     },
// //   ];

// //   return (
// //     <div className="internship-page">
// //       <h1>Internship Opportunities</h1>
// //       <div className="internships">
// //         {internships.map((internship) => (
// //           <div key={internship.id} className="data-card">
// //             <h2>{internship.title}</h2>
// //             <p>Company: {internship.company}</p>
// //             <p>Duration: {internship.duration}</p>
// //             <p>Stipend: {internship.stipend}</p>
// //             <button className="btn">Apply Now</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default InternshipPage;

// import React, { useEffect, useState } from "react";
// import "../styles/index.css";
// import Sidebar from "../components/Sidebar";

// const InternshipPage = () => {
//   const [internships, setInternships] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4001/api/internships") // Update port if different
//       .then((response) => response.json())
//       .then((data) => setInternships(data))
//       .catch((error) => console.error("Error fetching internships:", error));
//   }, []);

//   return (
//     <div className="internship-page">
//       <Sidebar activeMenu="internships" />
//       <div className="content">
//         <h1>Internship Opportunities</h1>
//         <div className="internships">
//           {internships.length > 0 ? (
//             internships.map((internship) => (
//               <div key={internship._id} className="data-card">
//                 <h2>{internship.title}</h2>
//                 <p>Duration: {internship.duration}</p>
//                 <p>Stipend: {internship.stipend}</p>
//                 <button className="btn">Apply Now</button>
//               </div>
//             ))
//           ) : (
//             <p>No internships available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InternshipPage;

import React, { useEffect, useState } from "react";
import "../styles/index.css";
import Sidebar from "../components/Sidebar";

const InternshipPage = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/api/internships")
      .then((response) => response.json())
      .then((data) => {
        console.log("Internships fetched:", data); // Debugging
        setInternships(data);
      })
      .catch((error) => console.error("Error fetching internships:", error));
  }, []);

  return (
    <div className="internship-page">
      <div className="content">
        <h1>Internship Opportunities</h1>
        <div className="internships">
          {internships.length > 0 ? (
            internships.map((internship) => (
              <div key={internship._id} className="data-card">
                <h2>{internship.title}</h2>
                <p>{internship.description}</p>
                <p>Duration: {internship.duration}</p>
                <p>Stipend: {internship.stipend}</p>
                <button className="btn">Apply Now</button>
              </div>
            ))
          ) : (
            <p>🔍 No internships available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
