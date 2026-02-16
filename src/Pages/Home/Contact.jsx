// import React from 'react'
// import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

// const Contact = () => {
//   return (
//   <>
//   <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">

//       {/* Decorative Background Shape */}
//       <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

//         {/* LEFT SIDE - MAP (Elevated Card Style) */}
//         <div className="relative">
//           <div className="absolute -top-6 -left-6 w-full h-full bg-blue-600 rounded-3xl"></div>

//           <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//             <iframe
//               title="Google Map"
//              src="https://maps.google.com/maps?q=Kanpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               className="w-full h-[450px] border-0"
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>

//         {/* RIGHT SIDE - CONTACT DETAILS */}
//         <div className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-xl border border-gray-100">

//           <h2 className="text-4xl font-bold text-gray-900 mb-6">
//             Let's Connect
//           </h2>

//           <p className="text-gray-600 mb-10 text-lg">
//             Have a question or want to work together?  
//             Reach out through any of the channels below.
//           </p>

//           <div className="space-y-8">

//             {/* Address */}
//             <div className="flex items-start gap-5 group">
//               <div className="p-4 rounded-2xl bg-indigo-100 group-hover:bg-indigo-600 transition">
//                 <FaMapMarkerAlt className="text-indigo-600 group-hover:text-white text-xl" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-800">Office Address</h4>
//                 <p className="text-gray-600 text-sm mt-1">
//                   123 Business Avenue, Kanpur, India
//                 </p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-start gap-5 group">
//               <div className="p-4 rounded-2xl bg-green-100 group-hover:bg-green-600 transition">
//                 <FaPhoneAlt className="text-green-600 group-hover:text-white text-xl" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-800">Phone Number</h4>
//                 <p className="text-gray-600 text-sm mt-1">
//                   +91 98765 43210
//                 </p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-start gap-5 group">
//               <div className="p-4 rounded-2xl bg-blue-100 group-hover:bg-blue-600 transition">
//                 <FaEnvelope className="text-blue-600 group-hover:text-white text-xl" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-800">Email Address</h4>
//                 <p className="text-gray-600 text-sm mt-1">
//                   info@yourcompany.com
//                 </p>
//               </div>
//             </div>

//             {/* Working Hours */}
//             <div className="flex items-start gap-5 group">
//               <div className="p-4 rounded-2xl bg-purple-100 group-hover:bg-purple-600 transition">
//                 <FaClock className="text-purple-600 group-hover:text-white text-xl" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-800">Working Hours</h4>
//                 <p className="text-gray-600 text-sm mt-1">
//                   Mon – Sat: 9:00 AM – 7:00 PM
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   </>
//   )
// }

// export default Contact


import React from "react"
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa"

const Contact = () => {
  return (
    <section   id="contact" className="relative lg:py-28 py-15 bg-gradient-to-br from-indigo-50 via-white to-sky-50 overflow-hidden">

      {/* Soft Background Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT — MAP */}
        <div className="relative group">
          <div className="absolute inset-0 bg-indigo-300/30 rounded-3xl blur-xl group-hover:opacity-60 transition"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-indigo-100">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Kanpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[460px]"
              loading="lazy"
            ></iframe>

            {/* Floating Address Card */}
            <div className="absolute bottom-6 left-6 bg-white/95 p-6 rounded-2xl shadow-xl">
              <h4 className="font-semibold text-gray-900">Our Office</h4>
              <p className="text-sm text-gray-600 mt-1">
                123 Business Avenue <br />
                Kanpur, India
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — CONTACT DETAILS */}
        <div className="space-y-12">

          {/* Header */}
          <div>
            <h2 className="lg:text-5xl text-4xl font-extrabold text-gray-900">
              Get in <span className="text-indigo-600">Touch</span>
            </h2>
            <p className="text-gray-600 mt-6 text-lg max-w-xl">
              Feel free to reach out using the contact information below.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                value: "Kanpur, India",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                value: "+91 98765 43210",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "info@yourcompany.com",
              },
              {
                icon: <FaClock />,
                title: "Working Hours",
                value: "Mon – Sat, 9 AM – 7 PM",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100"
              >
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 text-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact

