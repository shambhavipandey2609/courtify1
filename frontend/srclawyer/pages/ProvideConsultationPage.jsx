

// import React, { useState } from "react";
// import "./ProvideConsultationPage.css"; // External CSS for styling
// import ChatPage from "./ChatPage"; // Import the ChatPage component
// import { useNavigate } from "react-router-dom";

// const ProvideConsultationPage = () => {
//   const [requests, setRequests] = useState([
//     { id: 1, clientName: "Rajashree Pal", caseDetails: "Property dispute", status: "new" },
//     { id: 2, clientName: "Harsh Singh", caseDetails: "Contract breach", status: "new" },
//   ]);

//   const [scheduledConsultations, setScheduledConsultations] = useState([
//     { id: 3, clientName: "Suramya Singh", caseDetails: "Divorce case", status: "scheduled" },
//   ]);

//   const [rejectReason, setRejectReason] = useState("");
//   const [showRejectPopup, setShowRejectPopup] = useState(false);
//   const [selectedRequest, setSelectedRequest] = useState(null);

//   const [showChat, setShowChat] = useState(false); // To toggle ChatPage
//   const [activeChat, setActiveChat] = useState(null); // Stores details of the active chat

//   const navigate = useNavigate(); // For navigation
//   const [activeMenu, setActiveMenu] = useState("consultations"); // Track active menu item

//   const handleAccept = (id) => {
//     const acceptedRequest = requests.find((req) => req.id === id);
//     setScheduledConsultations([...scheduledConsultations, { ...acceptedRequest, status: "scheduled" }]);
//     setRequests(requests.filter((req) => req.id !== id));
//   };

//   const handleReject = (id) => {
//     setSelectedRequest(id);
//     setShowRejectPopup(true);
//   };

//   const handleRejectSubmit = () => {
//     alert(`Rejection reason: ${rejectReason}`);
//     setRequests(requests.filter((req) => req.id !== selectedRequest));
//     setRejectReason("");
//     setShowRejectPopup(false);
//   };

//   const handleStartChat = (consult) => {
//     setActiveChat(consult); // Set the active consultation for the chat
//     setShowChat(true); // Show the ChatPage
//   };

//   const handleCloseChat = () => {
//     setShowChat(false); // Hide the ChatPage
//     setActiveChat(null); // Clear the active chat details
//   };

//   const handleNavigation = (menu) => {
//     setActiveMenu(menu); // Set active menu
//     if (menu === "dashboard") navigate("/dashboard");
//     if (menu === "internships") navigate("/post-internship");
//     if (menu === "profile") navigate("/profile");
//     // Stay on the same page for "consultations"
//   };

//   if (showChat && activeChat) {
//     return <ChatPage consultation={activeChat} onClose={handleCloseChat} />;
//   }

//   return (
//     <div className="consultation-page">
//       <div className="sidebar">
//         <h2>Lawyer Options</h2>
//         <ul>
//           <li
//             className={activeMenu === "dashboard" ? "active-menu" : ""}
//             onClick={() => handleNavigation("dashboard")}
//           >
//             Dashboard
//           </li>
//           <li
//             className={activeMenu === "consultations" ? "active-menu" : ""}
//             onClick={() => handleNavigation("consultations")}
//           >
//             Consultations
//           </li>
//           <li
//             className={activeMenu === "internships" ? "active-menu" : ""}
//             onClick={() => handleNavigation("internships")}
//           >
//             Internships
//           </li>
//           <li
//             className={activeMenu === "profile" ? "active-menu" : ""}
//             onClick={() => handleNavigation("profile")}
//           >
//             Profile
//           </li>
//         </ul>
//       </div>

//       <div className="content">
//         <h1>Consultation Management</h1>

//         {/* New Requests */}
//         <section>
//           <h2>New Requests</h2>
//           {requests.length === 0 ? (
//             <p>No new consultation requests.</p>
//           ) : (
//             <div className="requests">
//               {requests.map((req) => (
//                 <div key={req.id} className="request-card">
//                   <h3>{req.clientName}</h3>
//                   <p>{req.caseDetails}</p>
//                   <button className="accept-btn" onClick={() => handleAccept(req.id)}>
//                     Accept
//                   </button>
//                   <button className="reject-btn" onClick={() => handleReject(req.id)}>
//                     Reject
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>

