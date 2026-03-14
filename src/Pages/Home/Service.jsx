import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

import googlecloud from "../../assets/Image/googlecloud.png";
import gws from "../../assets/Image/gwsicon.webp";
import cloudmigration from "../../assets/Image/cloudmigration.png";
import security from "../../assets/Image/key-removebg-preview.png";

const services = [
  {
    icon: googlecloud,
    title: "Google Cloud Platform Services",
    desc: "Teledigital provides scalable and secure Google Cloud Platform services to help businesses modernize their infrastructure and improve performance.",
    path: "/gcp",
  },
  {
    icon: gws,
    title: "Google Workspace Partner in Nepal",
    desc: "Teledigital is a trusted Google Workspace Partner in Nepal offering professional business email with Gmail, collaboration tools, and cloud productivity solutions.",
    path: "/gws-pricing",
  },
  {
    icon: cloudmigration,
    title: "Google Workspace & Cloud Migration",
    desc: "Our experts provide seamless Google Workspace and cloud migration services to move your data, emails, and applications securely with minimal downtime.",
    path: "/cloud-migration",
  },
  {
    icon: security,
    title: "Google Workspace Security & Compliance",
    desc: "Teledigital ensures advanced Google Workspace security, data protection, and compliance solutions to keep your organization safe in the cloud.",
    path: "/security-compliance",
  },
];

const Service = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="service"
      className="relative py-10 bg-[#f8fafc] overflow-hidden md:block hidden"
    >
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="flip-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Teledigital –{" "}
            <span className="text-[#1a73e8]">
              Google Workspace Partner in Nepal
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Teledigital is a trusted Google Workspace Partner in Nepal
            providing Google Workspace setup, business email with Gmail,
            cloud collaboration tools, migration services, and enterprise
            security solutions for modern businesses.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {services.map((item, index) => (
            <div key={index} className="px-4">
              <div
                data-aos="zoom-in"
                className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 transition-all duration-500 cursor-pointer h-full"
                onClick={() => navigate(item.path)}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-red-500/10 transition"></div>

                <div className="relative">
                  <img
                    src={item.icon}
                    className="h-[90px] mb-4"
                    alt={item.title}
                  />

                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Service;