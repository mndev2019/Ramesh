import React, { useState } from 'react'

import driveIcon from '../../assets/Image/drive.svg'
import gmailIcon from '../../assets/Image/mail.svg'
import geminiIcon from '../../assets/Image/gemini.png'
import meeticon from '../../assets/Image/meet.svg'
import notebook from '../../assets/Image/notebook.svg'
import calendericon from '../../assets/Image/calender.svg'
import docsicon from '../../assets/Image/docs.svg'
import { IoCheckmarkSharp } from 'react-icons/io5'
import FreeTrialPopup from '../../Component/FreeTrialPopup.jsx'
import Faq from './Faq.jsx'

const plans = [
    {
        title: 'Starter',
        price: '₹499',
        // oldPrice: '₹270',
        storage: '30 GB',
        storageNote: 'pooled storage per user*',
        features: [
            { icon: gmailIcon, text: 'Custom business email, you@your-company.com' },
            { icon: geminiIcon, text: 'Gemini AI assistant in Gmail' },
            { text: 'Chat with AI in the Gemini app' },
            { icon: meeticon, text: 'Video meetings, 100 participants' },
            { text: 'Security and management controls' },
        ],
    },
    {
        title: 'Standard',
        price: '₹1899',
        // oldPrice: '₹1080',
        storage: '2 TB',
        storageNote: '65x more than Starter*',
        features: [
            { icon: gmailIcon, text: 'Custom business email, you@your-company.com + custom layouts and mail merge' },
            { icon: geminiIcon, text: 'Gemini AI assistant in Gmail, Docs, Meet and more' },
            { icon: notebook, text: 'AI research assistant (NotebookLM)' },
            { icon: geminiIcon, text: 'Chat with AI in the Gemini app + create your team of AI experts' },
            { icon: meeticon, text: 'Video meetings with recording, noise cancellation, 150 participants' },
            { icon: calendericon, text: 'Appointment booking pages' },
            { icon: docsicon, text: 'eSignature with Docs and PDFs' },
            { text: 'Google Workspace Migrate tool for data migration' },
        ],
        extra: 'All of Starter and:',
        highlighted: true,
    },
    {
        title: 'Plus',
        price: '₹3099',
        storage: '5 TB',
        storageNote: '2.5x more than Standard*',
        features: [
            { icon: gmailIcon, text: 'Custom business email + ediscovery' },
            { icon: meeticon, text: 'Video meetings with attendance tracking, 500 participants' },
            { text: 'Vault to retain, archive and search data' },
            { text: 'Secure LDAP' },
            { text: 'Advanced endpoint management' },
            { text: 'Enhanced security and management controls' },
        ],
        extra: 'All of Standard and:',
    },
]

const GwsPricing = () => {
    const [showpopup, setshowpopup] = useState(false)
    return (

        <>
            {/* Popup */}
            {showpopup && (
                <FreeTrialPopup
                    isOpen={showpopup}
                    onClose={() => setshowpopup(false)}
                />
            )}

            <section className="py-16 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${plan.highlighted ? 'border-blue-600 scale-105' : 'border-gray-200'
                                    }`}
                            >
                                {/* Header */}
                                <div className="p-6 border-b border-gray-200">
                                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                                    <div className="text-3xl font-bold text-[#001D08] mb-1">{plan.price}
                                        {/* <span className="text-base font-normal">INR</span> */}
                                    </div>
                                    {plan.oldPrice && (
                                        <div className="text-gray-500 line-through text-sm mb-2">{plan.oldPrice}**</div>
                                    )}
                                    <p className="text-sm text-gray-600 mb-4">
                                        per user per month, one-year commitment
                                    </p>
                                    <button onClick={() => setshowpopup(true)} className="w-full px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer">
                                        Start Free Trial
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="p-6 text-left">
                                    {plan.extra && (
                                        <p className="font-semibold text-gray-800 mb-3">{plan.extra}</p>
                                    )}
                                    <div className="flex items-start mb-4">
                                        <img src={driveIcon} alt="Drive" className="w-6 h-6 mr-2 mt-1" />
                                        <div>
                                            <p className="font-medium">{plan.storage}</p>
                                            <p className="text-sm text-gray-600">{plan.storageNote}</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                {feature.icon ? (
                                                    <img src={feature.icon} alt="" className="w-5 h-5 mr-2 " />
                                                ) : (
                                                    <IoCheckmarkSharp className="w-5 h-5 text-green-600 mr-2 mt-1" />
                                                )}
                                                <span className="text-sm text-gray-800">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
                <div className="grid grid-cols-1 lg:px-20 px-10 mt-10">
                    <p className='text-sm text-gray-600 mb-4'>
                        Business Starter, Business Standard and Business Plus plans can be purchased for a maximum of 300 users.
                        Google Workspace customers in Nepal may have access to additional features for a limited promotional period.
                    </p>

                    <p className='text-sm text-gray-600 mb-4'>
                        *Google Workspace provides flexible pooled storage per user that is shared across the organisation.
                        Business Starter includes 30 GB pooled storage per user, Business Standard includes 2 TB, and Business Plus includes 5 TB pooled storage per user.
                        Contact our sales team to learn more about additional storage options for your organisation.
                    </p>

                    <p className='text-sm text-gray-600 mb-4'>
                        **Offer available to new customers only. Introductory pricing (if applicable) is valid for a limited period.
                        Standard pricing will apply after the promotional period ends. Final pricing in NPR will be shown before completing sign-up.
                    </p>
                </div>

            </section>
            <Faq />

        </>

    )
}

export default GwsPricing
