import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <h2>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </h2>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="About Courtify illustration"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Courtify, your trusted legal partner dedicated to
            simplifying access to legal resources and services. At Courtify, we
            recognize the challenges individuals face when seeking legal advice,
            pursuing career opportunities in law, or accessing reliable legal
            information.
          </p>
          <p>
            Courtify is committed to innovation in the legal domain. We
            continually refine our platform to integrate cutting-edge
            technology, ensuring an intuitive user experience and delivering
            top-notch services. Whether you're a client seeking legal
            consultation, a law student exploring internships, or a lawyer
            publishing research, Courtify is here to empower you at every stage.
          </p>
          <h3 className="text-gray-800 font-bold">Our Vision</h3>
          <p>
            Our vision at Courtify is to bridge the gaps within the legal
            ecosystem by connecting clients, law students, and lawyers on a
            single, unified platform. We aim to make legal services more
            accessible, promote professional growth in the legal field, and
            foster collaboration between all stakeholders, ensuring justice and
            knowledge are within everyone's reach.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl my-4 text-center">
        <h3>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </h3>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        {[
          {
            title: "EFFICIENCY",
            description: "Streamlined appointment scheduling that fits into your busy lifestyle.",
          },
          {
            title: "CONVENIENCE",
            description: "Access to a network of trusted legal professionals in your area.",
          },
          {
            title: "PERSONALIZATION",
            description: "Tailored recommendations and reminders to help you stay on top of your legal needs.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer"
          >
            <b>{feature.title}</b>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
