// // // import React, { useState } from 'react';

// // // const PostInternshipPage = () => {
// // //   const [formData, setFormData] = useState({
// // //     title: '',
// // //     description: '',
// // //     duration: '',
// // //     stipend: '',
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log(formData);
// // //     // Send formData to backend API
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Post an Internship</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <input type="text" name="title" placeholder="Internship Title" value={formData.title} onChange={handleChange} required />
// // //         <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
// // //         <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} />
// // //         <input type="text" name="stipend" placeholder="Stipend" value={formData.stipend} onChange={handleChange} />
// // //         <button type="submit">Post</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default PostInternshipPage;
// // import React, { useState } from 'react';

// // const PostInternshipPage = () => {
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     description: '',
// //     duration: '',
// //     stipend: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //     // Send formData to backend API
// //   };

// //   const styles = {
// //     container: {
// //       maxWidth: '600px',
// //       margin: '50px auto',
// //       padding: '20px',
// //       borderRadius: '8px',
// //       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// //       backgroundColor: '#fff',
// //       fontFamily: 'Arial, sans-serif',
// //     },
// //     heading: {
// //       textAlign: 'center',
// //       color: '#333',
// //     },
// //     form: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '15px',
// //     },
// //     input: {
// //       padding: '10px',
// //       fontSize: '16px',
// //       borderRadius: '4px',
// //       border: '1px solid #ddd',
// //     },
// //     textarea: {
// //       padding: '10px',
// //       fontSize: '16px',
// //       borderRadius: '4px',
// //       border: '1px solid #ddd',
// //       resize: 'none',
// //       minHeight: '100px',
// //     },
// //     button: {
// //       padding: '10px',
// //       fontSize: '16px',
// //       backgroundColor: '#4CAF50',
// //       color: 'white',
// //       border: 'none',
// //       borderRadius: '4px',
// //       cursor: 'pointer',
// //     },
// //     buttonHover: {
// //       backgroundColor: '#45a049',
// //     },
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.heading}>Post an Internship</h1>
// //       <form onSubmit={handleSubmit} style={styles.form}>
// //         <input
// //           type="text"
// //           name="title"
// //           placeholder="Internship Title"
// //           value={formData.title}
// //           onChange={handleChange}
// //           required
// //           style={styles.input}
// //         />
// //         <textarea
// //           name="description"
// //           placeholder="Description"
// //           value={formData.description}
// //           onChange={handleChange}
// //           required
// //           style={styles.textarea}
// //         />
// //         <input
// //           type="text"
// //           name="duration"
// //           placeholder="Duration (e.g., 3 months)"
// //           value={formData.duration}
// //           onChange={handleChange}
// //           style={styles.input}
// //         />
// //         <input
// //           type="text"
// //           name="stipend"
// //           placeholder="Stipend (e.g., $500/month)"
// //           value={formData.stipend}
// //           onChange={handleChange}
// //           style={styles.input}
// //         />
// //         <button
// //           type="submit"
// //           style={styles.button}
// //           onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
// //           onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
// //         >
// //           Post Internship
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PostInternshipPage;


// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";

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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Send formData to backend API
//   };

//   const styles = {
//     container: {
//       maxWidth: "600px",
//       margin: "50px auto",
//       padding: "20px",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       backgroundColor: "#fff",
//       fontFamily: "Arial, sans-serif",
//     },
//     heading: {
//       textAlign: "center",
//       color: "#333",
//     },
//     form: {
//       display: "flex",
//       flexDirection: "column",
//       gap: "15px",
//     },
//     input: {
//       padding: "10px",
//       fontSize: "16px",
//       borderRadius: "4px",
//       border: "1px solid #ddd",
//     },
//     textarea: {
//       padding: "10px",
//       fontSize: "16px",
//       borderRadius: "4px",
//       border: "1px solid #ddd",
//       resize: "none",
//       minHeight: "100px",
//     },
//     button: {
//       padding: "10px",
//       fontSize: "16px",
//       backgroundColor: "#4caf50",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//     },
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar activeMenu="internships" />
//       <div style={styles.container}>
//         <h1 style={styles.heading}>Post an Internship</h1>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Internship Title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             style={styles.textarea}
//           />
//           <input
//             type="text"
//             name="duration"
//             placeholder="Duration (e.g., 3 months)"
//             value={formData.duration}
//             onChange={handleChange}
//             style={styles.input}
//           />
//           <input
//             type="text"
//             name="stipend"
//             placeholder="Stipend (e.g., $500/month)"
//             value={formData.stipend}
//             onChange={handleChange}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send formData to backend API
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
          <button type="submit" className="button">
            Post Internship
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostInternshipPage;
