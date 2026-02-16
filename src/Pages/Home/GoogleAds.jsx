import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import ads from '../../assets/Image/googleads.png'

const GoogleAds = () => {
  return (
   <>
     <section className="lg:py-20 py-15 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-green-400 font-semibold uppercase tracking-wide">
            Google Ads
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            Turn Clicks into Customers
          </h2>

          <p className="text-gray-400 mt-6 lg:text-lg text-md">
            Reach the right audience, increase conversions and grow your
            revenue with performance-driven Google Ads campaigns.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Ad credits within 24 hours",
              "Expert campaign optimization",
              "Continuous performance tracking"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* <button className="mt-10 px-8 py-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition">
            Start Campaign
          </button> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={ads}
            alt="Google Ads"
            className="rounded-3xl shadow-2xl border border-gray-800"
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-green-500 opacity-10 blur-3xl rounded-3xl"></div>
        </div>

      </div>
    </section>
   </>
  )
}

export default GoogleAds
