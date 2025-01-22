// // // // // // // import React, { useState } from 'react';

// // // // // // // const ProvideConsultationPage = () => {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     topic: '',
// // // // // // //     date: '',
// // // // // // //     time: '',
// // // // // // //     fee: '',
// // // // // // //   });

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value } = e.target;
// // // // // // //     setFormData({ ...formData, [name]: value });
// // // // // // //   };

// // // // // // //   const handleSubmit = (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     console.log(formData);
// // // // // // //     // Send formData to backend API
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h1>Provide a Consultation</h1>
// // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // //         <input type="text" name="topic" placeholder="Topic" value={formData.topic} onChange={handleChange} required />
// // // // // // //         <input type="date" name="date" value={formData.date} onChange={handleChange} required />
// // // // // // //         <input type="time" name="time" value={formData.time} onChange={handleChange} required />
// // // // // // //         <input type="text" name="fee" placeholder="Consultation Fee" value={formData.fee} onChange={handleChange} />
// // // // // // //         <button type="submit">Schedule</button>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProvideConsultationPage;
// // // // import React, { useState } from 'react';
// // // // import './ProvideConsultationPage.css'; // Add styles as needed
// // // // import { useNavigate } from 'react-router-dom';

// // // // const ProvideConsultationPage = () => {
// // // //   const [requests, setRequests] = useState([
// // // //     { id: 1, clientName: 'John Doe', caseDetails: 'Property dispute', status: 'new' },
// // // //     { id: 2, clientName: 'Jane Smith', caseDetails: 'Contract breach', status: 'new' },
// // // //   ]);

// // // //   const [scheduledConsultations, setScheduledConsultations] = useState([
// // // //     { id: 3, clientName: 'Alice Brown', caseDetails: 'Divorce case', status: 'scheduled' },
// // // //   ]);

// // // //   const [rejectReason, setRejectReason] = useState('');
// // // //   const [showRejectPopup, setShowRejectPopup] = useState(false);
// // // //   const [selectedRequest, setSelectedRequest] = useState(null);

// // // //   const navigate = useNavigate();

// // // //   const handleAccept = (id) => {
// // // //     const acceptedRequest = requests.find((req) => req.id === id);
// // // //     setScheduledConsultations([...scheduledConsultations, { ...acceptedRequest, status: 'scheduled' }]);
// // // //     setRequests(requests.filter((req) => req.id !== id));
// // // //   };

// // // //   const handleReject = (id) => {
// // // //     setSelectedRequest(id);
// // // //     setShowRejectPopup(true);
// // // //   };

// // // //   const handleRejectSubmit = () => {
// // // //     alert(`Rejection reason: ${rejectReason}`);
// // // //     setRequests(requests.filter((req) => req.id !== selectedRequest));
// // // //     setRejectReason('');
// // // //     setShowRejectPopup(false);
// // // //   };

// // // //   const handleStartChat = (id) => {
// // // //     navigate(`/chat/${id}`);
// // // //   };

// // // //   return (
// // // //     <div className="consultation-page">
// // // //       <div className="sidebar">
// // // //         <h2>Lawyer Options</h2>
// // // //         <ul>
// // // //           <li>Dashboard</li>
// // // //           <li>Consultations</li>
// // // //           <li>Internships</li>
// // // //           <li>Profile</li>
// // // //         </ul>
// // // //       </div>

// // // //       <div className="content">
// // // //         <h1>Consultation Management</h1>

// // // //         {/* New Requests */}
// // // //         <section>
// // // //           <h2>New Requests</h2>
// // // //           {requests.length === 0 ? (
// // // //             <p>No new consultation requests.</p>
// // // //           ) : (
// // // //             <div className="requests">
// // // //               {requests.map((req) => (
// // // //                 <div key={req.id} className="request-card">
// // // //                   <h3>{req.clientName}</h3>
// // // //                   <p>{req.caseDetails}</p>
// // // //                   <button onClick={() => handleAccept(req.id)}>Accept</button>
// // // //                   <button onClick={() => handleReject(req.id)}>Reject</button>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </section>

// // // //         {/* Scheduled Consultations */}
// // // //         <section>
// // // //           <h2>Scheduled Consultations</h2>
// // // //           {scheduledConsultations.length === 0 ? (
// // // //             <p>No scheduled consultations.</p>
// // // //           ) : (
// // // //             <div className="scheduled">
// // // //               {scheduledConsultations.map((consult) => (
// // // //                 <div key={consult.id} className="scheduled-card">
// // // //                   <h3>{consult.clientName}</h3>
// // // //                   <p>{consult.caseDetails}</p>
// // // //                   <button onClick={() => handleStartChat(consult.id)}>Start Chat</button>
// // // //                   <button onClick={() => handleStartChat(consult.id)}>Continue Chat</button>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </section>
// // // //       </div>

