// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import "./PostInternshipPage.css"; // Import CSS for additional styles

// const PostInternshipPage = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     duration: "",
//     stipend: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:4001/api/internships", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       alert(data.message);
//     } catch (error) {
//       console.error("Error posting internship:", error);
//     }
//   };

//   return (
//     <div className="flex-container">
//       <Sidebar activeMenu="internships" />
//       <div className="content-container">
//         <h1 className="page-heading">Post an Internship</h1>
//         <form onSubmit={handleSubmit} className="form">
//           <input
//             type="text"
//             name="title"
//             placeholder="Internship Title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             className="input"
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             className="textarea"
//           />
//           <input
//             type="text"
//             name="duration"
//             placeholder="Duration (e.g., 3 months)"
//             value={formData.duration}
//             onChange={handleChange}
//             className="input"
//           />
//           <input
//             type="text"
//             name="stipend"
//             placeholder="Stipend (e.g., $500/month)"
//             value={formData.stipend}
//             onChange={handleChange}
//             className="input"
//           />
//           <button type="submit" className="button">
//             Post Internship
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostInternshipPage;

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./PostInternshipPage.css"; // Import CSS for additional styles

const PostInternshipPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    stipend: "",
    googleFormLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4001/api/internships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error posting internship:", error);
    }
  };

  return (
    <div className="flex-container">
      <Sidebar activeMenu="internships" />
      <div className="content-container">
        <h1 className="page-heading">Post an Internship</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="title"
            placeholder="Internship Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="input"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="textarea"
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g., 3 months)"
            value={formData.duration}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="stipend"
            placeholder="Stipend (e.g., $500/month)"
            value={formData.stipend}
            onChange={handleChange}
            className="input"
          />
          <input
            type="url"
            name="googleFormLink"
            placeholder="Google Form Link"
            value={formData.googleFormLink}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            Post Internship
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostInternshipPage;
