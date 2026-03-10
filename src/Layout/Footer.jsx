import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Image/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <img src={logo} className="h-15 mb-3" />
          </Link>
          <p className="text-md leading-6">
            Google Partner delivering enterprise-grade solutions
            on Google Cloud Platform and Google Workspace.
          </p>
        </div>



        {/* Quick Links */}
        <div>
          <h3 className="text-black font-semibold mb-4 text-md">Quick Links</h3>
          <ul className="space-y-2 text-md">

            <li className="cursor-pointer hover:text-blue-600" onClick={() => navigate('/gws-pricing')}>Google Workspace</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => navigate('/term-condition')}>Terms & Conditions</li>

          </ul>
        </div>

        <div>
          <h3 className="text-black font-semibold mb-4 text-md">Follow Us</h3>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/theworkspacenepal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>

            <a
              href="https://www.instagram.com/workspacenepal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition"
            >
              <FaInstagram className="text-white text-sm" />
            </a>

            <a
              href="https://www.linkedin.com/company/teledigitalservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition"
            >
              <FaLinkedinIn className="text-white text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Tele Digital. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