// // // //       {/* Reject Popup */}
// // // //       {showRejectPopup && (
// // // //         <div className="popup">
// // // //           <div className="popup-content">
// // // //             <h3>Rejection Reason</h3>
// // // //             <textarea
// // // //               value={rejectReason}
// // // //               onChange={(e) => setRejectReason(e.target.value)}
// // // //               placeholder="Enter reason for rejection"
// // // //             ></textarea>
// // // //             <button onClick={handleRejectSubmit}>Submit</button>
// // // //             <button onClick={() => setShowRejectPopup(false)}>Cancel</button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProvideConsultationPage;


// // // // import React, { useState } from "react";
// // // // import "./ProvideConsultationPage.css"; // External CSS for styling
// // // // import { useNavigate } from "react-router-dom";
// // // // import ChatPage from "./ChatPage";

// // // // const ProvideConsultationPage = () => {
// // // //   const [requests, setRequests] = useState([
// // // //     { id: 1, clientName: "John Doe", caseDetails: "Property dispute", status: "new" },
// // // //     { id: 2, clientName: "Jane Smith", caseDetails: "Contract breach", status: "new" },
// // // //   ]);

// // // //   const [scheduledConsultations, setScheduledConsultations] = useState([
// // // //     { id: 3, clientName: "Alice Brown", caseDetails: "Divorce case", status: "scheduled" },
// // // //   ]);

// // // //   const [rejectReason, setRejectReason] = useState("");
// // // //   const [showRejectPopup, setShowRejectPopup] = useState(false);
// // // //   const [selectedRequest, setSelectedRequest] = useState(null);

// // // //   const navigate = useNavigate();

// // // //   // Accept a consultation request
// // // //   const handleAccept = (id) => {
// // // //     const acceptedRequest = requests.find((req) => req.id === id);
// // // //     setScheduledConsultations([...scheduledConsultations, { ...acceptedRequest, status: "scheduled" }]);
// // // //     setRequests(requests.filter((req) => req.id !== id));
// // // //   };

// // // //   // Open rejection popup
// // // //   const handleReject = (id) => {
// // // //     setSelectedRequest(id);
// // // //     setShowRejectPopup(true);
// // // //   };

// // // //   // Submit rejection reason
// // // //   const handleRejectSubmit = () => {
// // // //     alert(`Rejection reason: ${rejectReason}`);
// // // //     setRequests(requests.filter((req) => req.id !== selectedRequest));
// // // //     setRejectReason("");
// // // //     setShowRejectPopup(false);
// // // //   };

// // // //   // Redirect to chat page
// // // //   const handleStartChat = (id) => {
// // // //     navigate(`/chat/${id}`);
// // // //   };

// // // //   return (
// // // //     <div className="consultation-page">
// // // //       <div className="sidebar">
// // // //         <h2>Lawyer Options</h2>
// // // //         <ul>
// // // //           <li>Dashboard</li>
// // // //           <li>Consultations</li>
// // // //           <li>Internships</li>
// // // //           <li>Profile</li>
// // // //         </ul>
// // // //       </div>

// // // //       <div className="content">
// // // //         <h1>Consultation Management</h1>

// // // //         {/* New Requests */}
// // // //         <section>
// // // //           <h2>New Requests</h2>
// // // //           {requests.length === 0 ? (
// // // //             <p>No new consultation requests.</p>
// // // //           ) : (
// // // //             <div className="requests">
// // // //               {requests.map((req) => (
// // // //                 <div key={req.id} className="request-card">
// // // //                   <h3>{req.clientName}</h3>
// // // //                   <p>{req.caseDetails}</p>
// // // //                   <button onClick={() => handleAccept(req.id)}>Accept</button>
// // // //                   <button onClick={() => handleReject(req.id)}>Reject</button>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </section>

// // // //         {/* Scheduled Consultations */}
// // // //         <section>
// // // //           <h2>Scheduled Consultations</h2>
// // // //           {scheduledConsultations.length === 0 ? (
// // // //             <p>No scheduled consultations.</p>
// // // //           ) : (
// // // //             <div className="scheduled">
// // // //               {scheduledConsultations.map((consult) => (
// // // //                 <div key={consult.id} className="scheduled-card">
// // // //                   <h3>{consult.clientName}</h3>
// // // //                   <p>{consult.caseDetails}</p>
// // // //                   <button onClick={() => handleStartChat(consult.id)}>Start Chat</button>
// // // //                   <button onClick={() => handleStartChat(consult.id)}>Continue Chat</button>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </section>
// // // //       </div>

