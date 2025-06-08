import "./course-details-component.css";
import addIcon from "../../assets/icons/addIcon.svg";
import moreIcon from "../../assets/icons/moreCircle.svg";
import tickCircle from "../../assets/tickCircle.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { get, post } from "../../utils/HtppService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VideoUploader from "../../reusable components/VideoUploader";
import { objectToFormData } from "../../utils/objectToFormData";

const CourseDetailsComponent = () => {
  const navigator = useNavigate();
  const params = useParams();
  const [showModal, setShowModal] = useState(false);
  const [newUnitName, setNewUnitName] = useState("");
  const [courseData, setCourseData] = useState(null);
  const [courseUnits, setCourseUnits] = useState([{}]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [activeSectionForLesson, setActiveSectionForLesson] = useState(null);
  const [expandedSection, setExpandedSection] = useState({});
  const [lessonData, setLessonData] = useState({
    media: null,
    lectureType: "VIDEO",
    title: "",
    description: "",
    videoDuration: "10",
    order: "",
    private: "true",
    points: "10",
    section: "",
  });

  const handleToggleSection = (section) => {
    setExpandedSection(expandedSection.id === section.id ? null : section);
  };

  const handleVideoSelect = (file) => {
    console.log("Selected video file:", file);
    setLessonData((prev) => ({ ...prev, media: file }));
  };

  const handleSelectVideo = (video) => {
    if (video.lectureType === "VIDEO" && video.media) {
      setSelectedVideo(video);
    } else {
      alert("This lesson does not contain a playable video.");
    }
  };

  const fetchData = async () => {
    console.log("Fetching data...");
    if (params.courseId === "new") return;
    try {
      const response = await get(`/course/${params.courseId}/`);
      console.log("Courses List Data:", response);
      setCourseData(response || null);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (courseData?.sectionDetails?.[0]?.videos?.[0]) {
  //     setSelectedVideo(courseData.sectionDetails[0].videos[0]);
  //   }
  // }, [courseData]);

  return (
    <>
      {
        <div className="course-container">
          <div className="lesson-header flex justify-between items-center flex-wrap gap-4 bg-white shadow-sm py-2 rounded-md">
            <div className="left flex flex-col sm:flex-row sm:items-center gap-2">
              <h1 className="course-title text-2xl font-semibold text-gray-800">
                {courseData?.course.title || "Untitled Course"}
              </h1>
              <span className="status-badge inline-block bg-green-100 text-green-600 text-sm font-medium px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>

            <div className="right flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img src={tickCircle} alt="tick icon" className="w-5 h-5" />
                <span className="saved-status text-sm text-gray-600">
                  Saved
                </span>
              </div>

              <button
                className="hover:bg-gray-100 p-2 rounded-full transition"
                aria-label="More options"
              >
                <img src={moreIcon} alt="More icon" className="w-5 h-5" />
              </button>

              <button
                className="arrow-button flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => navigator(`/courseSetup/${params.courseId}`)}
              >
                Next Step
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </button>
            </div>
          </div>

          <div className="data-wrapper">
            <div className="units-panel">
              <div className="units-header">
                <h2 className="font-bold">Units</h2>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ color: "#007bff" }}
                  className="icon-styling"
                  onClick={() => setShowModal(true)}
                />
              </div>
              <hr />
              {courseData?.sectionDetails?.length > 0 ? (
                [...courseData.sectionDetails]
                  .sort((a, b) => a.order - b.order)
                  .map((section) => (
                    <ul key={section.id} className="unit-list mt-2 space-y-2">
                      <li className="unit-item border rounded-md p-3">
                        <div
                          className="unit-title font-semibold cursor-pointer text-blue-600 hover:underline"
                          onClick={() => handleToggleSection(section)}
                        >
                          {section.title || `Unit ${section.order}`}
                        </div>
                        {expandedSection?.id === section.id && (
                          <div className="ml-4 mt-2 space-y-2">
                            <ul className="lesson-list space-y-1">
                              {section.videos?.map((video, vidIndex) => (
                                <li
                                  key={vidIndex}
                                  className="lesson-item text-sm text-gray-700 cursor-pointer hover:text-blue-600"
                                  onClick={() => handleSelectVideo(video)}
                                >
                                  {video.title || `Lesson ${vidIndex + 1}`}
                                </li>
                              ))}
                            </ul>
                            <button
                              className="mt-2 text-sm text-blue-600 hover:underline"
                              onClick={() => {
                                setShowLessonModal(true);
                              }}
                            >
                              + Add New Lesson
                            </button>
                          </div>
                        )}
                      </li>
                    </ul>
                  ))
              ) : (
                <p className="text-gray-400 italic text-sm mt-3">
                  No units added yet.
                </p>
              )}
            </div>

            {selectedVideo && selectedVideo.media ? (
              <div className="lesson-details-panel">
                <div className="video-preview">
                  <div className="video-box">
                    <video
                      key={selectedVideo.media}
                      width="100%"
                      controls
                      poster="/placeholder.jpg"
                    >
                      <source src={selectedVideo.media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div>{selectedVideo.title}</div>
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
            ) : params.courseId === "new" ? (
              <div className="text-gray-500 italic">
                No content available. Start creating your course.
              </div>
            ) : (
              <div className="text-gray-500 italic">
                Select a lesson to preview the video
              </div>
            )}
          </div>
        </div>
      }
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Unit</h2>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter unit name"
              value={newUnitName}
              onChange={(e) => setNewUnitName(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={() => {
                  setShowModal(false);
                  setNewUnitName("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={async () => {
                  if (!newUnitName.trim())
                    return alert("Unit name cannot be empty.");
                  // TODO: handle actual unit creation logic here
                  const newUnit = {
                    title: newUnitName,
                    order: (courseUnits?.length || 0) + 1,
                  };
                  try {
                    const response = await post(
                      `/school/course/b2e814be-69e5-4a13-8518-20259c2b9a9f/sections/`,
                      [newUnit]
                    );
                    console.log(response);
                    setCourseData((prev) => {
                      if (!prev) return prev; // handle null case just in case

                      return {
                        ...prev,
                        sectionDetails: [
                          ...(prev.sectionDetails || []),
                          newUnit,
                        ],
                      };
                    });
                  } catch (error) {
                    console.log(error);
                  }
                  setShowModal(false);
                  setNewUnitName("");
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {showLessonModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Add New Lesson
            </h2>

            <div className="space-y-3">
              <label className="block">
                <span className="text-gray-700 font-medium">Lesson Title</span>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter lesson title"
                  value={lessonData.title}
                  onChange={(e) => {
                    setLessonData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }));
                  }}
                />
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium">Description</span>
                <textarea
                  rows="3"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a short description"
                  value={lessonData.description}
                  onChange={(e) => {
                    setLessonData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }));
                  }}
                ></textarea>
              </label>

              <div>
                <span className="text-gray-700 font-medium block mb-1">
                  Upload Lesson Video
                </span>
                <VideoUploader onVideoSelect={handleVideoSelect} />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t mt-4">
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={() => {
                  setShowLessonModal(false);
                  setActiveSectionForLesson(null);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={async () => {
                  const formData = objectToFormData({
                    ...lessonData,
                    section: expandedSection?.id,
                    order: expandedSection?.order,
                  });
                  try {
                    const response = await post(
                      `/school/course/${params.courseId}/lecture/add/`,
                      formData
                    );
                    console.log(response);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Add Lesson
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetailsComponent;
