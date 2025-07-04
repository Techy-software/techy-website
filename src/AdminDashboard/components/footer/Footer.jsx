import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="site-footer" className="bg-blue-700 text-white w-full px-20">
      <div className="flex items-center justify-center pt-11 mx-auto px-4">
        <div className="flex space-x-16">
          <div>
            <Link to="/" className="block text-sm hover:text-blue-300 mb-1">
              Home
            </Link>
            <Link to="/about" className="block text-sm hover:text-blue-300 mb-1">
              About us
            </Link>
            <Link to="/" className="block text-sm hover:text-blue-300 mb-1">
              Student app
            </Link>
            <Link to="/" className="block text-sm hover:text-blue-300 mb-1">
              SAAS
            </Link>
          </div>
          <div>
            <Link to="/" className="block text-sm hover:text-blue-300 mb-1">
              Our Partners
            </Link>
            <Link to="/" className="block text-sm hover:text-blue-300 mb-1">
              Careers
            </Link>
            <Link to="/" className="block text-sm hover:text-blue-300 mb-1">
              FAQs
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 mr-4 bg-blue-700 pt-11 pb-4">
        <div className="text-center mt-1 border-t border-gray-500 pt-1">
          <p className="text-xs">Copyright © Techy2024. All Rights Reserved</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://twitter.com/Techy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.facebook.com/Techy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com/Techy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;