// // // //       {/* Reject Popup */}
// // // //       {showRejectPopup && (
// // // //         <div className="popup">
// // // //           <div className="popup-content">
// // // //             <h3>Rejection Reason</h3>
// // // //             <textarea
// // // //               value={rejectReason}
// // // //               onChange={(e) => setRejectReason(e.target.value)}
// // // //               placeholder="Enter reason for rejection"
// // // //             ></textarea>
// // // //             <button onClick={handleRejectSubmit}>Submit</button>
// // // //             <button onClick={() => setShowRejectPopup(false)}>Cancel</button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProvideConsultationPage;


// // // // // import React, { useState } from "react";
// // // // // import "./ProvideConsultationPage.css"; // External CSS for styling
// // // // // import ChatPage from "./ChatPage"; // Import the ChatPage component

// // // // // const ProvideConsultationPage = () => {
// // // // //   const [requests, setRequests] = useState([
// // // // //     { id: 1, clientName: "John Doe", caseDetails: "Property dispute", status: "new" },
// // // // //     { id: 2, clientName: "Jane Smith", caseDetails: "Contract breach", status: "new" },
// // // // //   ]);

// // // // //   const [scheduledConsultations, setScheduledConsultations] = useState([
// // // // //     { id: 3, clientName: "Alice Brown", caseDetails: "Divorce case", status: "scheduled" },
// // // // //   ]);

// // // // //   const [rejectReason, setRejectReason] = useState("");
// // // // //   const [showRejectPopup, setShowRejectPopup] = useState(false);
// // // // //   const [selectedRequest, setSelectedRequest] = useState(null);

// // // // //   const [showChat, setShowChat] = useState(false); // To toggle ChatPage
// // // // //   const [activeChat, setActiveChat] = useState(null); // Stores details of the active chat

// // // // //   // Accept a consultation request
// // // // //   const handleAccept = (id) => {
// // // // //     const acceptedRequest = requests.find((req) => req.id === id);
// // // // //     setScheduledConsultations([...scheduledConsultations, { ...acceptedRequest, status: "scheduled" }]);
// // // // //     setRequests(requests.filter((req) => req.id !== id));
// // // // //   };

// // // // //   // Open rejection popup
// // // // //   const handleReject = (id) => {
// // // // //     setSelectedRequest(id);
// // // // //     setShowRejectPopup(true);
// // // // //   };

// // // // //   // Submit rejection reason
// // // // //   const handleRejectSubmit = () => {
// // // // //     alert(`Rejection reason: ${rejectReason}`);
// // // // //     setRequests(requests.filter((req) => req.id !== selectedRequest));
// // // // //     setRejectReason("");
// // // // //     setShowRejectPopup(false);
// // // // //   };

// // // // //   // Open chat page
// // // // //   const handleStartChat = (consult) => {
// // // // //     setActiveChat(consult); // Set the active consultation for the chat
// // // // //     setShowChat(true); // Show the ChatPage
// // // // //   };

// // // // //   // Close chat page
// // // // //   const handleCloseChat = () => {
// // // // //     setShowChat(false); // Hide the ChatPage
// // // // //     setActiveChat(null); // Clear the active chat details
// // // // //   };

// // // // //   // If ChatPage is active, render it
// // // // //   if (showChat && activeChat) {
// // // // //     return <ChatPage consultation={activeChat} onClose={handleCloseChat} />;
// // // // //   }

// // // // //   return (
// // // // //     <div className="consultation-page">
// // // // //       <div className="sidebar">
// // // // //         <h2>Lawyer Options</h2>
// // // // //         <ul>
// // // // //           <li>Dashboard</li>
// // // // //           <li>Consultations</li>
// // // // //           <li>Internships</li>
// // // // //           <li>Profile</li>
// // // // //         </ul>
// // // // //       </div>

// // // // //       <div className="content">
// // // // //         <h1>Consultation Management</h1>

