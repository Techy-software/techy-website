import React from "react";
import { useState } from "react";
import InfoCard from "../../reusable components/InfoCard/InfoCard";
import { faPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import CoursesList from "../../reusable components/Courses-LG-View/CoursesList";
import ActionButton from "../../reusable components/ActionButton/ActionButton";

const StudentList = () => {
  const handleUploadClick = () => {
    console.log("Upload CSV clicked");
  };

  const handleAddClick = () => {
    console.log("Add Mentor clicked");
  };

  const [activeComponent, setActiveComponent] = useState("Courses (10)");

  const handleClick = (label) => {
    setActiveComponent(label);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Students</h2>
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
            text="Add Stdent"
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
          <InfoCard title="Total studnets" count={130} />
          <InfoCard title="Active studnets" count={100} />
          <InfoCard title="un-active studnets" count={30} />
          <InfoCard title="un assigned studnets" count={13} />
        </div>
      </div>

      <div className="table-container">
        {activeComponent === "Courses (10)" && (
          <CoursesList showButton={false} />
        )}
      </div>
    </div>
  );
};

export default StudentList;