import axios from "axios";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Base_Url } from "../../Api/Base_Url";
import { toast } from "react-toastify";

// const faqs = [
//   {
//     question: "What is Google Workspace?",
//     answer:
//       "Google Workspace is a cloud-based productivity suite that includes Gmail, Drive, Meet, Docs, Sheets and more — designed for businesses of all sizes.",
//   },
//   {
//     question: "Are these prices applicable in Nepal?",
//     answer:
//       "Yes, the listed prices are applicable for customers in Nepal. Final pricing in NPR will be shown before completing the sign-up process.",
//   },
//   {
//     question: "Is there a free trial available?",
//     answer:
//       "Yes, new customers can start with a free trial before committing to a paid plan.",
//   },
//   {
//     question: "Can I upgrade my plan later?",
//     answer:
//       "Yes, you can upgrade or downgrade your plan anytime based on your business requirements.",
//   },
//   {
//     question: "How much storage do I get?",
//     answer:
//       "Business Starter includes 30 GB per user, Business Standard includes 2 TB per user, and Business Plus includes 5 TB per user. Storage is pooled and shared across your organisation.",
//   },
//   {
//     question: "Do you provide setup and migration support in Nepal?",
//     answer:
//       "Yes, we provide complete setup assistance, email migration, and ongoing support for businesses in Nepal.",
//   },
// ];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [data , setdata] = useState([]);

   const fetchfaq = async () => {
        try {
            const resp = await axios.get(`${Base_Url}/faq`)
            if (resp.data.success) {
                console.log(resp.data)
                setdata(resp.data.data);

            } else {
                toast.error(resp.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to fetch User")
        }
    }

    React.useEffect(() => {
        fetchfaq()
    }, [])

  return (
    <section className="py-10 bg-gradient-to-r from-[#f5f0ff] to-[#eae2ff]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {data.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {index + 1}. {faq.question}
                </span>

                <FiChevronDown
                  className={`text-xl text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 px-5 pb-5"
                    : "max-h-0 px-5"
                }`}
              >
                <p className="text-gray-600 text-md leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
