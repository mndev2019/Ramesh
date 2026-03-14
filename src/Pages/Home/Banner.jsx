import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
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
    <section id="/" className="relative bg-white overflow-hidden">
      
      {/* Background Gradient Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:py-28 py-10 grid md:grid-cols-2 md:gap-16 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
            Trusted Google Workspace Partner in Nepal
          </span>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Best Google Workspace Solutions for Businesses in
            <span className="text-blue-600"> Nepal</span>
          </h1>

          <p className="mt-6 md:text-lg text-md text-gray-600 leading-relaxed">
             Teledigital is a reliable Google Workspace partner in Nepal providing
            professional business email, cloud collaboration tools, and secure
            Google Workspace setup for companies in Nepal. Improve productivity
            with Gmail, Google Drive, Meet, and other powerful Google Workspace
            business solutions.
          </p>

          {/* Feature Points */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              ✅ Secure Business Email with Gmail
            </div>
            <div className="flex items-center gap-2">
              ✅ Google Workspace Migration Services
            </div>
            <div className="flex items-center gap-2">
              ✅ Google Workspace Admin & Security Setup
            </div>
            <div className="flex items-center gap-2">
              ✅ 24/7 Google Workspace Support
            </div>
          </div>

          {/* Buttons */}
          <div className="md:mt-10 mt-5 flex flex-wrap gap-4">
            <Link
              to="/"
              onClick={(e) => handleScrollLink(e, "contact")}
              className="bg-blue-600 text-white md:px-8 px-5 md:py-3 py-2 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Get Google Workspace Consultation
            </Link>

            <Link
              to="/"
              onClick={(e) => handleScrollLink(e, "service")}
              className="border border-blue-600 text-blue-600 md:px-8 px-5 md:py-3 py-2 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Explore Google Workspace Services
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE CARD DESIGN */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-10 rounded-3xl shadow-2xl">

            <h3 className="text-2xl font-semibold mb-4">
              Google Workspace Services in Nepal
            </h3>

            <p className="text-blue-100 leading-relaxed">
              Our team helps businesses with Google Workspace setup, email
              migration, cloud collaboration tools, and secure deployment.
              We ensure a smooth transition to Google's trusted business
              productivity platform.
            </p>

            <div className="mt-8 border-t border-blue-400 pt-6 text-sm">
              ✔ Official Partner Support 
              <br />
              ✔ Enterprise Deployment  
              <br />
              ✔ Secure & Scalable Infrastructure
            </div>
          </div>

          {/* Floating Mini Card */}
          <div className="absolute bottom-[-68px] -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <h4 className="text-gray-900 font-semibold">
              Trusted Google Workspace Provider
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Reliable • Secure • Scalable Cloud Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;