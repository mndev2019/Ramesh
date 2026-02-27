// import React from "react";
// import { FaCloud, FaUsers, FaDatabase, FaShieldAlt } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaCloud size={28} />,
//     title: "Google Cloud Platform",
//     desc: "Secure, scalable and high-performance infrastructure powered by Google Cloud.",
//   },
//   {
//     icon: <FaUsers size={28} />,
//     title: "Google Workspace",
//     desc: "Modern collaboration tools for smarter communication & productivity.",
//   },
//   {
//     icon: <FaDatabase size={28} />,
//     title: "Cloud Migration",
//     desc: "Seamless transition of applications and data with zero downtime.",
//   },
//   {
//     icon: <FaShieldAlt size={28} />,
//     title: "Security & Compliance",
//     desc: "Enterprise-grade security solutions with global compliance standards.",
//   },
// ];

// const Service = () => {
//   return (
//     <section id="service" className="md:py-24 py-15 bg-[#0f172a] text-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center lg:mb-20 mb-10">
//           <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
//             Our <span className="text-blue-500">Google Powered</span> Solutions
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mt-6 rounded-full"></div>
//           <p className="mt-6 text-gray-400 max-w-2xl mx-auto md:text-lg text-md">
//             Delivering enterprise cloud solutions with performance, security
//             and innovation at the core.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="group relative bg-[#1e293b] p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:-translate-y-4"
//             >
//               {/* Top Accent Line */}
//               <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-red-500 group-hover:w-full transition-all duration-500 rounded-t-2xl"></div>

//               {/* Icon */}
//               <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-500">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition duration-300">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {item.desc}
//               </p>

//               {/* Red Accent Dot */}
//               <div className="absolute bottom-4 right-4 w-3 h-3 bg-red-500 rounded-full opacity-70 group-hover:scale-125 transition duration-500"></div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Service;

import React, { useEffect } from "react";
import { FaCloud, FaUsers, FaDatabase, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <FaCloud size={26} />,
    title: "Google Cloud Platform",
    desc: "Highly available, scalable infrastructure built on Google Cloud.",
  },
  {
    icon: <FaUsers size={26} />,
    title: "Google Workspace",
    desc: "Smarter collaboration for teams that move fast.",
  },
  {
    icon: <FaDatabase size={26} />,
    title: "Cloud Migration",
    desc: "Zero-downtime migration with proven cloud strategies.",
  },
  {
    icon: <FaShieldAlt size={26} />,
    title: "Security & Compliance",
    desc: "Security-first architecture aligned with global standards.",
  },
];

const Service = () => {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,   // 👈 Important (animation baar-baar chalegi)
    mirror: true,  // 👈 Scroll up/down dono me animation
  });

  AOS.refresh();
}, []);
  return (
    <section id="service" className="relative py-24 bg-[#f8fafc] overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20"  data-aos="flip-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Work Smarter with{" "}
            <span className="text-[#1a73e8]">Google Workspace</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Enterprise-ready cloud solutions designed for the modern workplace.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="
                group relative p-8 rounded-2xl
                bg-white/70 backdrop-blur-xl
                border border-white/60
                shadow-lg
                hover:-translate-y-3 hover:shadow-2xl
                transition-all duration-500
              "
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-red-500/10 opacity-0 group-hover:opacity-100 transition"></div>

              {/* Content */}
              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-[#1a73e8] mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;