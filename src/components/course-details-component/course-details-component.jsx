import "./course-details-component.css";
import addIcon from "../../assets/icons/addIcon.svg";
import moreIcon from "../../assets/icons/moreCircle.svg";
import tickCircle from "../../assets/tickCircle.svg";
import StepperComponent from "./stepper-component";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { get } from "../../utils/HtppService";
import { useEffect, useState } from "react";

const CourseDetailsComponent = ({ steps, currentStep }) => {
  const [courseData, setCourseData] = useState(null);

  const fetchData = async () => {
    console.log("Fetching data...");
    try {
      const response = await get(
        "/api/course/b2e814be-69e5-4a13-8518-20259c2b9a9f/"
      );
      console.log("Courses List Data:", response?.data);
      setCourseData(response?.data || null);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {courseData && (
        <div>
          <div className="course-library-header">
            <h1 className="course-library-title">
              {courseData.course.title || "Course Title"}
            </h1>
            <h2>Draft</h2>
            <StepperComponent steps={steps} currentStep={currentStep} />
            <div className="left-header-side-class">
              <img src={tickCircle} alt="tick image" />
              <h3>Saved</h3>
              <img src={moreIcon} alt="Add icon" className="icon-styling" />
              <button className="arrow-button">
                Next Step
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </button>
            </div>
          </div>

          <hr style={{ width: "100%", border: "1px solid #E6E6E6" }} />

          <div className="data-container">
            {/* Left Side: Units (Section Titles) */}
            <div className="categories-container">
              <div className="categories-container-header">
                <h1 className="categories-text">Units</h1>
                <img src={addIcon} alt="Add icon" className="icon-styling" />
              </div>
              <hr style={{ width: "98%", border: "1px solid #E6E6E6" }} />

              <div className="courses-container">
                <ul>
                  {courseData.sectionDetails?.map((section, index) => (
                    <li key={index}>
                      <h2>{section.title || "Unit Title"}</h2>
                      <p>{`Order: ${section.order}`}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: Lesson Details (Videos inside sections) */}
            <div className="left-container">
              <div className="left-container-header">
                <h1 className="categories-text">Lesson Details</h1>
                <img src={moreIcon} alt="More icon" className="icon-styling" />
              </div>
              <hr style={{ width: "100%", border: "1px solid #E6E6E6" }} />

              <div className="courses-container">
                {courseData.sectionDetails?.map((section, secIndex) => (
                  <div key={secIndex}>
                    <h2 style={{ marginTop: "10px" }}>{section.title}</h2>
                    <ul>
                      {section.videos?.map((video, vidIndex) => (
                        <li key={vidIndex}>
                          <h3>{video.title || "Lesson Title"}</h3>
                          <p>Type: {video.lectureType}</p>
                          <p>Duration: {video.videoDuration} mins</p>
                          {video.media && video.lectureType === "VIDEO" && (
                            <video width="250" controls>
                              <source src={video.media} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                          {video.lectureType === "TEXT" && (
                            <p>Text Content (Not shown)</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetailsComponent;
