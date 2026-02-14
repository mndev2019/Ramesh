import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* Background Gradient Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
             Google Workspace Partner
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transform Your Business With
            <span className="text-blue-600"> Google Workspace</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Boost collaboration, enhance security, and streamline operations
            with enterprise-grade Google Workspace solutions tailored for
            modern businesses.
          </p>

          {/* Feature Points */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              ✅ Secure Cloud Email
            </div>
            <div className="flex items-center gap-2">
              ✅ Seamless Migration
            </div>
            <div className="flex items-center gap-2">
              ✅ Admin & Security Setup
            </div>
            <div className="flex items-center gap-2">
              ✅ 24/7 Support
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Get Consultation
            </Link>

            <Link
              to="/gws"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE CARD DESIGN */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-10 rounded-3xl shadow-2xl">

            <h3 className="text-2xl font-semibold mb-4">
              Google Workspace Solutions
            </h3>

            <p className="text-blue-100 leading-relaxed">
              We help businesses migrate, manage, and secure their digital
              workplace using Google's trusted collaboration platform.
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
              Trusted by Growing Businesses
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Reliable • Secure • Scalable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
