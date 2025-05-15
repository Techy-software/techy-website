import React from "react";
import { FaStar, FaSignal } from "react-icons/fa";

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-xl shadow-md p-3 flex flex-col justify-between">
    <div className="mb-2">
      <div className="flex justify-between items-center text-sm text-white bg-gray-800 p-1 rounded-t">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{course.rating} ({course.reviews})</span>
        </div>
        <div className="flex items-center gap-1">
          <FaSignal className="text-gray-300" />
          <span>{course.level}</span>
        </div>
      </div>
      <h3 className="font-semibold mt-2">{course.title}</h3>
      <p className="text-sm text-gray-500">{course.lessons} lessons</p>
    </div>
    <div className="flex justify-between items-center mt-auto text-sm">
      <span className="text-blue-600">{course.author}</span>
      <div>
        <span className="font-bold">{course.price} EGP</span>
        {course.oldPrice && (
          <span className="text-gray-400 line-through text-xs ml-1">{course.oldPrice} EGP</span>
        )}
      </div>
    </div>
  </div>
);

export default CourseCard;
