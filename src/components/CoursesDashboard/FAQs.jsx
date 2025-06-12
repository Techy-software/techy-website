import React, { useState } from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";

const FAQs = ({ courseData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqEntries = Object.entries(courseData || {});

  return (
    <div>
      <WhiteCard title="FAQs" style={"mb-4 pt-1 pt-5"}>
        {faqEntries.map(([question, answer], index) => (
          <div className="pt-5">
            <div className="border rounded-lg mb-2" key={index}>
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-blue-50 hover:bg-blue-100"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg font-semibold text-blue-800">
                  {question}
                </h3>
                <span
                  className={`transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-blue-800"
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
                </span>
              </div>
              {openIndex === index && (
                <div className="p-4 text-gray-700 bg-white">
                  <p>{answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </WhiteCard>
    </div>
  );
};

export default FAQs;
