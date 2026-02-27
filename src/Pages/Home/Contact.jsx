import axios from 'axios';
import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { Base_Url } from '../../Api/Base_Url';

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
 const handlesubmit = async (e) => {
  e.preventDefault();

  const requestData = {
    name,
    email,
    mobile,
    message
  };

  try {
    const response = await axios.post(`${Base_Url}/contact_enquiry`, requestData);

    if (response.data.success === true) {
      toast.success(response.data.message || "Submit successfully");
      
      // optional: clear form
      setname("");
      setemail("");
      setmobile("");
      setmessage("");
    } else {
      toast.error(response.data.message || "Something went wrong");
    }

  } catch (error) {
    toast.error(
      error.response?.data?.message || "Server error, try again"
    );
  }
};
  return (
    <section id='contact' className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">

      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              We'd love to hear from you. Reach out using the details below.
            </p>
          </div>

          <div className="space-y-8">

         <div className="flex items-start gap-6">
  <div className="p-4 bg-indigo-100 rounded-2xl">
    <FaMapMarkerAlt className="text-indigo-600 text-xl" />
  </div>
  <div>
    <h4 className="font-semibold text-gray-800">Address</h4>
    <a
      href="https://www.google.com/maps/search/?api=1&query=Ramesh+Tower+Tripureshwor+Kathmandu+Nepal"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 text-sm mt-1 block hover:text-indigo-600 transition"
    >
      1st Floor, Ramesh Tower, Tripureshwor, Kathmandu, Nepal
    </a>
  </div>
</div>

<div className="flex items-start gap-6">
  <div className="p-4 bg-green-100 rounded-2xl">
    <FaPhoneAlt className="text-green-600 text-xl" />
  </div>
  <div>
    <h4 className="font-semibold text-gray-800">Phone</h4>
    <a
      href="tel:+9779802325779"
      className="text-gray-600 text-sm mt-1 block hover:text-green-600 transition"
    >
      +977-9802325779
    </a>
    <a
      href="tel:+9779802051122"
      className="text-gray-600 text-sm block hover:text-green-600 transition"
    >
      +977-980-2051122
    </a>
  </div>
</div>

<div className="flex items-start gap-6">
  <div className="p-4 bg-blue-100 rounded-2xl">
    <FaEnvelope className="text-blue-600 text-xl" />
  </div>
  <div>
    <h4 className="font-semibold text-gray-800">Email</h4>
    <a
      href="mailto:teledigital@rameshcorp.com"
      className="text-gray-600 text-sm mt-1 block hover:text-blue-600 transition"
    >
      teledigital@rameshcorp.com
    </a>
  </div>
</div>

          </div>

          {/* Map Below Details */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
           <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.728627240092!2d85.3138626!3d27.6947811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e12d171ed5%3A0xe195ac66b1c94b82!2sTele%20Digital!5e0!3m2!1sen!2sin!4v1772181365428!5m2!1sen!2sin"
  className="w-full h-[300px] border-0"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">

          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Send Us a Message
          </h3>

          <form className="space-y-6" onSubmit={handlesubmit}>

            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
                placeholder="Mobile Number"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition duration-300 shadow-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact