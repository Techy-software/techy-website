import BlueButton from "../BlueButton/BlueButton";
import GridListButton from "../GridListButton/GridListButton";
import WhiteCard from "../WhiteCard/WhiteCard";
import filter from "../../assets/filter.png";
import { TextField } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import MentorTable from "./MentorTable";
import MentorGrid from "./MentorGrid";

const MentorView = () => {
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
            <BlueButton text="New Mentors" buttonStyle={"w-auto"} />
          </div>
        </div>

        {selectedView === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Mentors.map((course) => (
              <MentorGrid key={course.id} />
            ))}
          </div>
        ) : (
          <MentorTable />
        )}
      </WhiteCard>
    </>
  );
};

export default MentorView;
