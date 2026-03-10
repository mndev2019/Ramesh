
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/Image/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
const location = useLocation()
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

const handleScrollLink = (e, sectionId) => {
  e.preventDefault()
  setIsOpen(false)

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
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" onClick={(e) => handleScrollLink(e, "/")} className="hover:text-blue-600 transition">Home</Link>
          <Link onClick={(e) => handleScrollLink(e, "about")} to="/" className="hover:text-blue-600 transition">About</Link>
          <Link to="/" onClick={(e) => handleScrollLink(e, "service")} className="hover:text-blue-600 transition">Services</Link>
          <Link to="/" onClick={(e) => handleScrollLink(e, "gws")} className="hover:text-blue-600 transition">
            Google Workspace
          </Link>
          <Link to="/" onClick={(e) => handleScrollLink(e, "blog")} className="hover:text-blue-600 transition">
            Blog
          </Link>
           <Link to="/" onClick={(e) => handleScrollLink(e, "pricing")} className="hover:text-blue-600 transition">
            Pricing
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/"
          onClick={(e) => handleScrollLink(e, "contact")}
          className="hidden lg:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-5 text-gray-700 font-medium">
          <Link onClick={(e) => handleScrollLink(e, "/")} to="/">Home</Link>
          <Link onClick={(e) => handleScrollLink(e, "about")} to="/">About</Link>
                    <Link to="/" onClick={(e) => handleScrollLink(e, "service")} className="hover:text-blue-600 transition">Services</Link>
          <Link onClick={(e) => handleScrollLink(e, "gws")} to="/">
            Google Workspace
          </Link>
          <Link onClick={(e) => handleScrollLink(e, "blog")} to="/">Blog</Link>
           <Link to="/" onClick={(e) => handleScrollLink(e, "pricing")} className="hover:text-blue-600 transition">
            Pricing
          </Link>

          <Link
            to="/"
            onClick={(e) => handleScrollLink(e, "contact")}
            className="mt-4 text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

