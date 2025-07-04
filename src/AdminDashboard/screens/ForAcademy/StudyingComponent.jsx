import React from 'react';

const StudyingComponent = () => {
  return (
    <div className="flex flex-col items-start justify-center h-screen bg-white pl-8">
      <h1 className="text-5xl font-bold text-yellow-500 mb-8">Studying</h1>
      <p className="text-gray-400 text-sm mb-12">Techio is an interesting platform that will teach you in a more interactive way</p>
      <button className="px-6 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium hover:bg-yellow-600">
        Become Partner
      </button>
    </div>
  );
};

export default StudyingComponent;