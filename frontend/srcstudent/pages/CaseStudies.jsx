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
