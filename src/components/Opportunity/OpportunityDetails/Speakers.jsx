import BlueButton from "../../../reusable components/BlueButton/BlueButton";
import GridListButton from "../../../reusable components/GridListButton/GridListButton";
import HorizontalSteps from "../../../reusable components/HorizontalSteps/HorizontalSteps";
import SearchBar from "../../../reusable components/SearchBar/SearchBar";
import filter from "../../../assets/filter.png";
import { useState } from "react";
import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";
import MentorTable from "../../../reusable components/Mentor-LG-View/MentorTable";
import MentorGrid from "../../../reusable components/Mentor-LG-View/MentorGrid";
import StudentTable from "../../../reusable components/LG-View-Students/StudentTable";

const Speakers = () => {
  const [selectedView, setSelectedView] = useState("grid");
  const Mentors = [
    { id: 1, name: "Abdelahrahman Elshaer", email: "ahmed@gmail.com" },
    { id: 1, name: "Abdelahrahman Elshaer", email: "ahmed@gmail.com" },
    { id: 1, name: "Abdelahrahman Elshaer", email: "ahmed@gmail.com" },
    { id: 1, name: "Abdelahrahman Elshaer", email: "ahmed@gmail.com" },
    { id: 1, name: "Abdelahrahman Elshaer", email: "ahmed@gmail.com" },
    { id: 1, name: "Abdelahrahman Elshaer", email: "ahmed@gmail.com" },
  ];
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 m-3">
        <HorizontalSteps
          steps={[
            "Overview",
            "Speakers",
            "Pricing & Payment methods",
            "Publishing",
          ]}
          currentStep={1}
          title={"Publish Opportunity"}
        />
      </div>
      <div className="col-span-9">
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
              <BlueButton text="Add Speaker" buttonStyle={"w-auto"} />
            </div>
          </div>
          {selectedView === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Mentors.map((course) => (
                <MentorGrid key={course.id} />
              ))}
            </div>
          ) : (
            <StudentTable />
          )}
        </WhiteCard>
      </div>
    </div>
  );
};

export default Speakers;
