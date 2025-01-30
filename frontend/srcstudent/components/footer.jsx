import React from "react";
import { assets } from "../assets/assets";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Courtify Logo" />
          <p className="footer-text">
            Courtify is a platform designed to connect lawyers, clients, and law students seamlessly. Whether you're seeking legal consultation, internship opportunities, or expert insights, Courtify provides a one-stop solution for all your legal needs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <p className="text-xl font-medium mb-5">Quick Links</p>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="get-in-touch">
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul>
            <li><a href="tel:+919876543210">+91-9972637857</a></li>
            <li><a href="mailto:support@courtify.com">support@courtify.com</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="footer-social">
        <a href="https://www.facebook.com/CourtifyOfficial" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com/CourtifyLegal" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com/company/courtify" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/courtify.app" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>Copyright 2024 @ Courtify.com - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
