import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const solutions = [
  {
    title: "Startups",
    desc: "Launch and scale quickly with flexible cloud infrastructure and collaboration tools."
  },
  {
    title: "SMEs",
    desc: "Boost productivity and security with Google Workspace solutions."
  },
  {
    title: "Enterprises",
    desc: "Enterprise-grade cloud transformation with robust security and compliance."
  },
];

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,   // 👈 Important (animation baar-baar chalegi)
      mirror: true,  // 👈 Scroll up/down dono me animation
    });
  
    AOS.refresh();
  }, []);
  return (
    <section className="relative lg:py-24 py-15 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">

      {/* Same Glow Style as GoogleCloudPartner */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16"  data-aos="flip-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Solutions For Every Business
          </h2>
          <p className="mt-5 text-gray-600 md:text-lg text-[17px] max-w-2xl mx-auto">
            Tailored cloud and workspace solutions designed to empower businesses at every stage of growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-10 shadow-lg transition duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
            >
              
              {/* Soft Top Glow Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 group-hover:w-24"></div>

              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;
