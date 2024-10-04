import React from 'react';

const InfoCard = ({ title, count }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 w-full">
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{count}</p>
      </div>
    );
  };
export default InfoCard;