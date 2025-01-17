import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      {/* Contact Us Header */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <h2>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </h2>
      </div>

      {/* Contact Content */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        {/* Contact Image */}
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="Contact Us illustration"
        />

        {/* Contact Information */}
        <div className="flex flex-col justify-center items-start gap-6">
          <h3 className="font-semibold text-lg text-gray-600">OUR OFFICE</h3>
          <address className="text-gray-500 not-italic">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </address>
          <p className="text-gray-500">
            Tel: <a href="tel:+14155550132">(415) 555-0132</a> <br />
            Email: <a href="mailto:greatstackdev@gmail.com">greatstackdev@gmail.com</a>
          </p>
          <h3 className="font-semibold text-lg text-gray-600">CAREERS AT COURTIFY</h3>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <a
            href="/careers"
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
          >
            Explore Jobs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
