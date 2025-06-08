import { useEffect, useState } from "react";
import { get } from "../../utils/HtppService";

const CourseContent = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await get("school/course/b2e814be-69e5-4a13-8518-20259c2b9a9f/sections/");
      if (Array.isArray(response)) {
        setSections(response);  // assume response is the array of section objects
      } else {
        console.error("Expected array but got:", response);
        setSections([]); // fallback to empty
      }
    } catch (err) {
      console.error("Error fetching course data:", err);
      setSections([]); // prevent breaking .map/.filter later
    }
  };

  fetchData();
}, []);


  const totalLectures = Array.isArray(sections)
    ? sections.reduce((acc, sec) => acc + sec.lessons, 0)
    : 0;
const totalTime = Array.isArray(sections)
  ? sections.reduce((acc, sec) => acc + sec.lessons, 0)
  : 0;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h > 0 ? `${h}h ` : ""}${m}m`;
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-2">Course content</h2>
      <p className="text-sm text-gray-500 mb-4">
        {sections.length} Sections · {totalLectures} Lectures ·{" "}
        {formatTime(totalTime * 60)} total length
      </p>

      {sections
        .filter((section) => section.active)
        .map((section, index) => (
          <div key={section.id} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-700">
                Section {section.order} - {section.title}
              </p>
              <span className="text-xs text-blue-600 font-medium">
                {Math.floor(section.totalDuration / 60)}mins
              </span>
            </div>

            <div className="space-y-2">
              {[...Array(section.lessons)].map((_, lectureIndex) => (
                <div
                  key={lectureIndex}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                >
                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-100 text-blue-600 font-semibold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      {String(lectureIndex + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium">Intro</p>
                  </div>
                  <p className="text-xs text-gray-500">Video · 2min</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CourseContent;
