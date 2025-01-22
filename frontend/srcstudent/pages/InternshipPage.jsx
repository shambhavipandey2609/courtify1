import React from "react";
import "../styles/index.css";

const InternshipPage = () => {
  const internships = [
    {
      id: 1,
      title: "Corporate Law Internship",
      company: "LawCorp",
      duration: "3 months",
      stipend: "$500/month",
    },
    {
      id: 2,
      title: "Criminal Law Internship",
      company: "Justice League",
      duration: "2 months",
      stipend: "$400/month",
    },
    {
      id: 3,
      title: "Family Law Internship",
      company: "FamilyFirst Legal",
      duration: "4 months",
      stipend: "$600/month",
    },
  ];

  return (
    <div className="internship-page">
      <h1>Internship Opportunities</h1>
      <div className="internships">
        {internships.map((internship) => (
          <div key={internship.id} className="internship-card">
            <h2>{internship.title}</h2>
            <p>Company: {internship.company}</p>
            <p>Duration: {internship.duration}</p>
            <p>Stipend: {internship.stipend}</p>
            <button className="btn btn-primary">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipPage;
