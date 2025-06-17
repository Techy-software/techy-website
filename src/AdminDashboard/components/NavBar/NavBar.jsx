import { useState } from "react";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    "Home",
    "About us",
    "Our products",
    "Partners",
    "Careers",
    "FAQs",
    "Contact us",
  ];

  return (
    <header className="py-2 px-4 bg-blue-600 shadow-sm sticky top-0 z-50 rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        <div className="text-xl font-bold me-16 text-white"></div>

        <nav className="hidden lg:flex space-x-6 text-white font-medium">
          {tabs.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActiveTab(item)}
              className={`relative flex items-center transition-colors duration-200 ${
                activeTab === item
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item}
              {item === "Our products" && (
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
              {activeTab === item && (
                <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-orange-400 rounded" />
              )}
            </a>
          ))}
        </nav>

        <button className="bg-orange-400 text-white font-semibold py-2.5 px-6 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-200">
          Become A Partner
        </button>
      </div>
    </header>
  );
};

export default NavBar;
