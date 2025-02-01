
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* About Section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Courtify Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Courtify is a platform designed to connect lawyers, clients, and law students seamlessly. Whether you're seeking legal consultation, internship opportunities, or expert insights, Courtify provides a one-stop solution for all your legal needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xl font-medium mb-5">Quick Links</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><a href="/terms" className="hover:text-blue-500">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="/faqs" className="hover:text-blue-500">FAQs</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><a href="tel:+919876543210" className="hover:text-blue-500">+91-9972637857</a></li>
            <li><a href="mailto:support@courtify.com" className="hover:text-blue-500">support@courtify.com</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center mt-10">
        <p className="text-lg font-medium mb-3">Connect With Us</p>
        <div className="flex justify-center gap-5">
          <a href="https://www.facebook.com/CourtifyOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Facebook</a>
          <a href="https://twitter.com/CourtifyLegal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Twitter</a>
          <a href="https://www.linkedin.com/company/courtify" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
          <a href="https://www.instagram.com/courtify.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Instagram</a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ Courtify.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
