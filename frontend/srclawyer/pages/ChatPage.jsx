// import React, { useState } from "react";
// import "./ChatPage.css";

// const ChatPage = () => {
//   const [messages, setMessages] = useState([
//     { sender: "client", text: "Hi, I need legal advice about a contract issue with my business partner.", seen: true },
//     { sender: "lawyer", text: "I'd be happy to help. What's the issue with the contract?", seen: true },
//     { sender: "client", text: "My partner is making decisions without consulting me, even though our agreement says he has to.", seen: true },
//     { sender: "lawyer", text: "Do you have a copy of the contract? I can review it to see what your options are.", seen: true },
//     { sender: "client", text: "Yes, I'll send it over. Thank you!", seen: true },
//   ]);

//   const [newMessage, setNewMessage] = useState("");

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, { sender: "lawyer", text: newMessage, seen: false }]);
//       setNewMessage("");
//     }
//   };

//   return (
//     <div className="chat-page">
//       <div className="chat-header">
//         <img src="https://via.placeholder.com/50" alt="Client" className="chat-avatar" />
//         <div className="chat-info">
//           <h2>Sharwani Pandey</h2>
//           <p>Last Seen at 7:00 PM</p>
//         </div>
//       </div>

//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`chat-message ${message.sender === "lawyer" ? "lawyer-message" : "client-message"}`}
//           >
//             <p>{message.text}</p>
//             <span>Seen</span>
//           </div>
//         ))}
//       </div>

//       <div className="chat-input">
//         <button className="attach-button">+</button>
//         <input
//           type="text"
//           placeholder="Type message"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button className="send-button" onClick={handleSendMessage}>
//           😊
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;


import React, { useState } from "react";
// import "./ChatPage.css";
const ChatPage = ({ consultation, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "client", text: "Hi, I need help with my case." },
    { sender: "lawyer", text: "Sure, how can I help you?" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "lawyer", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-page">
      <button onClick={onClose} style={{ marginBottom: "20px", padding: "10px" }}>
        Back to Consultations
      </button>
      <h1>Chat with {consultation.clientName}</h1>
      <p><strong>Case Details:</strong> {consultation.caseDetails}</p>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "lawyer" ? "right" : "left" }}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          style={{ padding: "10px", width: "80%", marginRight: "10px" }}
        />
        <button onClick={handleSendMessage} style={{ padding: "10px 20px" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
