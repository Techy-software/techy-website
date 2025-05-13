import React, { useEffect } from "react";
import { useState } from "react";
import InfoCard from "../../reusable components/InfoCard/InfoCard";
import { faPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import CoursesList from "../../reusable components/Courses-LG-View/CoursesList";
import ActionButton from "../../reusable components/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/HtppService";
import MentorView from "../../reusable components/Mentor-LG-View/MentorView";

const MentorsListComponent = () => {
  const navigator = useNavigate();
  const [mentorList, setMentorList] = useState({});

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

  // useEffect(() => {
  //   if (data) {
  //     console.log("Mentor List Data:", data);
  //   } else {
  //     console.log("No data available");
  //   }
  // }, [data]);

  const handleUploadClick = () => {
    console.log("Upload CSV clicked");
  };

  const handleAddClick = () => {
    console.log("Add Mentor clicked");
    navigator("/addNewMentor");
  };

  const [activeComponent, setActiveComponent] = useState("Courses (10)");

  const handleClick = (label) => {
    setActiveComponent(label);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Mentors</h2>
        <div className="flex gap-4">
          {" "}
          {/* Add gap for spacing between buttons */}
          <ActionButton
            text="Upload CSV"
            icon={faUpload}
            iconSize="lg"
            onClick={handleUploadClick}
            variant="secondary"
          />
          <ActionButton
            text="Add Mentor"
            icon={faPlus}
            iconSize="lg"
            onClick={handleAddClick}
            variant="primary"
          />
        </div>
      </div>

      <hr className="hr" />
      <div className="mb-2 p-3 bg-gray-100 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <InfoCard title="Total mentors" count={mentorList.totalMentors} />
          <InfoCard title="Active mentors" count={mentorList.activeMentors} />
          <InfoCard
            title="un-active mentors"
            count={mentorList.inactiveMentors}
          />
          <InfoCard
            title="un assigned mentors"
            count={mentorList.unassignedMentors}
          />
        </div>
      </div>

      <div
        className="table-container"
        onClick={() => {
          // navigator("/MentorDashBoard");
        }}
      >
        {console.log("mentorList", mentorList)}
        {mentorList.content && activeComponent === "Courses (10)" && (
          <MentorView info={true} lists={mentorList.content} />
        )}
      </div>
    </div>
  );
};

export default MentorsListComponent;
