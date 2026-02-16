import React from 'react'
import { FaCheckCircle} from 'react-icons/fa'
import gws from '../../assets/Image/gws.png'


const GoogleWorkSpace = () => {
  return (
   <>
     <section id='gws' className="lg:py-20 py-15 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            Google Workspace
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Simplify Teamwork & Boost Productivity
          </h2>

          <p className="text-gray-600 mt-6 md:text-lg text-[16px]">
            Collaborate in real-time, store files securely, and manage
            your entire workflow in one smart ecosystem.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Real-time collaboration tools",
              "Smart cloud storage system",
              "Advanced business security"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* <button className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button> */}
        </div>

        {/* RIGHT IMAGE DESIGN */}
        <div className="relative">
          <img
            src={gws}  
            alt="Google Workspace"
            className="rounded-3xl shadow-2xl"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-sm font-semibold text-blue-600">
              99.9% Secure Cloud
            </p>
          </div>
        </div>

      </div>
    </section>
   </>
  )
}

export default GoogleWorkSpace