// // // // //         {/* New Requests */}
// // // // //         {/* <section>
// // // // //           <h2>New Requests</h2>
// // // // //           {requests.length === 0 ? (
// // // // //             <p>No new consultation requests.</p>
// // // // //           ) : (
// // // // //             <div className="requests">
// // // // //               {requests.map((req) => (
// // // // //                 <div key={req.id} className="request-card">
// // // // //                   <h3>{req.clientName}</h3>
// // // // //                   <p>{req.caseDetails}</p>
// // // // //                   <button onClick={() => handleAccept(req.id)}>Accept</button>
// // // // //                   <button onClick={() => handleReject(req.id)}>Reject</button>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </section> */}
// // // // // <section>
// // // // //           <h2>New Requests</h2>
// // // // //           {requests.length === 0 ? (
// // // // //             <p>No new consultation requests.</p>
// // // // //           ) : (
// // // // //             <div className="requests">
// // // // //               {requests.map((req) => (
// // // // //                 <div key={req.id} className="request-card">
// // // // //                   <h3>{req.clientName}</h3>
// // // // //                   <p>{req.caseDetails}</p>
// // // // //                   <button className="accept-btn" onClick={() => handleAccept(req.id)}>
// // // // //                     Accept
// // // // //                   </button>
// // // // //                   <button className="reject-btn" onClick={() => handleReject(req.id)}>
// // // // //                     Reject
// // // // //                   </button>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </section>
// // // // //          {/* Scheduled Consultations */}
// // // // //          <section>
// // // // //           <h2>Scheduled Consultations</h2>
// // // // //           {scheduledConsultations.length === 0 ? (
// // // // //             <p>No scheduled consultations.</p>
// // // // //           ) : (
// // // // //             <div className="scheduled">
// // // // //               {scheduledConsultations.map((consult) => (
// // // // //                 <div key={consult.id} className="scheduled-card">
// // // // //                   <h3>{consult.clientName}</h3>
// // // // //                   <p>{consult.caseDetails}</p>
// // // // //                   <button className="chat-btn" onClick={() => handleStartChat(consult)}>
// // // // //                     Start Chat
// // // // //                   </button>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </section>
// // // // //       </div>

// // // // //       {/* Reject Popup */}
// // // // //       {showRejectPopup && (
// // // // //         <div className="popup">
// // // // //           <div className="popup-content">
// // // // //             <h3>Rejection Reason</h3>
// // // // //             <textarea
// // // // //               value={rejectReason}
// // // // //               onChange={(e) => setRejectReason(e.target.value)}
// // // // //               placeholder="Enter reason for rejection"
// // // // //             ></textarea>
// // // // //             <div className="popup-buttons">
// // // // //               <button className="submit-btn" onClick={handleRejectSubmit}>
// // // // //                 Submit
// // // // //               </button>
// // // // //               <button className="cancel-btn" onClick={() => setShowRejectPopup(false)}>
// // // // //                 Cancel
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProvideConsultationPage;

// // // // // import React, { useState } from "react";
// // // // // import "./ProvideConsultationPage.css";
// // // // // import Sidebar from "../components/Sidebar.jsx"; // Import Sidebar component
// // // // // import ChatPage from "./ChatPage"; // Import ChatPage

// // // // // const ProvideConsultationPage = () => {
// // // // //   const [requests, setRequests] = useState([
// // // // //     { id: 1, clientName: "John Doe", caseDetails: "Property dispute", status: "new" },
// // // // //     { id: 2, clientName: "Jane Smith", caseDetails: "Contract breach", status: "new" },
// // // // //   ]);

// // // // //   const [scheduledConsultations, setScheduledConsultations] = useState([
// // // // //     { id: 3, clientName: "Alice Brown", caseDetails: "Divorce case", status: "scheduled" },
// // // // //   ]);

// // // // //   const [rejectReason, setRejectReason] = useState("");
// // // // //   const [showRejectPopup, setShowRejectPopup] = useState(false);
// // // // //   const [selectedRequest, setSelectedRequest] = useState(null);

// // // // //   const [showChat, setShowChat] = useState(false);
// // // // //   const [activeChat, setActiveChat] = useState(null);

// // // // //   const handleAccept = (id) => {
// // // // //     const acceptedRequest = requests.find((req) => req.id === id);
// // // // //     setScheduledConsultations([...scheduledConsultations, { ...acceptedRequest, status: "scheduled" }]);
// // // // //     setRequests(requests.filter((req) => req.id !== id));
// // // // //   };

// // // // //   const handleReject = (id) => {
// // // // //     setSelectedRequest(id);
// // // // //     setShowRejectPopup(true);
// // // // //   };

// // // // //   const handleRejectSubmit = () => {
// // // // //     alert(`Rejection reason: ${rejectReason}`);
// // // // //     setRequests(requests.filter((req) => req.id !== selectedRequest));
// // // // //     setRejectReason("");
// // // // //     setShowRejectPopup(false);
// // // // //   };

// // // // //   const handleStartChat = (consult) => {
// // // // //     setActiveChat(consult);
// // // // //     setShowChat(true);
// // // // //   };

// // // // //   const handleCloseChat = () => {
// // // // //     setShowChat(false);
// // // // //     setActiveChat(null);
// // // // //   };

// // // // //   const sidebarMenuItems = [
// // // // //     { label: "Dashboard", onClick: () => alert("Navigating to Dashboard...") },
// // // // //     { label: "Consultations", onClick: () => alert("Navigating to Consultations...") },
// // // // //     { label: "Internships", onClick: () => alert("Navigating to Internships...") },
// // // // //     { label: "Profile", onClick: () => alert("Navigating to Profile...") },
// // // // //   ];

