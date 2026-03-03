import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Zero Trust Security",
    desc: "Continuous identity verification with role-based and context-aware access policies.",
  },
  {
    title: "End-to-End Encryption",
    desc: "Data encrypted in transit and at rest using advanced cryptographic standards.",
  },
  {
    title: "Threat Detection & Response",
    desc: "AI-driven monitoring and automated incident response for proactive protection.",
  },
  {
    title: "Compliance Assurance",
    desc: "Infrastructure aligned with international security and regulatory standards.",
  },
];

const SecurityCompliance = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
   const handleScrollLink = (e, sectionId) => {
    e.preventDefault()
    // setIsOpen(false)

    if (location.pathname !== "/") {
      navigate("/")

      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="font-sans text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">

        {/* Mesh Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-widest text-blue-600 font-semibold mb-6">
            Security & Compliance
          </p>

          <h1
            className="text-5xl md:text-7xl font-extrabold leading-tight"
            data-aos="fade-up"
          >
            Secure Infrastructure.
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Built for Enterprise.
            </span>
          </h1>

          <p
            className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Protect your workloads with advanced security controls,
            global certifications, and continuous monitoring designed
            for modern cloud environments.
          </p>

          <div
            className="mt-12 flex justify-center gap-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <button onClick={(e) => handleScrollLink(e, "contact")} className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-xl cursor-pointer">
              Talk to Expert
            </button>
           
          </div>
        </div>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section className="py-32 bg-white relative">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">
              Multi-Layered Security Framework
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              A defense-in-depth model designed to protect data, users,
              and infrastructure at every layer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {features.map((item, i) => (
              <div
                key={i}
                className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-white/40 shadow-xl backdrop-blur-xl hover:-translate-y-2 transition duration-500"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <h3 className="text-2xl font-semibold text-blue-600">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CERTIFICATIONS STRIP ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">

        <h2 className="text-4xl font-bold mb-12">
          Globally Recognized Certifications
        </h2>

        <div className="flex flex-wrap justify-center gap-10 text-lg font-medium">
          <span>ISO 27001</span>
          <span>ISO 27017</span>
          <span>ISO 27018</span>
          <span>SOC 1 / SOC 2 / SOC 3</span>
          <span>PCI DSS</span>
          <span>GDPR</span>
          <span>HIPAA</span>
        </div>

      </section>

    

    </div>
  );
};

export default SecurityCompliance;