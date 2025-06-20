import BlueButton from "../BlueButton/BlueButton";
import GridListButton from "../GridListButton/GridListButton";
import WhiteCard from "../WhiteCard/WhiteCard";
import filter from "../../assets/filter.png";
import { TextField } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import MentorTable from "./MentorTable";
import MentorGrid from "./MentorGrid";

const MentorView = ({ lists, info = false, myOnClick, OptionsButton }) => {
  const [selectedView, setSelectedView] = useState("grid");
  console.log("lists", lists);
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
            {lists.map((course) => (
              <MentorGrid
                key={course.id}
                mentor={course}
                OptionsButton={OptionsButton}
              />
            ))}
          </div>
        ) : (
          <MentorTable lists={lists} info={info} OptionsButton={OptionsButton} />
        )}
      </WhiteCard>
    </>
  );
};

export default MentorView;
