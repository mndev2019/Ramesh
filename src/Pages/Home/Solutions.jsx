import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Certified Expertise",
    points: [
      "Team of Google Cloud-certified professionals",
      "Hands-on experience to help optimize cloud performance.",
    ],
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "End-to-End Solutions",
    points: [
      "Cloud Migration and Infrastructure Optimization",
      "Complete suite of Google Cloud solutions for business needs.",
    ],
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    title: "Local Support, Global Standards",
    points: [
      "Nepal’s trusted Google Cloud Partner",
      "Localized support with world-class cloud solutions",
    ],
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
];

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative lg:py-24 py-16 bg-gray-100 overflow-hidden">
       {/* Background Blur Circle */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose Ramesh Corp as <br />
            Your Google Partner In Nepal?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                {item.title}
              </h3>

              <ul className="space-y-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full ${item.bg}`}
                    >
                      <span className={`${item.color} text-sm font-bold`}>
                        ✓
                      </span>
                    </div>
                    <p className="text-gray-600">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;