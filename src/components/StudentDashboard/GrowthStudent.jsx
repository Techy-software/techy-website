import filter from "../../assets/filter.png";
import { useState, useMemo } from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import GridListButton from "../../reusable components/GridListButton/GridListButton";
import SearchBar from "../../reusable components/SearchBar/SearchBar";
import PaginatedTable from "../../reusable components/PaginatedTable";
import { get } from "../../utils/HtppService";
import MentorGrid from "../../reusable components/Mentor-LG-View/MentorGrid";
import { useNavigate } from "react-router-dom";

const GrowthStudent = ({ studentId }) => {
  const [selectedView, setSelectedView] = useState("list");
  const navigate = useNavigate();

  const fetchStudents = async () => {
    const response = await get(`/user/profile/growth/${studentId}/`);
    console.log("Growth data:", response);
    return response;
  };

  const columns = useMemo(
    () => [
      {
        Header: "Order ID",
        accessor: "title",
      },
      {
        Header: "School",
        accessor: "school.fullName",
      },
      {
        Header: "Phone",
        accessor: "school.phoneNumber",
      },
    ],
    []
  );

  const renderCard = (row, onRowClick) => {
    const course = row.original;
    return (
      <div
        key={course.id}
        className="p-4 border rounded-lg hover:shadow cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="mt-2 font-bold text-lg">{course.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <img
            src={course.school.profilePicture}
            alt="school"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-gray-600">{course.school.fullName}</span>
        </div>
      </div>
    );
  };

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

        {/* Optional stats section for list view */}
        {selectedView === "grid" && (
          <>
            <hr />
            <div className="grid grid-cols-12 gap-5 mt-2">
              <WhiteCard style={"col-span-3 rounded-lg"}>
                <p className="text-slate-500">Total orders</p>
                <p className="font-bold">30</p>
              </WhiteCard>
              <WhiteCard style={"col-span-3 rounded-lg"}>
                <p className="text-slate-500">Pending orders</p>
                <p className="font-bold">30</p>
              </WhiteCard>
              <WhiteCard style={"col-span-3 rounded-lg"}>
                <p className="text-slate-500">Cancelled orders</p>
                <p className="font-bold">30</p>
              </WhiteCard>
              <WhiteCard style={"col-span-3 rounded-lg"}>
                <p className="text-slate-500">Completed orders</p>
                <p className="font-bold">30</p>
              </WhiteCard>
              <WhiteCard style={"col-span-3 rounded-lg"}>
                <p className="text-slate-500">in-progress orders</p>
                <p className="font-bold">30</p>
              </WhiteCard>
              <WhiteCard style={"col-span-3 rounded-lg"}>
                <p className="text-slate-500">in-cart orders</p>
                <p className="font-bold">13</p>
              </WhiteCard>
            </div>
            <br />
            <hr />
          </>
        )}

        {/* Unified Paginated Table/Grid */}
        <PaginatedTable
          columns={columns}
          dataFetcher={fetchStudents}
          searchKeys={["title", "school.fullName", "school.phoneNumber"]}
          renderRowCard={renderCard}
          //   onRowClick={(row) =>
          //     navigate("/StudentDashBoard", {
          //       state: { student: row.original },
          //     })
          //   }
          isGridView={selectedView === "grid" ? true : false}
          defaultPageSize={6}
        />
      </WhiteCard>
    </>
  );
};

export default GrowthStudent;
