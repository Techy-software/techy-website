import "./course-details-component.css";
import addIcon from "../../assets/icons/addIcon.svg";
import moreIcon from "../../assets/icons/moreCircle.svg";
import tickCircle from "../../assets/tickCircle.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { get } from "../../utils/HtppService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CourseDetailsComponent = ({ steps, currentStep }) => {
  const navigator = useNavigate();
  const params = useParams();
  const [courseData, setCourseData] = useState(null);
  3;

  const fetchData = async () => {
    console.log("Fetching data...");
    try {
      const response = await get(
        "/course/b2e814be-69e5-4a13-8518-20259c2b9a9f/"
      );
      console.log("Courses List Data:", response);
      setCourseData(response || null);
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
        <div className="course-container">
          <div className="lesson-header">
            <div className="left">
              <h1 className="course-title">
                {courseData.course.title || "Course Title"}
              </h1>
              <span className="status-badge">Active</span>
            </div>
            <div className="right">
              <img src={tickCircle} alt="tick icon" />
              <span className="saved-status">Saved</span>
              <img src={moreIcon} alt="More icon" className="icon-styling" />
              <button
                className="arrow-button"
                onClick={() => {
                  navigator(`/courseSetup/${params.courseId}`);
                }}
              >
                Next Step
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </button>
            </div>
          </div>

          <div className="data-wrapper">
            <div className="units-panel">
              <div className="units-header">
                <h2>Units</h2>
                <img src={addIcon} alt="Add unit" className="icon-styling" />
              </div>
              <ul className="unit-list">
                {courseData.sectionDetails?.map((section, index) => (
                  <li key={index} className="unit-item">
                    <div className="unit-title">
                      {section.title || `Unit ${index + 1}`}
                    </div>
                    <ul className="lesson-list">
                      {section.videos?.map((video, vidIndex) => (
                        <li key={vidIndex} className="lesson-item">
                          {video.title || `Lesson ${vidIndex + 1}`}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li className="new-lesson">+ New lesson</li>
              </ul>
            </div>

            <div className="lesson-details-panel">
              <div className="video-preview">
                <div className="video-box">
                  <video width="100%" controls poster="/placeholder.jpg">
                    <source
                      src={
                        courseData.sectionDetails?.[0]?.videos?.[0]?.media || ""
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="discussion-section">
                <div className="tabs">
                  <button className="tab active">Discussions</button>
                  <button className="tab">About</button>
                </div>
                <div className="discussion-post">
                  <div className="user-info">
                    <div className="avatar">A</div>
                    <div className="user-meta">
                      <strong>Abdelrahman E</strong>
                      <span className="role-badge">Learner</span>
                      <span className="date">Jun 23, 2020</span>
                    </div>
                  </div>
                  <div className="question-text">
                    How do you access peer feedback on your work?
                  </div>
                  <div className="interaction-buttons">
                    <span className="like">👍 Like 3</span>
                    <span className="reply">💬 Reply 2</span>
                  </div>
                  <div className="reply-box">
                    <textarea placeholder="Write a reply for this question"></textarea>
                    <button className="reply-button">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetailsComponent;

// import "./course-details-component.css";
// import addIcon from "../../assets/icons/addIcon.svg";
// import moreIcon from "../../assets/icons/moreCircle.svg";
// import tickCircle from "../../assets/tickCircle.svg";
// import StepperComponent from "./stepper-component";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { get } from "../../utils/HtppService";
// import { useEffect, useState } from "react";

// const CourseDetailsComponent = ({ steps, currentStep }) => {
//   const [courseData, setCourseData] = useState(null);

//   const fetchData = async () => {
//     console.log("Fetching data...");
//     try {
//       const response = await get("/course/b2e814be-69e5-4a13-8518-20259c2b9a9f/");
//       console.log("Courses List Data:", response);
//       setCourseData(response || null);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <h2>Loading...</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       {courseData && (
//         <div className="course-container">
//           <div className="lesson-header">
//             <div className="left">
//               <h1 className="course-title">{courseData.course.title || "Course Title"}</h1>
//               <span className="status-badge">Active</span>
//             </div>
//             <div className="right">
//               <img src={tickCircle} alt="tick icon" />
//               <span className="saved-status">Saved</span>
//               <img src={moreIcon} alt="More icon" className="icon-styling" />
//               <button className="arrow-button">
//                 Next Step
//                 <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
//               </button>
//             </div>
//           </div>

//           <div className="data-wrapper">
//             <div className="units-panel">
//               <div className="units-header">
//                 <h2>Units</h2>
//                 <img src={addIcon} alt="Add unit" className="icon-styling" />
//               </div>
//               <ul className="unit-list">
//                 {courseData.sectionDetails?.map((section, index) => (
//                   <li key={index} className="unit-item">
//                     <div className="unit-title">{section.title || `Unit ${index + 1}`}</div>
//                     <ul className="lesson-list">
//                       {section.videos?.map((video, vidIndex) => (
//                         <li key={vidIndex} className="lesson-item">
//                           {video.title || `Lesson ${vidIndex + 1}`}
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//                 <li className="new-lesson">+ New lesson</li>
//               </ul>
//             </div>

//             <div className="lesson-details-panel">
//               <div className="video-preview">
//                 <div className="video-box">
//                   <video width="100%" controls poster="/placeholder.jpg">
//                     <source
//                       src={courseData.sectionDetails?.[0]?.videos?.[0]?.media || ""}
//                       type="video/mp4"
//                     />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//               </div>

//               <div className="discussion-section">
//                 <div className="tabs">
//                   <button className="tab active">Discussions</button>
//                   <button className="tab">About</button>
//                 </div>
//                 <div className="discussion-post">
//                   <div className="user-info">
//                     <div className="avatar">A</div>
//                     <div className="user-meta">
//                       <strong>Abdelrahman E</strong>
//                       <span className="role-badge">Learner</span>
//                       <span className="date">Jun 23, 2020</span>
//                     </div>
//                   </div>
//                   <div className="question-text">How do you access peer feedback on your work?</div>
//                   <div className="interaction-buttons">
//                     <span className="like">👍 Like 3</span>
//                     <span className="reply">💬 Reply 2</span>
//                   </div>
//                   <div className="reply-box">
//                     <textarea placeholder="Write a reply for this question"></textarea>
//                     <button className="reply-button">Reply</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CourseDetailsComponent;
