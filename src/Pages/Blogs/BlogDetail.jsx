import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_Url } from "../../Api/Base_Url";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";


const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  const fetchSingleBlog = async () => {
    try {
      const resp = await axios.get(`${Base_Url}/blog/${id}`);
      if (resp.data.success) {
        setBlog(resp.data.data);
      } else {
        toast.error(resp.data.message);
      }
    } catch (error) {
        console.log(error)
      toast.error("Failed to fetch blog");
    }
  };

  React.useEffect(() => {
    fetchSingleBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <>
     

      {/* HERO SECTION */}
      <div className="relative h-[70vh] flex items-center justify-center text-white">

        <img
          src={`${Base_Url}/${blog.image}`}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-800/70 to-indigo-900/80"></div>

        <div className="relative z-10 max-w-4xl text-center px-6">
          <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm tracking-wide">
            Featured Insight
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            {blog.title}
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            {blog.short_description}
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mt-8 inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-2 rounded-full hover:bg-blue-100 transition"
          >
            <FaArrowLeft /> Back to Blogs
          </button>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="relative -mt-20 pb-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

          <div className="border-l-4 border-blue-600 pl-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Blog Overview
            </h2>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-6 whitespace-pre-line text-[17px]">
            {blog.description}
          </div>

        </div>
      </section>

   
    </>
  );
};

export default BlogDetail;