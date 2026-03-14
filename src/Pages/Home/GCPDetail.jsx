import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const stats = [
    { number: "99.99%", label: "Uptime Reliability" },
    { number: "200+", label: "Global Regions" },
    { number: "Millions", label: "Active Businesses" },
    { number: "24/7", label: "Enterprise Support" },
];

const services = [
    {
        title: "Infrastructure Modernization",
        desc: "Migrate legacy systems to scalable cloud-native architecture.",
    },
    {
        title: "AI & Data Intelligence",
        desc: "Unlock powerful insights using analytics and ML solutions.",
    },
    {
        title: "Hybrid & Multi-Cloud",
        desc: "Operate seamlessly across on-prem and cloud environments.",
    },
    {
        title: "Enterprise Security",
        desc: "Multi-layered security model protecting workloads and data.",
    },
];

const GoogleCloudPartner = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true });
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
        <div className="overflow-hidden text-gray-900">

            {/* ================= HERO (WHITE + BLUE MIX) ================= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">

                {/* Soft Background Glow */}
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div data-aos="fade-right">

                            <span className="px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
                                Google Cloud Partner
                            </span>

                            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                                Build Smarter Infrastructure
                                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    With Google Cloud
                                </span>
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 max-w-xl">
                                Teledigital is a trusted Google Cloud Partner providing secure and scalable
                                Google Cloud services in Nepal. We help businesses migrate to Google Cloud,
                                build modern infrastructure, and leverage AI-driven cloud innovation with
                                enterprise-grade security and global reliability.
                            </p>







                        </div>

                        {/* RIGHT SIDE CARD */}
                        <div className="relative" data-aos="fade-left">

                            <div className="bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl p-10 shadow-2xl">

                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                    Why Businesses in Nepal Choose Teledigital for Google Cloud
                                </h3>

                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">✓</span>
                                        99.99% uptime reliability
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">✓</span>
                                        Secure global infrastructure
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">✓</span>
                                        AI & data analytics capabilities
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">✓</span>
                                        Hybrid & multi-cloud flexibility
                                    </li>
                                </ul>

                            </div>

                            {/* Floating Badge */}
                            <div className="hidden lg:block absolute -bottom-8 -right-8 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg">
                                Trusted by Modern Enterprises
                            </div>

                        </div>

                    </div>

                </div>

                {/* Soft Bottom Divider */}
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 200"
                >
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,96L120,112C240,128,480,160,720,160C960,160,1200,128,1320,112L1440,96V200H0Z"
                    ></path>
                </svg>

            </section>

            {/* ================= STATS SECTION ================= */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    {stats.map((item, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                            <h2 className="text-4xl font-extrabold text-indigo-700">
                                {item.number}
                            </h2>
                            <p className="mt-2 text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= ABOUT SECTION ================= */}
            <section className="py-28 bg-gray-50 relative">
                <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl"></div>

                <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    <div data-aos="fade-right">
                        <h2 className="text-4xl font-bold">
                            Transform Your Infrastructure
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Teledigital helps organizations in Nepal modernize applications,
                            migrate workloads, and optimize infrastructure using Google Cloud
                            Platform. As a reliable Google Cloud and Google Workspace partner,
                            we deliver scalable cloud solutions, secure infrastructure,
                            and high-performance computing for growing businesses.
                        </p>
                    </div>

                    <div
                        className="bg-white/70 backdrop-blur-xl border border-white/40 p-10 rounded-3xl shadow-2xl"
                        data-aos="fade-left"
                    >
                        <ul className="space-y-5">
                            {[
                                "Certified Google Cloud Architects",
                                "End-to-End Migration Strategy",
                                "Performance Optimization",
                                "Continuous Monitoring & Support",
                            ].map((point, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">
                                        ✓
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="py-28 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold" data-aos="fade-up">
                        Google Cloud Services by Teledigital
                    </h2>

                    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="group relative p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-2xl hover:-translate-y-3 transition duration-500"
                            >
                                <h3 className="text-xl font-semibold text-indigo-700">
                                    {service.title}
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    {service.desc}
                                </p>

                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-indigo-500 transition duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROCESS TIMELINE ================= */}
            <section className="py-28 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold" data-aos="fade-up">
                        Our Cloud Migration Process
                    </h2>

                    <div className="mt-16 grid md:grid-cols-4 gap-8">
                        {["Assess", "Design", "Deploy", "Optimize"].map((step, i) => (
                            <div
                                key={i}
                                data-aos="zoom-in"
                                data-aos-delay={i * 200}
                                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl"
                            >
                                <h3 className="text-xl font-semibold">{step}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-28 px-5 bg-white text-center">
                <h2 className="md:text-4xl text-3xl font-bold" data-aos="fade-up">
                    Start Your Google Cloud Journey with Teledigital
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Teledigital is a leading provider of Google Cloud services in Nepal,
                    helping companies adopt cloud infrastructure, secure data, and
                    scale their digital operations using Google’s powerful technology.
                </p>
                <button
                    onClick={(e) => handleScrollLink(e, "contact")}
                    className="mt-8 px-10 py-4 bg-indigo-700 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition cursor-pointer"
                    data-aos="zoom-in"
                >
                    Talk to Our Cloud Experts
                </button>
            </section>

        </div>
    );
};

export default GoogleCloudPartner;