import React from "react";

const TopCourses = () => {
  return (
    <div className="bg-white p-4 shadow rounded">
    <h2 className="text-lg font-bold">Top Courses</h2>
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="border-b-2 p-2">#</th>
          <th className="border-b-2 p-2">Name</th>
          <th className="border-b-2 p-2">Popularity</th>
          <th className="border-b-2 p-2">Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-b p-2">01</td>
          <td className="border-b p-2">Course name</td>
          <td className="border-b p-2">45%</td>
          <td className="border-b p-2">100</td>
        </tr>
        <tr>
          <td className="border-b p-2">02</td>
          <td className="border-b p-2">Course name</td>
          <td className="border-b p-2">29%</td>
          <td className="border-b p-2">80</td>
        </tr>
        <tr>
          <td className="border-b p-2">03</td>
          <td className="border-b p-2">Course name</td>
          <td className="border-b p-2">18%</td>
          <td className="border-b p-2">50</td>
        </tr>
        <tr>
          <td className="border-b p-2">04</td>
          <td className="border-b p-2">Course name</td>
          <td className="border-b p-2">25%</td>
          <td className="border-b p-2">60</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default TopCourses;
