// import React from "react";
// import "../styles/index.css";

// const ResearchPapersPage = () => {
//   const papers = [
//     { id: 1, title: "Constitutional Law Insights", author: "Ram Sharan" },
//     { id: 2, title: "Corporate Law Trends", author: "Sameer Sharma" },
//     { id: 3, title: "Criminal Justice Studies", author: "Parun Sinha" },
//   ];

//   return (
//     <div className="research-papers-page">
//       <h1>Research Papers</h1>
//       <div className="papers">
//         {papers.map((paper) => (
//           <div key={paper.id} className="data-card">
//             <h2>{paper.title}</h2>
//             <p>Author: {paper.author}</p>
//             <button className="btn btn-primary">Read More</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResearchPapersPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/index.css";

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    // Fetch case studies from backend
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/case-studies"
        );
        setCaseStudies(response.data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <div className="case-studies-page">
      <h1>Case Studies</h1>
      <div className="cases">
        {caseStudies.length > 0 ? (
          caseStudies.map((caseStudy) => (
            <div key={caseStudy._id} className="data-card">
              <h2>{caseStudy.title}</h2>
              <p>
                Uploaded on: {new Date(caseStudy.postedAt).toLocaleDateString()}
              </p>
              <a href={`http://localhost:4001${caseStudy.fileUrl}`} download>
                <button className="btn btn-primary">Download</button>
              </a>
            </div>
          ))
        ) : (
          <p>No case studies available.</p>
        )}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
