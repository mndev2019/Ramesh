import React, { useState } from "react";
import { Base_Url } from "../Api/Base_Url";
import { toast } from "react-toastify";
import googlecloud from '../assets/Image/googlecloud.svg'

const FreeTrialPopup = ({ isOpen, onClose }) => {
    const [isThankYouOpen, setIsThankYouOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        organization_name: "",
        domain: "",
        no_of_user: "",
        email: "",
        phone: "",
    });





    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${Base_Url}/enquiry`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success === true) {
                toast.success("Submit successfully!")
                setIsThankYouOpen(true);   // ✅ show thank you screen
                // Optional: reset form
                setFormData({
                    name: "",
                    organization_name: "",
                    domain: "",
                    no_of_user: "",
                    email: "",
                    phone: "",
                });
            } else {
                toast.error(result.message || "Something went wrong");
            }


        } catch (error) {
            console.error("API Error:", error);
            toast.error("Server error. Please try again later.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">

            <div className="relative w-full max-w-xl mx-4">

                {/* Gradient Border Wrapper */}
                <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-2xl">

                    {/* Main Card */}
                    <div className="bg-white rounded-3xl p-3 relative">

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-5 text-gray-400 hover:text-red-500 text-2xl transition"
                        >
                            ✕
                        </button>

                        {!isThankYouOpen ? (
                            <>
                                {/* Heading */}
                                <div className="text-center mb-6">
                                     {/* Google Cloud Partner Image */}
                                    <div className="flex justify-center mt-3">
                                        <img
                                            src={googlecloud}
                                            alt="Google Cloud Partner"
                                            className="h-30 object-contain"
                                        />
                                    </div>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        Get Started With Google
                                    </h2>

                                   

                                    {/* <p className="text-gray-500 text-sm mt-3">
                                        Share your details and our team will connect with you.
                                    </p> */}
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">

                                    {[
                                        { name: "name", placeholder: "Your Name", type: "text" },
                                        { name: "organization_name", placeholder: "Organization Name", type: "text" },
                                        { name: "domain", placeholder: "Domain (example.com)", type: "text" },
                                        { name: "no_of_user", placeholder: "Number of Users", type: "number" },
                                        { name: "email", placeholder: "Email Address", type: "email" },
                                        { name: "phone", placeholder: "Contact Number", type: "tel" },
                                    ].map((field) => (
                                        <input
                                            key={field.name}
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            required
                                            className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-xl px-4 py-3 outline-none transition-all duration-300 shadow-sm focus:shadow-md"
                                        />
                                    ))}

                                    {/* Buttons */}
                                    <div className="flex justify-between items-center pt-4">
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="px-5 py-2 text-gray-600 hover:text-gray-900 transition font-medium"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-6 text-center text-gray-400 text-xs">
                                    Your information is secure and confidential.
                                </p>
                            </>
                        ) : (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white text-3xl mb-4 shadow-lg">
                                    ✓
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Thank You!
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Your request has been received. We'll reach out shortly.
                                </p>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FreeTrialPopup;