//         {/* Scheduled Consultations */}
//         <section>
//           <h2>Scheduled Consultations</h2>
//           {scheduledConsultations.length === 0 ? (
//             <p>No scheduled consultations.</p>
//           ) : (
//             <div className="scheduled">
//               {scheduledConsultations.map((consult) => (
//                 <div key={consult.id} className="request-card">
//                   <h3>{consult.clientName}</h3>
//                   <p>{consult.caseDetails}</p>
//                   <button className="chat-btn" onClick={() => handleStartChat(consult)}>
//                     Start Chat
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//       </div>

//       {/* Reject Popup */}
//     {showRejectPopup && (
//   <div className="popup-overlay">
//     <div className="popup">
//       <h3 className="popup-title">Rejection Reason</h3>
//       <textarea
//         value={rejectReason}
//         onChange={(e) => setRejectReason(e.target.value)}
//         placeholder="Enter reason for rejection"
//         className="popup-textarea"
//       ></textarea>
//       <div className="popup-buttons">
//         <button className="popup-submit" onClick={handleRejectSubmit}>
//           Submit
//         </button>
//         <button className="popup-cancel" onClick={() => setShowRejectPopup(false)}>
//           Cancel
//         </button>
//       </div>
//     </div>
//   </div>
// )}


//     </div>
//   );
// };

// export default ProvideConsultationPage;



import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProvideConsultationPage.css";
import ChatPage from "./ChatPage";
import { useNavigate } from "react-router-dom";

const ProvideConsultationPage = () => {
  const [consultations, setConsultations] = useState([]);
  const [rejectReason, setRejectReason] = useState("");
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [showChat, setShowChat] = useState(false);
  const [activeChat, setActiveChat] = useState(null);

  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("consultations");

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const res = await axios.get("http://localhost:4001/api/consultations");
        setConsultations(res.data.data);
      } catch (error) {
        console.error("Failed to fetch consultations:", error);
      }
    };

    fetchConsultations();
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.put(`http://localhost:4001/api/consultations/${id}`, {
        status: "accepted",
      });
      setConsultations((prev) =>
        prev.map((c) => (c._id === id ? { ...c, status: "accepted" } : c))
      );
    } catch (error) {
      console.error("Error accepting consultation:", error);
    }
  };

  const handleReject = (id) => {
    setSelectedRequest(id);
    setShowRejectPopup(true);
  };

  const handleRejectSubmit = async () => {
    try {
      await axios.put(`http://localhost:4001/api/consultations/${selectedRequest}`, {
        status: "rejected",
      });
      setConsultations((prev) =>
        prev.map((c) =>
          c._id === selectedRequest ? { ...c, status: "rejected" } : c
        )
      );
      setRejectReason("");
      setShowRejectPopup(false);
    } catch (error) {
      console.error("Error rejecting consultation:", error);
    }
  };

  const handleStartChat = (consult) => {
    setActiveChat(consult);
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
    setActiveChat(null);
  };

  const handleNavigation = (menu) => {
    setActiveMenu(menu);
    if (menu === "dashboard") navigate("/dashboard");
    if (menu === "internships") navigate("/post-internship");
    if (menu === "profile") navigate("/profile");
  };

  const newRequests = consultations.filter((c) => c.status === "pending");
  const scheduledConsultations = consultations.filter((c) => c.status === "accepted");

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
          {newRequests.length === 0 ? (
            <p>No new consultation requests.</p>
          ) : (
            <div className="requests">
              {newRequests.map((req) => (
                <div key={req._id} className="request-card">
                  <h3>{req.clientName}</h3>
                  <p>Date: {req.date}</p>
                  <p>Time: {req.time}</p>
                  <button className="accept-btn" onClick={() => handleAccept(req._id)}>
                    Accept
                  </button>
                  <button className="reject-btn" onClick={() => handleReject(req._id)}>
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
                <div key={consult._id} className="request-card">
                  {/* <h3>{consult.clientName}</h3> */}
                  <p className="text-sm text-gray-600">
                       <strong>Legal Name:</strong> {consult.legalName || "N/A"}
                  </p>

                  <p>Date: {consult.date}</p>
                  <p>Time: {consult.time}</p>
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
        <div className="popup-overlay">
          <div className="popup">
            <h3 className="popup-title">Rejection Reason</h3>
            <textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Enter reason for rejection"
              className="popup-textarea"
            ></textarea>
            <div className="popup-buttons">
              <button className="popup-submit" onClick={handleRejectSubmit}>
                Submit
              </button>
              <button className="popup-cancel" onClick={() => setShowRejectPopup(false)}>
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