// // // // //   if (showChat && activeChat) {
// // // // //     return <ChatPage consultation={activeChat} onClose={handleCloseChat} />;
// // // // //   }

// // // // //   return (
// // // // //     <div className="consultation-page">
// // // // //       <Sidebar title="Lawyer Options" menuItems={sidebarMenuItems} />

// // // // //       <div className="content">
// // // // //         <h1>Consultation Management</h1>

// // // // //         <section>
// // // // //           <h2>New Requests</h2>
// // // // //           {requests.length === 0 ? (
// // // // //             <p>No new consultation requests.</p>
// // // // //           ) : (
// // // // //             <div className="requests">
// // // // //               {requests.map((req) => (
// // // // //                 <div key={req.id} className="request-card">
// // // // //                   <h3>{req.clientName}</h3>
// // // // //                   <p>{req.caseDetails}</p>
// // // // //                   <button className="accept-btn" onClick={() => handleAccept(req.id)}>
// // // // //                     Accept
// // // // //                   </button>
// // // // //                   <button className="reject-btn" onClick={() => handleReject(req.id)}>
// // // // //                     Reject
// // // // //                   </button>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </section>

// // // // //         <section>
// // // // //           <h2>Scheduled Consultations</h2>
// // // // //           {scheduledConsultations.length === 0 ? (
// // // // //             <p>No scheduled consultations.</p>
// // // // //           ) : (
// // // // //             <div className="scheduled">
// // // // //               {scheduledConsultations.map((consult) => (
// // // // //                 <div key={consult.id} className="scheduled-card">
// // // // //                   <h3>{consult.clientName}</h3>
// // // // //                   <p>{consult.caseDetails}</p>
// // // // //                   <button className="chat-btn" onClick={() => handleStartChat(consult)}>
// // // // //                     Start Chat
// // // // //                   </button>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </section>
// // // // //       </div>

// // // // //       {showRejectPopup && (
// // // // //         <div className="popup">
// // // // //           <div className="popup-content">
// // // // //             <h3>Rejection Reason</h3>
// // // // //             <textarea
// // // // //               value={rejectReason}
// // // // //               onChange={(e) => setRejectReason(e.target.value)}
// // // // //               placeholder="Enter reason for rejection"
// // // // //             ></textarea>
// // // // //             <div className="popup-buttons">
// // // // //               <button className="submit-btn" onClick={handleRejectSubmit}>
// // // // //                 Submit
// // // // //               </button>
// // // // //               <button className="cancel-btn" onClick={() => setShowRejectPopup(false)}>
// // // // //                 Cancel
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProvideConsultationPage;

// // // import React, { useState } from "react";
// // // import "./ProvideConsultationPage.css"; // External CSS for styling
// // // import ChatPage from "./ChatPage"; // Import the ChatPage component

// // // const ProvideConsultationPage = () => {
// // //   const [requests, setRequests] = useState([
// // //     { id: 1, clientName: "John Doe", caseDetails: "Property dispute", status: "new" },
// // //     { id: 2, clientName: "Jane Smith", caseDetails: "Contract breach", status: "new" },
// // //   ]);

// // //   const [scheduledConsultations, setScheduledConsultations] = useState([
// // //     { id: 3, clientName: "Alice Brown", caseDetails: "Divorce case", status: "scheduled" },
// // //   ]);

// // //   const [rejectReason, setRejectReason] = useState("");
// // //   const [showRejectPopup, setShowRejectPopup] = useState(false);
// // //   const [selectedRequest, setSelectedRequest] = useState(null);

// // //   const [showChat, setShowChat] = useState(false); // To toggle ChatPage
// // //   const [activeChat, setActiveChat] = useState(null); // Stores details of the active chat

// // //   // Accept a consultation request
// // //   const handleAccept = (id) => {
// // //     const acceptedRequest = requests.find((req) => req.id === id);
// // //     setScheduledConsultations([...scheduledConsultations, { ...acceptedRequest, status: "scheduled" }]);
// // //     setRequests(requests.filter((req) => req.id !== id));
// // //   };

// // //   // Open rejection popup
// // //   const handleReject = (id) => {
// // //     setSelectedRequest(id);
// // //     setShowRejectPopup(true);
// // //   };

// // //   // Submit rejection reason
// // //   const handleRejectSubmit = () => {
// // //     alert(`Rejection reason: ${rejectReason}`);
// // //     setRequests(requests.filter((req) => req.id !== selectedRequest));
// // //     setRejectReason("");
// // //     setShowRejectPopup(false);
// // //   };

// // //   // Open chat page
// // //   const handleStartChat = (consult) => {
// // //     setActiveChat(consult); // Set the active consultation for the chat
// // //     setShowChat(true); // Show the ChatPage
// // //   };

