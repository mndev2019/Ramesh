import React from "react";
import { FaCloud, FaUsers, FaDatabase, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCloud size={28} />,
    title: "Google Cloud Platform",
    desc: "Secure, scalable and high-performance infrastructure powered by Google Cloud.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Google Workspace",
    desc: "Modern collaboration tools for smarter communication & productivity.",
  },
  {
    icon: <FaDatabase size={28} />,
    title: "Cloud Migration",
    desc: "Seamless transition of applications and data with zero downtime.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Security & Compliance",
    desc: "Enterprise-grade security solutions with global compliance standards.",
  },
];

const Service = () => {
  return (
    <section id="service" className="md:py-24 py-15 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center lg:mb-20 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-blue-500">Google Powered</span> Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto md:text-lg text-md">
            Delivering enterprise cloud solutions with performance, security
            and innovation at the core.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#1e293b] p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:-translate-y-4"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-red-500 group-hover:w-full transition-all duration-500 rounded-t-2xl"></div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Red Accent Dot */}
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-red-500 rounded-full opacity-70 group-hover:scale-125 transition duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;
