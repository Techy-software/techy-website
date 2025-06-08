import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Overview from "./Overview";
import CoursesList from "../../reusable components/Courses-LG-View/CoursesList";
import MentorView from "../../reusable components/Mentor-LG-View/MentorView";
import Orders from "./Orders";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/HtppService";
import FAQs from "./FAQs";

const Box = ({ label, onClick, isActive }) => (
  <div
    className={`cursor-pointer p-2 px-4 rounded-3xl m-1.5 border-slate-300 border ${
      isActive ? "bg-[#FE9B01] text-white" : "bg-white text-black"
    }`}
    onClick={onClick}
  >
    {label}
  </div>
);

const CoursesDashboard = () => {
  const navigator = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [activeComponent, setActiveComponent] = useState("Overview");

  const AcademyItems = [
    "Overview",
    "FAQs",
    "Reviews",
    "Leaderboard",
    "Mentors",
  ];

  const handleClick = (label) => {
    setActiveComponent(label);
  };

  const fetchData = async () => {
    try {
      const response = await get(
        "course/b2e814be-69e5-4a13-8518-20259c2b9a9f/"
      );
      setCourseData(response || null);
      console.log("Fetched course data:", response);
    } catch (err) {
      console.error("Error fetching course data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (courseData === null) {
    return <div className="p-10 text-center">Loading course details...</div>;
  }

  const { course, rating } = courseData;
  const { school } = course;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 flex justify-between items-center bg-white p-6 shadow">
        <div className="flex items-center">
          <button className="mr-2" onClick={() => navigator(-1)}>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold mr-4">Course details</h1>
        </div>
        <button className="bg-blue-500 text-white px-10 py-2 rounded">
          Edit course
        </button>
      </div>

      <div className="grid grid-cols-12 gap-4 px-10 pt-10">
        <div className="col-span-4">
          <WhiteCard>
            <div className="flex items-center flex-col text-center">
              <img
                src={courseData.course.thumbnail}
                alt="Course Thumbnail"
                className="w-24 h-24 object-cover rounded-full"
              />
              <h2 className="text-xl font-bold mt-4">
                {courseData.course.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {courseData.course.school.fullName}
              </p>
              <p className="text-yellow-500 text-sm mt-1">
                ⭐ {courseData.rating.toFixed(1)} (0 Reviews)
              </p>
              <hr className="my-3 w-full border-gray-200" />

              <div className="text-lg text-blue-600 font-bold">
                {courseData.course.discountPrice} EGP
              </div>
              <div className="text-gray-400 line-through">
                {courseData.course.originalPrice} EGP
              </div>
            </div>

            <ul className="text-sm mt-4 space-y-2 text-left">
              <li>📂 {courseData.course.category.categoryName}</li>
              <li>🎯 {courseData.course.level}</li>
              <li>⏰ {courseData.course.duration}</li>
              <li>🖥️ {courseData.course.attendanceType}</li>
            </ul>

            <div className="mt-4 text-sm flex items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mr-2 w-5 h-5 text-gray-600"
              />
              <span>{courseData.course.location}</span>
            </div>
          </WhiteCard>
        </div>

        <div className="col-span-8">
          <div className="flex overflow-x-auto py-2 touch-pan-x">
            {AcademyItems.map((label) => (
              <Box
                key={label}
                label={label}
                onClick={() => handleClick(label)}
                isActive={activeComponent === label}
              />
            ))}
          </div>

          <div className="mt-4">
            {activeComponent === "Overview" && <Overview courseData={course} />}
            {activeComponent === "FAQs" && <FAQs faqs={course.faqs} />}
            {activeComponent === "Reviews" && (
              <CoursesList reviewsData={courseData} />
            )}
            {activeComponent === "Leaderboard" && (
              <Orders leaderboardData={courseData} />
            )}
            {activeComponent === "Mentors" && (
              <MentorView mentor={course.mentor} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDashboard;
export { Box };