// // //   // Close chat page
// // //   const handleCloseChat = () => {
// // //     setShowChat(false); // Hide the ChatPage
// // //     setActiveChat(null); // Clear the active chat details
// // //   };

// // //   // If ChatPage is active, render it
// // //   if (showChat && activeChat) {
// // //     return <ChatPage consultation={activeChat} onClose={handleCloseChat} />;
// // //   }

// // //   return (
// // //     <div className="consultation-page">
// // //       <div className="sidebar">
// // //         <h2>Lawyer Options</h2>
// // //         <ul>
// // //           <li>Dashboard</li>
// // //           <li>Consultations</li>
// // //           <li>Internships</li>
// // //           <li>Profile</li>
// // //         </ul>
// // //       </div>

// // //       <div className="content">
// // //         <h1>Consultation Management</h1>

// // //         {/* New Requests */}
// // //         <section>
// // //           <h2>New Requests</h2>
// // //           {requests.length === 0 ? (
// // //             <p>No new consultation requests.</p>
// // //           ) : (
// // //             <div className="requests">
// // //               {requests.map((req) => (
// // //                 <div key={req.id} className="request-card">
// // //                   <h3>{req.clientName}</h3>
// // //                   <p>{req.caseDetails}</p>
// // //                   <button className="accept-btn" onClick={() => handleAccept(req.id)}>
// // //                     Accept
// // //                   </button>
// // //                   <button className="reject-btn" onClick={() => handleReject(req.id)}>
// // //                     Reject
// // //                   </button>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </section>
// // //          {/* Scheduled Consultations */}
// // //          <section>
// // //           <h2>Scheduled Consultations</h2>
// // //           {scheduledConsultations.length === 0 ? (
// // //             <p>No scheduled consultations.</p>
// // //           ) : (
// // //             <div className="scheduled">
// // //               {scheduledConsultations.map((consult) => (
// // //                 <div key={consult.id} className="scheduled-card">
// // //                   <h3>{consult.clientName}</h3>
// // //                   <p>{consult.caseDetails}</p>
// // //                   <button className="chat-btn" onClick={() => handleStartChat(consult)}>
// // //                     Start Chat
// // //                   </button>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </section>
// // //       </div>

// // //       {/* Reject Popup */}
// // //       {showRejectPopup && (
// // //         <div className="popup">
// // //           <div className="popup-content">
// // //             <h3>Rejection Reason</h3>
// // //             <textarea
// // //               value={rejectReason}
// // //               onChange={(e) => setRejectReason(e.target.value)}
// // //               placeholder="Enter reason for rejection"
// // //             ></textarea>
// // //             <div className="popup-buttons">
// // //               <button className="submit-btn" onClick={handleRejectSubmit}>
// // //                 Submit
// // //               </button>
// // //               <button className="cancel-btn" onClick={() => setShowRejectPopup(false)}>
// // //                 Cancel
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ProvideConsultationPage; 

// // import React, { useState } from "react";
// // import "./ProvideConsultationPage.css"; // External CSS for styling
// // import ChatPage from "./ChatPage"; // Import the ChatPage component
// // import { useNavigate } from "react-router-dom";

// // const ProvideConsultationPage = () => {
// //   const [requests, setRequests] = useState([
// //     { id: 1, clientName: "John Doe", caseDetails: "Property dispute", status: "new" },
// //     { id: 2, clientName: "Jane Smith", caseDetails: "Contract breach", status: "new" },
// //   ]);

// //   const [scheduledConsultations, setScheduledConsultations] = useState([
// //     { id: 3, clientName: "Alice Brown", caseDetails: "Divorce case", status: "scheduled" },
// //   ]);

// //   const [rejectReason, setRejectReason] = useState("");
// //   const [showRejectPopup, setShowRejectPopup] = useState(false);
// //   const [selectedRequest, setSelectedRequest] = useState(null);

// //   const [showChat, setShowChat] = useState(false); // To toggle ChatPage
// //   const [activeChat, setActiveChat] = useState(null); // Stores details of the active chat

// //   const navigate = useNavigate(); // For navigation
// //   const [activeMenu, setActiveMenu] = useState("consultations"); // Track active menu item

// //   // Accept a consultation request
// //   const handleAccept = (id) => {
// //     const acceptedRequest = requests.find((req) => req.id === id);
// //     setScheduledConsultations([...scheduledConsultations, { ...acceptedRequest, status: "scheduled" }]);
// //     setRequests(requests.filter((req) => req.id !== id));
// //   };

// //   // Open rejection popup
// //   const handleReject = (id) => {
// //     setSelectedRequest(id);
// //     setShowRejectPopup(true);
// //   };

