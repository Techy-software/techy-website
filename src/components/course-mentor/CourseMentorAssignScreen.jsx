import React, { useEffect, useState } from "react";
import CourseHeader from "../../reusable components/Header/CourseHeader";
import MentorGrid from "./MentorGrid";
import MentorView from "../../reusable components/Mentor-LG-View/MentorView";
import { get, post } from "../../utils/HtppService";
import { useLocation } from "react-router-dom";
import { objectToFormData } from "../../utils/objectToFormData";

const CourseMentorAssignScreen = () => {
  const [mentorList, setMentorList] = useState({});
  const [data, setData] = useState({});
  const location = useLocation();
  const fetchData = async () => {
    console.log("Fetching data...");
    try {
      const users = await get("/school/mentor/list/?pageNo=0&defaultValue=10");
      console.log("Mentor List Data:", users);
      setMentorList(users);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData(location);
  }, [location]);

  const chooseMentor = (e) => {
    const mentorId = e.currentTarget.dataset.id;
    if (!mentorId) return;
    setData((prevData) => ({ ...prevData, mentorIdentifier: mentorId }));
    // try {
    //   const response = await get(`/school/mentor/details/${mentorId}`);
    //   console.log(response);

    // setData((prevData) => ({
    //   ...prevData,
    //   mentorDetails,
    // }));
    // } catch (error) {
    //   console.error("Failed to fetch mentor details:", error);
    // }
  };
  const handleBack = () => {
    console.log("Go back");
  };

  const handleNext = async () => {
    try {
      const formData = objectToFormData(data);

      const response = await post("/school/course/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Course created:", response.data);
    } catch (error) {
      console.error("Error uploading course:", error);
    }
  };
  return (
    <>
      <CourseHeader
        title="Course details"
        status="Draft"
        headerStep="Assign"
        onBack={handleBack}
        onNext={handleNext}
        nextLabel="Submit Course"
      />

      {mentorList.content && (
        <MentorView
          info={true}
          lists={mentorList.content}
          OptionsButton={chooseMentor}
        />
      )}
    </>
  );
};

export default CourseMentorAssignScreen;
