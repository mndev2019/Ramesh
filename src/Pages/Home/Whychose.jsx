import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  "Google Workspace Experts",
  "End-to-End Implementation",
  "24/7 Google Workspace Support",
  "Enterprise-Grade Cloud Security",
];

const Whychose = () => {
  const navigate = useNavigate();

  const handleScrollLink = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative lg:py-28 py-15 bg-white overflow-hidden">
      
      {/* Background Accent Shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 rounded-l-[120px] hidden lg:block"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Why Choose Teledigital
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight text-gray-900">
            Trusted 
            <span className="text-blue-600"> Google Workspace Partner in Nepal</span>
          </h2>

          <p className="mt-6 text-gray-600 md:text-lg text-md leading-relaxed max-w-lg">
            Teledigital is a trusted Google Workspace partner in Nepal helping
            businesses improve collaboration, productivity, and communication
            using Google Workspace business email, cloud collaboration tools,
            and secure Google Cloud solutions designed for modern organizations.
          </p>

          {/* Feature List */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <FaCheckCircle className="text-blue-600 group-hover:scale-110 transition duration-300" />
                <span className="text-gray-800 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FLOATING CARD */}
        <div className="relative">
          
          <div className="relative z-10 bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Grow Your Business with Google Workspace
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Teledigital  helps companies implement Google Workspace,
              migrate business emails, and deploy secure cloud collaboration
              tools that enable teams to work smarter from anywhere.
            </p>

            <button
              onClick={(e) => handleScrollLink(e, "contact")}
              className="md:px-8 px-5 md:py-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Talk to Google Workspace Experts
            </button>
          </div>

          {/* Decorative Box */}
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600 rounded-3xl -z-0 hidden md:block"></div>
        </div>

      </div>
    </section>
  );
};

export default Whychose;