// //   // Submit rejection reason
// //   const handleRejectSubmit = () => {
// //     alert(`Rejection reason: ${rejectReason}`);
// //     setRequests(requests.filter((req) => req.id !== selectedRequest));
// //     setRejectReason("");
// //     setShowRejectPopup(false);
// //   };

// //   // Open chat page
// //   const handleStartChat = (consult) => {
// //     setActiveChat(consult); // Set the active consultation for the chat
// //     setShowChat(true); // Show the ChatPage
// //   };

// //   // Close chat page
// //   const handleCloseChat = () => {
// //     setShowChat(false); // Hide the ChatPage
// //     setActiveChat(null); // Clear the active chat details
// //   };

// //   // Handle navigation from the sidebar
// //   const handleNavigation = (menu) => {
// //     setActiveMenu(menu); // Set active menu
// //     if (menu === "dashboard") navigate("/dashboard");
// //     if (menu === "internships") navigate("/post-internship");
// //     if (menu === "profile") navigate("/profile");
// //     // Stay on the same page for "consultations"
// //   };

// //   // If ChatPage is active, render it
// //   if (showChat && activeChat) {
// //     return <ChatPage consultation={activeChat} onClose={handleCloseChat} />;
// //   }

// //   return (
// //     <div className="consultation-page">
// //       <div className="sidebar">
// //         <h2>Lawyer Options</h2>
// //         <ul>
// //           <li
// //             className={activeMenu === "dashboard" ? "active-menu" : ""}
// //             onClick={() => handleNavigation("dashboard")}
// //           >
// //             Dashboard
// //           </li>
// //           <li
// //             className={activeMenu === "consultations" ? "active-menu" : ""}
// //             onClick={() => handleNavigation("consultations")}
// //           >
// //             Consultations
// //           </li>
// //           <li
// //             className={activeMenu === "internships" ? "active-menu" : ""}
// //             onClick={() => handleNavigation("internships")}
// //           >
// //             Internships
// //           </li>
// //           <li
// //             className={activeMenu === "profile" ? "active-menu" : ""}
// //             onClick={() => handleNavigation("profile")}
// //           >
// //             Profile
// //           </li>
// //         </ul>
// //       </div>

// //       <div className="content">
// //         <h1>Consultation Management</h1>

// //         {/* New Requests */}
// //         <section>
// //           <h2>New Requests</h2>
// //           {requests.length === 0 ? (
// //             <p>No new consultation requests.</p>
// //           ) : (
// //             <div className="requests">
// //               {requests.map((req) => (
// //                 <div key={req.id} className="request-card">
// //                   <h3>{req.clientName}</h3>
// //                   <p>{req.caseDetails}</p>
// //                   <button className="accept-btn" onClick={() => handleAccept(req.id)}>
// //                     Accept
// //                   </button>
// //                   <button className="reject-btn" onClick={() => handleReject(req.id)}>
// //                     Reject
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </section>

// //         {/* Scheduled Consultations */}
// //         <section>
// //           <h2>Scheduled Consultations</h2>
// //           {scheduledConsultations.length === 0 ? (
// //             <p>No scheduled consultations.</p>
// //           ) : (
// //             <div className="scheduled">
// //               {scheduledConsultations.map((consult) => (
// //                 <div key={consult.id} className="scheduled-card">
// //                   <h3>{consult.clientName}</h3>
// //                   <p>{consult.caseDetails}</p>
// //                   <button className="chat-btn" onClick={() => handleStartChat(consult)}>
// //                     Start Chat
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </section>
// //       </div>

// //       {/* Reject Popup */}
// //       {showRejectPopup && (
// //         <div className="popup">
// //           <div className="popup-content">
// //             <h3>Rejection Reason</h3>
// //             <textarea
// //               value={rejectReason}
// //               onChange={(e) => setRejectReason(e.target.value)}
// //               placeholder="Enter reason for rejection"
// //             ></textarea>
// //             <div className="popup-buttons">
// //               <button className="submit-btn" onClick={handleRejectSubmit}>
// //                 Submit
// //               </button>
// //               <button className="cancel-btn" onClick={() => setShowRejectPopup(false)}>
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProvideConsultationPage;

import React, { useState } from "react";
import "./ProvideConsultationPage.css"; // External CSS for styling
import ChatPage from "./ChatPage"; // Import the ChatPage component
import { useNavigate } from "react-router-dom";

