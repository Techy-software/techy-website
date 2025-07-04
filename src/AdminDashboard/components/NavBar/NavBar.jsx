import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigator = useNavigate();

  const tabs = {
    home: { title: "Home", path: "/" },
    about: { title: "About us", path: "/about" },
    products: { title: "Our products", path: "/products" },
    partners: { title: "Partners", path: "/partners" },
    careers: { title: "Careers", path: "/careers" },
    faqs: { title: "FAQs", path: "/faqs" },
    contact: { title: "Contact us", path: "/contact" },
  };

  const handleLogin = () => navigator("/login");
  const handleBecomePartner = () => navigator("/becomeAPartner");

  return (
    <header className="py-2 px-4 bg-blue-600 shadow-sm sticky top-0 z-50 rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        <div className="text-xl font-bold me-16 text-white"></div>

        <nav className="hidden lg:flex space-x-6 text-white font-medium">
          {Object.entries(tabs).map(([key, item]) => (
            <a
              key={key}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.title);
                navigator(item.path);
              }}
              className={`relative flex items-center transition-colors duration-200 ${
                activeTab === item.title
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.title}
              {item.title === "Our products" && (
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
              {activeTab === item.title && (
                <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-orange-400 rounded" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <button
            onClick={handleLogin}
            className="bg-white text-blue-600 font-semibold py-2.5 px-6 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            Login
          </button>
          <button
            onClick={handleBecomePartner}
            className="bg-orange-400 text-white font-semibold py-2.5 px-6 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-200"
          >
            Become A Partner
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
