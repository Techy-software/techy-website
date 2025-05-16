import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import CategorySidebar from "../../reusable components/CategorySidebar/CategorySidebar";
import { FaFilter, FaTh, FaBars, FaPlus } from "react-icons/fa";

const CourseLibrary = () => {
  const [courses, setCourses] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [currentPage, setCurrentPage] = useState(3);
  const [pageSize, setPageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [view, setView] = useState("grid"); // 'grid' or 'list'

  useEffect(() => {
    if (categoryId) {
      axios
        .get(`/api/courses?categoryId=${categoryId}&page=${currentPage}&size=${pageSize}`)
        .then((res) => {
          setCourses(res.data.content);
          setTotalPages(res.data.totalPages);
        });
    }
  }, [categoryId, currentPage, pageSize]);

  return (
    <div className="flex">
      <CategorySidebar onSelectCategory={setCategoryId} />

      <div className="flex-1 p-4 bg-gray-50 min-h-screen">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-semibold">Development courses (19)</h1>
            <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded">
              Active
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 border rounded-md"
            />
            <button className="p-2 border rounded-md bg-white">
              <FaFilter />
            </button>
            <button
              className={`p-2 border rounded-md ${view === "grid" ? "bg-blue-100" : "bg-white"}`}
              onClick={() => setView("grid")}
            >
              <FaTh />
            </button>
            <button
              className={`p-2 border rounded-md ${view === "list" ? "bg-blue-100" : "bg-white"}`}
              onClick={() => setView("list")}
            >
              <FaBars />
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2">
              <FaPlus /> New Course
            </button>
          </div>
        </div>

        {/* Conditional View */}
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="overflow-auto bg-white rounded-md shadow-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-3">Course name</th>
                  <th className="px-4 py-3">No. lessons</th>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">Rate</th>
                  <th className="px-4 py-3">Uploaded by</th>
                  <th className="px-4 py-3">Last updated at</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-t">
                    <td className="px-4 py-2">{course.name}</td>
                    <td className="px-4 py-2">{course.lessons}</td>
                    <td className="px-4 py-2">{course.level}</td>
                    <td className="px-4 py-2">{course.rating}</td>
                    <td className="px-4 py-2">{course.uploadedBy}</td>
                    <td className="px-4 py-2">{course.updatedAt}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 text-xs rounded ${
                          course.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : course.status === "Draft"
                            ? "bg-gray-200 text-gray-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline text-sm">
                        ⋮
                      </button>
                      {/* You can use a dropdown here like in the image */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <label className="text-sm">Show</label>
            <select
              className="ml-2 px-2 py-1 border rounded"
              value={pageSize}
              onChange={(e) => setPageSize(parseInt(e.target.value))}
            >
              {[6, 12, 24].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-1">
            {[...Array(totalPages).keys()].map((n) => (
              <button
                key={n}
                className={`px-3 py-1 rounded ${
                  currentPage === n + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 border"
                }`}
                onClick={() => setCurrentPage(n + 1)}
              >
                {n + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLibrary;
