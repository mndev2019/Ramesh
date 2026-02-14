import { Link } from "react-router-dom";
import logo from '../assets/Image/logo.png'

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
         <img src={logo} className="h-15"/>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link to="/gcp" className="hover:text-blue-600 transition">
            GCP
          </Link>

          <Link to="/gws" className="hover:text-blue-600 transition">
            Google Workspace
          </Link>

          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Consultation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
