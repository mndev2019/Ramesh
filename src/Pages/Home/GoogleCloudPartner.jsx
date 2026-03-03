import React from "react";
import googlecloud from '../../assets/Image/googlecloud.svg'

const GoogleCloudPartner = () => {
  return (
    <section className="relative md:py-20 py-10 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden px-10">

      {/* Background Blur Circle */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Proud <span className="text-blue-600">Google Cloud</span> Partner
            </h2>
            <p className="text-gray-600 md:text-lg mb-6">
              We are officially recognized as a Google Cloud Partner, delivering secure, scalable, and high-performance cloud solutions to our clients.
              As a Google Cloud Partner in Nepal, we proudly showcase our verified Google Cloud Partner badge and provide Google Workspace licenses, setup, and ongoing support tailored to business needs
            </p>


          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <img
                src={googlecloud}  // 👈 yaha apni image ka path daal dena
                alt="Google Cloud Partner"
                className="relative w-80 md:w-96 rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoogleCloudPartner;
