import React from "react";
import "../styles/index.css";

const ResearchPapersPage = () => {
  const papers = [
    { id: 1, title: "Constitutional Law Insights", author: "John Doe" },
    { id: 2, title: "Corporate Law Trends", author: "Jane Smith" },
    { id: 3, title: "Criminal Justice Studies", author: "Alice Brown" },
  ];

  return (
    <div className="research-papers-page">
      <h1>Research Papers</h1>
      <div className="papers">
        {papers.map((paper) => (
          <div key={paper.id} className="data-card">
            <h2>{paper.title}</h2>
            <p>Author: {paper.author}</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapersPage;