const ProvideConsultationPage = () => {
  const [requests, setRequests] = useState([
    { id: 1, clientName: "John Doe", caseDetails: "Property dispute", status: "new" },
    { id: 2, clientName: "Jane Smith", caseDetails: "Contract breach", status: "new" },
  ]);

  const [scheduledConsultations, setScheduledConsultations] = useState([
    { id: 3, clientName: "Alice Brown", caseDetails: "Divorce case", status: "scheduled" },
  ]);

  const [rejectReason, setRejectReason] = useState("");
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [showChat, setShowChat] = useState(false); // To toggle ChatPage
  const [activeChat, setActiveChat] = useState(null); // Stores details of the active chat

  const navigate = useNavigate(); // For navigation
  const [activeMenu, setActiveMenu] = useState("consultations"); // Track active menu item

  const handleAccept = (id) => {
    const acceptedRequest = requests.find((req) => req.id === id);
    setScheduledConsultations([...scheduledConsultations, { ...acceptedRequest, status: "scheduled" }]);
    setRequests(requests.filter((req) => req.id !== id));
  };

  const handleReject = (id) => {
    setSelectedRequest(id);
    setShowRejectPopup(true);
  };

  const handleRejectSubmit = () => {
    alert(`Rejection reason: ${rejectReason}`);
    setRequests(requests.filter((req) => req.id !== selectedRequest));
    setRejectReason("");
    setShowRejectPopup(false);
  };

  const handleStartChat = (consult) => {
    setActiveChat(consult); // Set the active consultation for the chat
    setShowChat(true); // Show the ChatPage
  };

  const handleCloseChat = () => {
    setShowChat(false); // Hide the ChatPage
    setActiveChat(null); // Clear the active chat details
  };

  const handleNavigation = (menu) => {
    setActiveMenu(menu); // Set active menu
    if (menu === "dashboard") navigate("/dashboard");
    if (menu === "internships") navigate("/post-internship");
    if (menu === "profile") navigate("/profile");
    // Stay on the same page for "consultations"
  };

  if (showChat && activeChat) {
    return <ChatPage consultation={activeChat} onClose={handleCloseChat} />;
  }

  return (
    <div className="consultation-page">
      <div className="sidebar">
        <h2>Lawyer Options</h2>
        <ul>
          <li
            className={activeMenu === "dashboard" ? "active-menu" : ""}
            onClick={() => handleNavigation("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activeMenu === "consultations" ? "active-menu" : ""}
            onClick={() => handleNavigation("consultations")}
          >
            Consultations
          </li>
          <li
            className={activeMenu === "internships" ? "active-menu" : ""}
            onClick={() => handleNavigation("internships")}
          >
            Internships
          </li>
          <li
            className={activeMenu === "profile" ? "active-menu" : ""}
            onClick={() => handleNavigation("profile")}
          >
            Profile
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>Consultation Management</h1>

        {/* New Requests */}
        <section>
          <h2>New Requests</h2>
          {requests.length === 0 ? (
            <p>No new consultation requests.</p>
          ) : (
            <div className="requests">
              {requests.map((req) => (
                <div key={req.id} className="request-card">
                  <h3>{req.clientName}</h3>
                  <p>{req.caseDetails}</p>
                  <button className="accept-btn" onClick={() => handleAccept(req.id)}>
                    Accept
                  </button>
                  <button className="reject-btn" onClick={() => handleReject(req.id)}>
                    Reject
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Scheduled Consultations */}
        <section>
          <h2>Scheduled Consultations</h2>
          {scheduledConsultations.length === 0 ? (
            <p>No scheduled consultations.</p>
          ) : (
            <div className="scheduled">
              {scheduledConsultations.map((consult) => (
                <div key={consult.id} className="request-card">
                  <h3>{consult.clientName}</h3>
                  <p>{consult.caseDetails}</p>
                  <button className="chat-btn" onClick={() => handleStartChat(consult)}>
                    Start Chat
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Reject Popup */}
      {showRejectPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Rejection Reason</h3>
            <textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Enter reason for rejection"
            ></textarea>
            <div className="popup-buttons">
              <button className="submit-btn" onClick={handleRejectSubmit}>
                Submit
              </button>
              <button className="cancel-btn" onClick={() => setShowRejectPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProvideConsultationPage;



// import React, { useState } from "react";
// import "./ProvideConsultationPage.css"; // External CSS for styling
// import ChatPage from "./ChatPage"; // Import the ChatPage component
// import Sidebar from "../components/Sidebar";

// const ProvideConsultationPage = () => {
//   const [requests, setRequests] = useState([
//     { id: 1, clientName: "John Doe", caseDetails: "Property dispute", status: "new" },
//     { id: 2, clientName: "Jane Smith", caseDetails: "Contract breach", status: "new" },
//   ]);

//   const [scheduledConsultations, setScheduledConsultations] = useState([
//     { id: 3, clientName: "Alice Brown", caseDetails: "Divorce case", status: "scheduled" },
//   ]);

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar activeMenu="consultations" />
//       <div className="content">
//         <h1>Consultation Management</h1>
//         {/* Remaining code for consultation requests and chat */}
//       </div>
//     </div>
//   );
// };

// export default ProvideConsultationPage;
