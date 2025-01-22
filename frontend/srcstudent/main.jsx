import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Main App Component
import "./styles/index.css"; // Global CSS styles

// Mount the App component to the root element in the HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
