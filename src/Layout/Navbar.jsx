// import { Link } from "react-router-dom";
// import logo from '../assets/Image/logo.png'

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-gray-800">
//          <img src={logo} className="h-15"/>
//         </Link>

//         {/* Menu */}
//         <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//           <Link to="/" className="hover:text-blue-600 transition">
//             Home
//           </Link>

//           <Link to="/about" className="hover:text-blue-600 transition">
//             About
//           </Link>

//           <Link to="/gcp" className="hover:text-blue-600 transition">
//             GCP
//           </Link>

//           <Link to="/gws" className="hover:text-blue-600 transition">
//             Google Workspace
//           </Link>

//           <Link to="/contact" className="hover:text-blue-600 transition">
//             Contact
//           </Link>
//         </div>

//         {/* CTA Button */}
//         <Link
//           to="/contact"
//           className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Get Consultation
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/Image/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
const location = useLocation()

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
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" onClick={(e) => handleScrollLink(e, "/")} className="hover:text-blue-600 transition">Home</Link>
          <Link onClick={(e) => handleScrollLink(e, "about")} to="/" className="hover:text-blue-600 transition">About</Link>
          <Link to="/" onClick={(e) => handleScrollLink(e, "service")} className="hover:text-blue-600 transition">Services</Link>
          <Link to="/" onClick={(e) => handleScrollLink(e, "gws")} className="hover:text-blue-600 transition">
            Google Workspace
          </Link>
          <Link to="/" onClick={(e) => handleScrollLink(e, "contact")} className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/"
          onClick={(e) => handleScrollLink(e, "contact")}
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-lg transition-all duration-300 ${
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
          <Link onClick={(e) => handleScrollLink(e, "contact")} to="/">Contact</Link>

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

