import { Link } from "react-router-dom";
import logo from '../assets/Image/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
           <Link to="/" className="text-2xl font-bold text-gray-800">
         <img src={logo} className="h-15"/>
        </Link>
          <p className="text-sm leading-6">
            Google Partner delivering enterprise-grade solutions
            on Google Cloud Platform and Google Workspace.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Cloud Migration</li>
            <li>Cloud Infrastructure</li>
            <li>Google Workspace Setup</li>
            <li>Security & Compliance</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>GCP Solutions</li>
            <li>Google Workspace</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">Email: info@rameshgorp.com</p>
          <p className="text-sm mt-2">Phone: +91 XXXXX XXXXX</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Ramesh Gorp. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
