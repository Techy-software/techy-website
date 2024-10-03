import BlueButton from "../BlueButton/BlueButton";
import GridListButton from "../GridListButton/GridListButton";
import WhiteCard from "../WhiteCard/WhiteCard";
import filter from "../../assets/filter.png";
import CourseGrid from "./CourseGrid";
import { TextField } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import CourseTable from "./CourseTable";
import { useState } from "react";

const CoursesList = () => {
  const [selectedView, setSelectedView] = useState("grid");

  const courses = [
    { id: 1, title: "The Designed to STEAM Online Class", lessons: 2 },
    { id: 2, title: "Introduction to Programming", lessons: 5 },
    { id: 3, title: "Advanced Math for Engineers", lessons: 8 },
    { id: 4, title: "React Native Basics", lessons: 3 },
    { id: 5, title: "Front-end Development with React", lessons: 6 },
    { id: 6, title: "Data Structures and Algorithms", lessons: 10 },
  ];

  return (
    <>
      <WhiteCard>
        <div className="flex justify-between items-center mb-4">
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
            <BlueButton text="Create new course" buttonStyle={"w-auto"} />
          </div>
        </div>

        {selectedView === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseGrid key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <CourseTable courses={courses} />
        )}
      </WhiteCard>
    </>
  );
};

export default CoursesList;
