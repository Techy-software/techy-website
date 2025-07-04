import React from "react";

const FaqSection = () => {
  return (
    <div className="bg-blue-50 py-16 px-4 w-full">
      {/* Center-aligned title and description */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Techy is a platform that allows educators to create online classes,
          and more
        </p>
      </div>

      {/* FAQ dropdowns aligned to screen's far right */}
      <div className="w-full flex justify-end pr-4">
        <div className="w-full max-w-md space-y-4">
          {[
            "How to become a partner",
            "How to become a teacher",
            "How to create a course",
            "How to earn money",
          ].map((title, idx) => (
            <details
              key={idx}
              className="group bg-white px-6 py-4 rounded-xl shadow transition-all duration-300 open:bg-gray-100"
            >
              <summary className="cursor-pointer text-sm font-semibold text-gray-800 flex justify-between items-center w-full">
                {title}
                <svg
                  className="w-4 h-4 ml-2 transform transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
