import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const tools = [
  {
    title: "Migration Center",
    desc: "Assess infrastructure, estimate costs, and build a structured roadmap for migration.",
  },
  {
    title: "RaMP Program",
    desc: "Guided migration and modernization framework to accelerate cloud transformation.",
  },
  {
    title: "Migrate to VMs",
    desc: "Move workloads seamlessly to cloud virtual machines with minimal downtime.",
  },
  {
    title: "VMware Engine",
    desc: "Run VMware environments natively in cloud without re-architecting.",
  },
  {
    title: "Database Migration",
    desc: "Securely migrate databases to scalable, managed cloud services.",
  },
];

const CloudMigration = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
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
    <div className="text-gray-900 overflow-hidden">

      {/* ================= HERO (UNCHANGED STYLE) ================= */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-28 lg:py-32">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Modernize Your Business <br />
              <span className="text-blue-600">with Cloud Migration</span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl leading-relaxed">
              Migrate applications, databases, and infrastructure to a secure,
              scalable cloud environment. Reduce operational costs and unlock innovation.
            </p>


          </div>

          <div data-aos="fade-left" className="hidden lg:block">
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-600">
                Cloud Advantages
              </h3>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li>✔ Scalable Infrastructure</li>
                <li>✔ Enterprise-grade Security</li>
                <li>✔ AI & Analytics Ready</li>
                <li>✔ Reduced Hardware Costs</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SPLIT BENEFITS SECTION ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Businesses Are Moving to Cloud
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Cloud migration empowers organizations to modernize operations,
              increase performance, and improve cost efficiency with a secure foundation.
            </p>
          </div>

          <div className="space-y-10" data-aos="fade-left">
            {[
              "Scale resources instantly as your business grows",
              "Advanced multi-layer security and compliance",
              "High availability with global infrastructure",
              "Operational cost optimization model",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ELEGANT TOOLS GRID ================= */}
      <section className="py-28 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
            Migration Tools & Services
          </h2>

          <div className="mt-20 grid md:grid-cols-2 gap-x-20 gap-y-16">
            {tools.map((tool, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <h3 className="text-2xl font-semibold text-blue-700">
                  {tool.title}
                </h3>
                <div className="w-14 h-[2px] bg-blue-600 mt-3"></div>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PREMIUM TIMELINE PROCESS ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
            Our Migration Approach
          </h2>

          <div className="mt-20 relative border-l-2 border-blue-200 pl-10 space-y-16">
            {["Assess Environment", "Plan Strategy", "Migrate & Optimize"].map(
              (step, index) => (
                <div
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="absolute -left-[26px] w-6 h-6 bg-blue-600 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step}
                  </h3>
                  <p className="mt-3 text-gray-600">
                    We follow a structured methodology to ensure seamless,
                    secure, and efficient cloud transition.
                  </p>
                </div>
              )
            )}
          </div>

        </div>
      </section>

      {/* ================= UPGRADED CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Accelerate Your Cloud Journey?
        </h2>

        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
          Let our cloud experts design and execute a secure, scalable migration
          strategy tailored to your business.
        </p>

        <button onClick={(e) => handleScrollLink(e, "contact")} className="mt-10 px-10 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg cursor-pointer">
          Get Free Consultation
        </button>
      </section>

    </div>
  );
};

export default CloudMigration;