import React from "react";
import starIcon from "../../assets/starIcon.png";
import Group from "../../assets/Group.png";

const WhyTechy = () => {
  return (
    <section className="relative px-6 md:px-20 bg-white overflow-hidden font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 bg-white overflow-hidden">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 relative h-72 md:h-[500px]">
          <img
            src={Group}
            alt="Group"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-bold mb-8">
            Why <span className="text-blue-600">Techy</span>
          </h2>
          <ul className="space-y-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                  <img src={starIcon} alt="star" className="w-4 h-4" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyTechy;
