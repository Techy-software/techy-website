import React from 'react';

const DiscountBanner = () => {
  return (
    <div className="flex items-center justify-between bg-blue-600 text-white p-4 rounded-lg overflow-hidden relative" style={{ minHeight: '80px' }}>
      <div className="z-10">
        <h2 className="text-xl font-bold">Join and get amazing discount</h2>
        <p className="text-sm">With our responsive themes and mobile and desktop apps</p>
      </div>
      <div className="flex items-center z-10">
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 rounded-l-md text-black focus:outline-none"
        />
        <button className="bg-white text-blue-600 p-2 rounded-r-md font-medium hover:bg-gray-100">
          Subscribe
        </button>
      </div>
      <div
        className="absolute right-0 top-0 bottom-0 w-1/4 bg-[url('/path/to/your/pattern-image.png')] bg-no-repeat bg-cover"
        style={{ backgroundPosition: 'right' }}
      ></div>
    </div>
  );
};

export default DiscountBanner;