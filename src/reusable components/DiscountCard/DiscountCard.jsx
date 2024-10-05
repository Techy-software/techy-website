import React from 'react';

const DiscountCard = ({ discount, description, startDate, endDate }) => {
  return (
    <div className="relative flex items-center justify-between w-full max-w-lg p-4 bg-white border border-gray-200 shadow-md rounded-xl">
      
      {/* Left Circular Cut */}
      <div className="absolute -left-6 h-full flex items-center">
        <div className="w-10 h-16 bg-gray-50 border border-gray-200 rounded-l-full"></div>
      </div>

      {/* Right Circular Cut */}
      <div className="absolute -right-6 h-full flex items-center">
        <div className="w-10 h-16 bg-gray-50 border border-gray-200 rounded-r-full"></div>
      </div>

      {/* Left Circular Logo Section */}
      <div className="flex-shrink-0 z-10">
        <div className="w-14 h-14 bg-white border border-gray-300 rounded-full flex items-center justify-center">
          <img src="path-to-logo.png" alt="Techy School Logo" className="w-12 h-12 rounded-full" />
        </div>
      </div>

      {/* Middle Section: Discount and Description */}
      <div className="flex flex-col items-center mx-4 text-center z-10">
        <span className="text-lg font-bold text-black">{discount}</span>
        <span className="text-sm text-gray-500">{description}</span>
        <span className="text-xs text-gray-400">{`From ${startDate} : ${endDate}`}</span>
      </div>

      {/* Right-side Dots */}
      <div className="flex-shrink-0 z-10">
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;
