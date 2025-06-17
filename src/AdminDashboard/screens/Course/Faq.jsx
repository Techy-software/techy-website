import React, { useState } from "react";

const faqData = [
  {
    question: "What will I get if I subscribe to this Specialization?",
    answer:
      "When you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. Your electronic Certificate will be added to your Accomplishments page – from there, you can print your Certificate or add it to your LinkedIn profile. If you only want to read and view the course content, you can audit the course for free.",
  },
  {
    question: "Is financial aid available?",
    answer:
      "Yes, Coursera provides financial aid to learners who cannot afford the course fee. You can apply for financial aid by clicking the 'Financial aid available' link beneath the 'Enroll' button on the course page.",
  },
  {
    question: "Can I take the course for free?",
    answer:
      "Yes, you can audit the course for free. This gives you access to most of the course materials, such as lectures and readings. However, you won't be able to submit assignments for a grade or earn a Certificate.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "If you subscribed, you get a 7-day free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time.",
  },
  {
    question: "Can I switch to a different Specialization?",
    answer:
      "Yes, you can un-enroll from a Specialization at any time and enroll in a different one. Your progress in the individual courses you've completed will be saved.",
  },
];

const ChevronDownIcon = ({ className = "" }) => (
  <svg
    className={`w-5 h-5 stroke-gray-500 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <polyline
      points="6 9 12 15 18 9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = ({ className = "" }) => (
  <svg
    className={`w-5 h-5 stroke-blue-600 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <polyline
      points="18 15 12 9 6 15"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none transition-colors rounded-lg ${
        isOpen ? "bg-blue-50/50" : "hover:bg-gray-50"
      }`}
    >
      <span
        className={`font-medium text-base ${
          isOpen ? "text-blue-600" : "text-gray-800"
        }`}
      >
        {faq.question}
      </span>
      <span>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
    </button>
    <div
      className={`transition-[max-height] duration-300 overflow-hidden px-4 ${
        isOpen ? "max-h-96 py-2" : "max-h-0"
      }`}
    >
      <p className="text-sm text-gray-600">{faq.answer}</p>
    </div>
  </div>
);

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-5 border-2 rounded-lg bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-sm rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-900">FAQs</h2>
        <hr className="mt-5 mb-3" />
        <div className="divide-y divide-gray-200 space-y-5">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              faq={item}
              isOpen={activeIndex === index}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
