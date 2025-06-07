import React, { useEffect, useState } from "react";
import "./course-library-component.css";
import addIcon from "../../assets/icons/addIcon.svg";
import moreIcon from "../../assets/icons/moreCircle.svg";
import notebook from "../../assets/notebook.svg";
import addIconWhite from "../../assets/icons/addIconWhite.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { get } from "../../utils/HtppService";
import { useNavigate } from "react-router-dom";

const CourseLibraryComponent = () => {
  const navigator = useNavigate();
  const [coursesData, setCoursesData] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState();

  // Fetch courses
  const fetchCourses = async (page = 0, size = 10) => {
    try {
      const response = await get(
        `/school/course/all/?pageNo=${page}&pageSize=${size}`
      );
      // const response = mockResponse; //? For testing, use mock data from DummyCourseData
      setCoursesData(response.content);
      setPageNo(response.pageNo);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Failed to fetch courses", error);
    }
  };

  useEffect(() => {
    fetchCourses(pageNo, pageSize);
  }, [pageNo, pageSize]);

  const handlePageChange = (newPage) => {
    setPageNo(newPage);
  };

  return (
    <div>
      {/* Header */}
      <div className="course-library-header">
        <h1 className="course-library-title">Courses Library</h1>
      </div>
      <hr style={{ width: "100%", border: "1px solid #E6E6E6" }} />

      <div className="data-container">
        {/* Left Category Panel */}
        <div className="categories-container">
          <div className="categories-container-header">
            <h1 className="categories-text">Categories</h1>
            <img src={addIcon} alt="Add icon" className="icon-styling" />
          </div>
          <hr style={{ width: "98%", border: "1px solid #E6E6E6" }} />
          <div className="search-bar">
            <i className="fas fa-search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        {/* Courses Area */}
        <div className="left-container">
          <div className="left-container-header">
            <h1 className="categories-text">Untitled Category</h1>
            <img src={moreIcon} alt="More icon" className="icon-styling" />
          </div>
          <hr style={{ width: "100%", border: "1px solid #E6E6E6" }} />
          <button
            className="add-course-button"
            onClick={() => navigator("/courseDetails/new")}
          >
            <img src={addIconWhite} alt="Add" className="button-icon" />
            Add Course
          </button>
          {coursesData.length === 0 ? (
            <div className="courses-container">
              <img src={notebook} alt="Notebook" className="image-container" />
              <h2>No courses added yet</h2>
              <h3>Create your first Course in seconds.</h3>
              <button className="add-course-button">
                <img src={addIconWhite} alt="Add" className="button-icon" />
                Add Course
              </button>
            </div>
          ) : (
            <div className="courses-list">
              {coursesData.map((course) => (
                <div
                  key={course.id}
                  className="course-card"
                  onClick={() => {
                    navigator(`/courseDetails/${course.id}`);
                  }}
                >
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="course-thumb"
                  />
                  <h3>{course.title}</h3>
                  <p>Level: {course.level}</p>
                  <p>Price: ${course.discountPrice}</p>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`page-btn ${i === pageNo ? "active" : ""}`}
                onClick={() => handlePageChange(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLibraryComponent;
