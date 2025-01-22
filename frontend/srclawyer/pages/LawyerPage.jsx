// // // import React, { useState } from 'react';
// // // import './LawyerPage.css'; // Optional CSS file for styling

// // // const LawyerPage = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     password: '',
// // //     address: '',
// // //     specialty: '',
// // //     experience: '',
// // //     barcodeId: '',
// // //     image: null,
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleImageChange = (e) => {
// // //     setFormData({ ...formData, image: e.target.files[0] });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log(formData);
// // //     // Send formData to backend API
// // //   };

// // //   return (
// // //     <div className="lawyer-page">
// // //       <h1>Lawyer Login/Signup</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
// // //         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// // //         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
// // //         <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
// // //         <input type="text" name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} />
// // //         <input type="number" name="experience" placeholder="Experience (years)" value={formData.experience} onChange={handleChange} />
// // //         <input type="text" name="barcodeId" placeholder="Barcode ID" value={formData.barcodeId} onChange={handleChange} />
// // //         <input type="file" name="image" onChange={handleImageChange} />
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default LawyerPage;



// // import React, { useState } from 'react';
// // import './LawyerPage.css'; // Import the CSS file for styling

// // const LawyerPage = () => {
// //   // State to manage the form data
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     address: '',
// //     specialty: '',
// //     experience: '',
// //     barcodeId: '',
// //     image: null,
// //   });

// //   // Handle input changes for text inputs
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   // Handle file input change for image upload
// //   const handleImageChange = (e) => {
// //     setFormData({ ...formData, image: e.target.files[0] });
// //   };

// //   // // Handle form submission
// //   // const handleSubmit = (e) => {
// //   //   e.preventDefault();
// //   //   console.log('Submitted Form Data:', formData);
// //   //   // Future: Send this data to the backend using an API call
// //   // };
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
  
// //     const formDataToSend = new FormData();
// //     Object.keys(formData).forEach((key) => {
// //       formDataToSend.append(key, formData[key]);
// //     });
  
// //     try {
// //       const response = await fetch('http://localhost:5000/api/lawyers/signup', {
// //         method: 'POST',
// //         body: JSON.stringify(formData),
// //         headers: { 'Content-Type': 'application/json' },
// //       });
// //       const result = await response.json();
// //       console.log('Success:', result);
// //       alert(result.message);
// //     } catch (error) {
// //       console.error('Error:', error);
// //       alert('Error submitting the form');
// //     }
// //   };
  
// //   return (
// //     <div className="lawyer-page">
// //       <h1>Lawyer Login/Signup</h1>
// //       <form onSubmit={handleSubmit} className="lawyer-form">
// //         <label htmlFor="name">Name</label>
// //         <input
// //           type="text"
// //           id="name"
// //           name="name"
// //           placeholder="Enter your full name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           required
// //         />

// //         <label htmlFor="email">Email</label>
// //         <input
// //           type="email"
// //           id="email"
// //           name="email"
// //           placeholder="Enter your email"
// //           value={formData.email}
// //           onChange={handleChange}
// //           required
// //         />

// //         <label htmlFor="password">Password</label>
// //         <input
// //           type="password"
// //           id="password"
// //           name="password"
// //           placeholder="Enter your password"
// //           value={formData.password}
// //           onChange={handleChange}
// //           required
// //         />

// //         <label htmlFor="address">Address</label>
// //         <input
// //           type="text"
// //           id="address"
// //           name="address"
// //           placeholder="Enter your address"
// //           value={formData.address}
// //           onChange={handleChange}
// //         />

// //         <label htmlFor="specialty">Specialty</label>
// //         <input
// //           type="text"
// //           id="specialty"
// //           name="specialty"
// //           placeholder="Enter your legal specialty"
// //           value={formData.specialty}
// //           onChange={handleChange}
// //         />

// //         <label htmlFor="experience">Experience (in years)</label>
// //         <input
// //           type="number"
// //           id="experience"
// //           name="experience"
// //           placeholder="Enter your experience in years"
// //           value={formData.experience}
// //           onChange={handleChange}
// //         />

// //         <label htmlFor="barcodeId">Barcode ID</label>
// //         <input
// //           type="text"
// //           id="barcodeId"
// //           name="barcodeId"
// //           placeholder="Enter your barcode ID"
// //           value={formData.barcodeId}
// //           onChange={handleChange}
// //         />

// //         <label htmlFor="image">Upload Image</label>
// //         <input
// //           type="file"
// //           id="image"
// //           name="image"
// //           onChange={handleImageChange}
// //         />

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LawyerPage;

// import React, { useState } from 'react';
// import './LawyerPage.css'; // Optional: Add styling here

// const LawyerPage = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     address: '',
//     specialty: '',
//     experience: '',
//     barcodeId: '',
//   });

//   const [image, setImage] = useState(null); // Separate state for the image
//   const [message, setMessage] = useState(''); // State for success or error messages

//   // Handle input changes for text inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle file input change for image upload
//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     // Append form data
//     Object.keys(formData).forEach((key) => {
//       formDataToSend.append(key, formData[key]);
//     });
//     // Append image file
//     if (image) {
//       formDataToSend.append('image', image);
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/lawyers/signup', {
//         method: 'POST',
//         body: formDataToSend,
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setMessage(`Success: ${result.message}`);
//       } else {
//         setMessage(`Error: ${result.error}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('Error submitting the form');
//     }
//   };

//   return (
//     <div className="lawyer-page">
//       <h1>Lawyer Signup</h1>
//       {message && <p>{message}</p>} {/* Display success or error messages */}
//       <form onSubmit={handleSubmit} className="lawyer-form">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Enter your full name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Enter your password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="address">Address</label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           placeholder="Enter your address"
//           value={formData.address}
//           onChange={handleChange}
//         />

//         <label htmlFor="specialty">Specialty</label>
//         <input
//           type="text"
//           id="specialty"
//           name="specialty"
//           placeholder="Enter your legal specialty"
//           value={formData.specialty}
//           onChange={handleChange}
//         />

//         <label htmlFor="experience">Experience (in years)</label>
//         <input
//           type="number"
//           id="experience"
//           name="experience"
//           placeholder="Enter your experience in years"
//           value={formData.experience}
//           onChange={handleChange}
//         />

//         <label htmlFor="barcodeId">Barcode ID</label>
//         <input
//           type="text"
//           id="barcodeId"
//           name="barcodeId"
//           placeholder="Enter your barcode ID"
//           value={formData.barcodeId}
//           onChange={handleChange}
//         />

//         <label htmlFor="image">Upload Image</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           onChange={handleImageChange}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default LawyerPage;

import React from "react";

const LawyerPage = () => {
  return (
    <div>
      <h1>Lawyer Signup/Login</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LawyerPage;
