import filter from "../../assets/filter.png";
import { useState, useMemo, useEffect } from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import GridListButton from "../../reusable components/GridListButton/GridListButton";
import SearchBar from "../../reusable components/SearchBar/SearchBar";
import PaginatedTable from "../../reusable components/PaginatedTable";
import { get } from "../../utils/HtppService";
import MentorGrid from "../../reusable components/Mentor-LG-View/MentorGrid";
import { useNavigate } from "react-router-dom";

const OpportunityStudent = ({ studentId }) => {
  const [selectedView, setSelectedView] = useState("list");
  const [opportunityData, setOpportunityData] = useState({});
  const navigate = useNavigate();

  const fetchOpportunites = async () => {
    const response = await get(`/school/students/${studentId}/opportunity/`);
    setOpportunityData(response);
  };

  useEffect(() => {
    fetchOpportunites();
  }, []);

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
        {console.log(selectedView)}

        <>
          <hr />
          <div className="grid grid-cols-12 gap-5 mt-2">
            <WhiteCard style={"col-span-3 rounded-lg"}>
              <p className="text-slate-500">Applied</p>
              <p className="font-bold">{opportunityData.applied}</p>
            </WhiteCard>
            <WhiteCard style={"col-span-3 rounded-lg"}>
              <p className="text-slate-500">Saved</p>
              <p className="font-bold">{opportunityData.saved}</p>
            </WhiteCard>
          </div>
          <br />
          <hr />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {opportunityData?.opportunities?.map((item) => {
              const opp = item.opportunity;

              return (
                <div
                  key={opp.id}
                  className="max-w-s rounded-xl overflow-hidden shadow-lg border border-gray-200"
                  onClick={() => onClick(opp)}
                >
                  <img
                    src={opp.thumbnail}
                    alt="Course Image"
                    className="w-full h-40 object-cover"
                  />
                  <div>
                    <div className="flex items-center mb-2 px-4 py-1 bg-slate-600">
                      <span className="text-white ml-1">
                        Age {opp.ageRange}
                      </span>
                      <div className="ml-auto text-gray-600 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></div>
                        <span className="text-white text-sm">
                          {opp.location || "N/A"}
                        </span>
                      </div>
                    </div>
                    <div className="pb-4 px-4">
                      <h2 className="font-semibold text-gray-800">
                        {opp.title}
                      </h2>
                      <p className="text-gray-600 mt-1">{opp.startDate}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </WhiteCard>
    </>
  );
};

export default OpportunityStudent;
