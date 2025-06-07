import filter from "../../assets/filter.png";
import { useState } from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import GridListButton from "../../reusable components/GridListButton/GridListButton";
import SearchBar from "../../reusable components/SearchBar/SearchBar";
import MentorGrid from "../../reusable components/Mentor-LG-View/MentorGrid";
import StudentTable from "../../reusable components/LG-View-Students/StudentTable";

const Students = () => {
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
          </div>
        </div>
        {selectedView === "list" && (
          <>
            <hr />
            <div className="grid grid-cols-12 gap-5 mt-2">
              <WhiteCard style={"col-span-4 rounded-lg"}>
                <p className="text-slate-500">
                  Learners copmleted before deadline
                </p>
                <p className="font-bold">30</p>
              </WhiteCard>
              <WhiteCard style={"col-span-4 rounded-lg"}>
                <p className="text-slate-500">Learners Paswsed the deadline</p>
                <p className="font-bold">13</p>
              </WhiteCard>
            </div>
            <br />
            <hr />
          </>
        )}
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
    </>
  );
};

export default Students;
