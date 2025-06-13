import React from "react";

// Reusable feature card component - made more compact
const FeatureCard = ({ title, description }) => (
  <div className="card-bg p-4 w-72 flex flex-col items-center justify-start text-center bg-white py-10 rounded-lg shadow-md">
    <div className="w-16 h-16 bg-blue-100 rounded-full mb-2"></div>
    <h3 className="text-md font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600 text-xs">{description}</p>
  </div>
);



// Main section component - optimized for minimal spacing and content-based height
const AllInOnePlatform = () => {
  return (
    // The main container now dynamically adjusts its height based on content.
    // 'w-full' ensures it takes full width, 'flex flex-col items-center' for centering content.
    <div className="bg-gray-50 w-full flex flex-col items-center py-10">
      {/* Title and description section */}
      {/* 'pt-6' and 'pb-4' provide controlled top/bottom spacing for this specific section */}
      <div className="mx-auto px-4 text-center flex flex-col gap-2 pt-6 py-40">
        <h2 className="text-2xl font-bold text-orange-500">
          All-In-One Platform
        </h2>
        {/* Adjusted gap for better visual flow */}
        <p className="text-gray-500 text-sm max-w-lg mx-auto"> 
          Techy is one powerful software that provides academies with all the
          tools needed to run a successful business.
        </p>
      </div>

      {/* Feature cards container */}
      {/* 'gap-4' for spacing between cards, 'pb-6' for bottom padding of the entire section */}
      <div className="flex flex-wrap justify-center gap-4 pb-6">
        <FeatureCard
          title="Easy Add courses & Assign mentors"
          description="Schedule and reserve classrooms at one campus or multiple campuses."
        />
        <FeatureCard
          title="Track Students Progress"
          description="Automate and track emails to individuals or groups."
        />
        <FeatureCard
          title="Manage orders & receipts"
          description="Simple and secure control of financial transactions."
        />
      </div>
    </div>
  );
};

export default AllInOnePlatform;