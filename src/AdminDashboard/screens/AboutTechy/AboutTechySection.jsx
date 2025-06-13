import React from 'react';

const AboutTechySection = () => {
  return (
    <div className="bg-white-50 p-8">
      <p className="text-gray-600 text-xl font-medium mb-8 px-4">
        Techy is a platform that allows educators to create online classes, manage assignments, quizzes and exams; monitor due dates;
        grade results and provide students with feedback all in one place.
      </p>
      <div className="flex justify-center space-x-8 mb-12 max-w-6xl mx-auto">
        <div className="bg-gray-400 w-96 h-80 rounded-xl flex flex-col items-center justify-center">
          <div className="text-white text-2xl font-bold">FOR STUDENTS</div>
          <button className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-full text-sm font-medium hover:bg-yellow-600">
            Get App Now
          </button>
        </div>
        <div className="bg-gray-400 w-96 h-80 rounded-xl flex flex-col items-center justify-center">
          <div className="text-white text-2xl font-bold">FOR ACADEMY</div>
          <button className="mt-4 px-6 py-3 bg-gray-300 text-white rounded-full text-sm font-medium hover:bg-gray-400">
            Become Partner
          </button>
        </div>
      </div>
      {/* <div className="relative">
        <svg className="absolute right-4 bottom-4" width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25 C20 20, 40 15, 60 20 C80 25, 100 20, 100 25" stroke="#3B82F6" strokeWidth="1" fill="none"/>
          <path d="M0 22 C20 17, 40 12, 60 17 C80 22, 100 17, 100 22" stroke="#3B82F6" strokeWidth="1" fill="none"/>
          <path d="M0 19 C20 14, 40 9, 60 14 C80 19, 100 14, 100 19" stroke="#3B82F6" strokeWidth="1" fill="none"/>
        </svg>
      </div> */}
    </div>
  );
};

export default AboutTechySection;