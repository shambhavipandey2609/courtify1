// export default ProvideConsultationPage;
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProvideConsultationPage.css";
const ProvideConsultationPage = () => {
  const [consultations, setConsultations] = useState([]);
  const [activeMenu, setActiveMenu] = useState("consultations");
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [selectedRejectId, setSelectedRejectId] = useState(null);

  // Fetch consultations on mount
  const fetchConsultations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4001/api/consultations"
      );
      setConsultations(response.data.data);
    } catch (error) {
      console.error("Error fetching consultations:", error);
    }
  };

  useEffect(() => {
    fetchConsultations();
  }, []);

  const handleNavigation = (menu) => {
    setActiveMenu(menu);
  };

  // const handleAccept = async (id) => {
  //   try {
  //     await axios.put(`http://localhost:4001/api/consultations/${id}`, {
  //       status: "accepted",
  //     });
  //     fetchConsultations(); // Refetch updated data
  //   } catch (error) {
  //     console.error("Error accepting consultation:", error);
  //   }

  // };

  // const handleReject = (id) => {
  //   setSelectedRejectId(id);
  //   setShowRejectPopup(true);
  // };
  const handleAccept = async (id) => {
    try {
      // 1. Update in lawyer-backend
      await axios.put(`http://localhost:4001/api/consultations/${id}`, {
        status: "accepted",
      });

      // 2. Get the accepted consultation info
      // const acceptedConsult = consultations.find(c => c._id === id);

      // // 3. POST to client-backend to update consultation status
      // await axios.post("http://localhost:4000/api/client/consultation-accepted", {
      //   bar_council_id: acceptedConsult.bar_council_id,
      //   date: acceptedConsult.date,
      //   time: acceptedConsult.time,
      //   status: "accepted",
      //   clientName: acceptedConsult.clientName, // for matching, optional
      // });

      // 4. Refresh UI
      fetchConsultations();
    } catch (error) {
      console.error("Error accepting consultation:", error);
    }
  };

  const handleRejectSubmit = async () => {
    try {
      await axios.put(
        `http://localhost:4001/api/consultations/${selectedRejectId}`,
        {
          status: "rejected",
          rejectReason,
        }
      );
      setShowRejectPopup(false);
      setRejectReason("");
      setSelectedRejectId(null);
      fetchConsultations(); // Refresh list
    } catch (error) {
      console.error("Error rejecting consultation:", error);
    }
  };

  const handleStartChat = (consult) => {
    // Handle chat logic here
    console.log("Starting chat with", consult.clientName);
  };

  // Filter consultations by status
  const newRequests = consultations.filter((c) => c.status === "pending");
  const scheduledConsultations = consultations.filter(
    (c) => c.status === "accepted"
  );

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
                  <button
                    className="accept-btn"
                    onClick={() => handleAccept(req._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => handleRejectSubmit(req._id)}
                  >
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
                  <p>
                    <strong>Client Name:</strong> {consult.clientName}
                  </p>
                  {/* <p><strong>Legal Name:</strong> {consult.legalName || "N/A"}</p> */}
                  <p>Date: {consult.date}</p>
                  <p>Time: {consult.time}</p>
                  <button
                    className="chat-btn"
                    onClick={() => handleStartChat(consult)}
                  >
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
              <button
                className="popup-cancel"
                onClick={() => setShowRejectPopup(false)}
              >
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
