import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import blogfeature from '../../assets/Image/blogfeature.jpg'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_Url } from "../../Api/Base_Url";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";



const Blog = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,   // 👈 Important (animation baar-baar chalegi)
        mirror: true,  // 👈 Scroll up/down dono me animation
      });
    
      AOS.refresh();
    }, []);
    const navigate = useNavigate();
    const [data, setdata] = useState([]);

    const fetchblog = async () => {
        try {
            const resp = await axios.get(`${Base_Url}/blog`)
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
        fetchblog()
    }, [])
    const handleScrollLink = (e, sectionId) => {
        e.preventDefault()
        //   setIsOpen(false)

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
        <section id="blog" className="bg-gray-50 py-16 px-6 md:px-20">

            {/* Header */}
            <div className="text-center mb-14" data-aos="flip-left">
                <h2 className="text-4xl font-bold text-gray-800">
                    Insights & Updates from <span className="text-blue-600">Ramesh Corp</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    As a trusted Google Workspace Partner, we share expert insights,
                    productivity tips, and digital transformation strategies.
                </p>
            </div>

            {/* Featured Blog */}
            <div className="mb-16">
                <div className="relative rounded-3xl overflow-hidden group shadow-xl">
                    <img
                        src={blogfeature}
                        alt="Featured Blog"
                        className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 flex flex-col justify-center px-10">
                        <span className="text-blue-400 font-semibold mb-3">
                            Featured Article
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
                            Transform Your Business with Google Workspace Solutions
                        </h3>
                        <p className="text-gray-200 mt-4 max-w-lg">
                            Ramesh Corp empowers organizations with seamless migration,
                            implementation, and support services for Google Workspace.
                        </p>
                        <button onClick={(e) => handleScrollLink(e, "contact")} className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300 w-fit">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((blog) => (
                    <div
                        key={blog.id}
                        data-aos="zoom-in"
                        className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={`${Base_Url}/${blog.image}`}
                                alt={blog.title}
                                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                {blog.title}
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm">
                                {blog.short_description}
                            </p>
                            <button onClick={() => navigate(`/blog-detail/${blog._id}`)} className="mt-4 text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read More <FaArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;