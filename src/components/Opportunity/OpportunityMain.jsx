import GridListButton from "../../reusable components/GridListButton/GridListButton";
import HorizontalManagment from "../../reusable components/HorizontalMangment/HorizontalManagment";
import SearchBar from "../../reusable components/SearchBar/SearchBar";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import filter from "../../assets/filter.png";
import { useState } from "react";
import CourseGrid from "../../reusable components/Courses-LG-View/CourseGrid";
import CoursesTable from "../../reusable components/Courses-LG-View/CourseTable";
import MentorTable from "../../reusable components/Mentor-LG-View/MentorTable";
import StudentTable from "../../reusable components/LG-View-Students/StudentTable";
import OppGrid from "./OppGrid";
import { useNavigate } from "react-router-dom";

const OpportunityMain = () => {
  const navigator = useNavigate();
  const [selectedView, setSelectedView] = useState("grid");
  const courses = [
    { id: 1, title: "The Designed to STEAM Online Class", lessons: 2 },
    { id: 2, title: "Introduction to Programming", lessons: 5 },
    { id: 3, title: "Advanced Math for Engineers", lessons: 8 },
  ];
  return (
    <div>
      <div className="sticky top-0 flex justify-between items-center bg-white p-6 shadow pb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">Opportunities</h1>
        </div>
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-10 py-2 rounded w-100 "
            onClick={() => {
              navigator("/opportunityDetails");
            }}
          >
            Add Opportunity
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 m-3">
          <HorizontalManagment
            steps={[
              "Events",
              "Scholarship",
              "Internship",
              "Trips",
              "Hackathons",
            ]}
            currentStep={0}
          />
        </div>
        <WhiteCard
          title={"Events"}
          style={"col-span-9 m-3"}
          titleStyle={"font-bold"}
        >
          <div className="flex justify-between items-center mb-4 p-3">
            <div className="flex justify-between items-center gap-5">
              <SearchBar />
              <div className="cursor-pointer">
                <img src={filter} alt="Filter" />
              </div>
            </div>
            <div className="flex items-center gap-8">
              <GridListButton
                selected={selectedView}
                setSelected={setSelectedView}
              />
            </div>
          </div>
          {selectedView === "grid" ? (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              onClick={() => {
                navigator("/opportunityView");
              }}
            >
              {courses.map((course) => (
                <OppGrid key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div
              onClick={() => {
                navigator("/opportunityView");
              }}
            >
              <StudentTable courses={courses} />
            </div>
          )}
        </WhiteCard>
      </div>
    </div>
  );
};

export default OpportunityMain;
