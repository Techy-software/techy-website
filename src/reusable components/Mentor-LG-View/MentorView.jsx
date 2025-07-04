import React, { useMemo, useState } from "react";
import WhiteCard from "../WhiteCard/WhiteCard";
import { FaTh, FaList } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import MentorTable from "./MentorTable";
import MentorGrid from "./MentorGrid";
import BlueButton from "../BlueButton/BlueButton";

const MentorView = ({ lists, info = false, myOnClick, OptionsButton }) => {
  const [selectedView, setSelectedView] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const filteredData = useMemo(() => {
    return lists.filter(
      (mentor) =>
        mentor.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.phoneNumber?.includes(searchQuery)
    );
  }, [lists, searchQuery]);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage, itemsPerPage]);

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <WhiteCard>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search mentors..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(0);
          }}
          className="px-4 py-2 border rounded w-1/2"
        />

        <div className="flex items-center gap-4">
          <button
            onClick={() => setSelectedView("grid")}
            className={`px-3 py-2 rounded ${
              selectedView === "grid"
                ? "bg-gray-300"
                : "bg-white text-blue-500 border border-gray-200"
            } hover:bg-gray-100`}
          >
            <FaTh />
          </button>
          <button
            onClick={() => setSelectedView("list")}
            className={`px-3 py-2 rounded ${
              selectedView === "list"
                ? "bg-gray-300"
                : "bg-white text-blue-500 border border-gray-200"
            } hover:bg-gray-100`}
          >
            <FaList />
          </button>
        </div>
      </div>

      {selectedView === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paginatedData.map((mentor) => (
            <MentorGrid
              key={mentor.id}
              mentor={mentor}
              OptionsButton={OptionsButton}
            />
          ))}
        </div>
      ) : (
        <MentorTable
          lists={paginatedData}
          info={info}
          OptionsButton={OptionsButton}
        />
      )}

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Show
          <select
            className="mx-2 p-1 border rounded"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(0);
            }}
          >
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
          entries
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"inline-flex items-center space-x-2"}
          pageClassName={
            "px-3 py-1 rounded border bg-white text-black border-gray-200 hover:bg-blue-100 hover:text-black"
          }
          previousClassName={
            "px-3 py-1 rounded border bg-white text-blue-500 border-gray-200 hover:bg-gray-100"
          }
          nextClassName={
            "px-3 py-1 rounded border bg-white text-blue-500 border border-gray-200 hover:bg-gray-100"
          }
          activeClassName={"bg-blue-500 text-white"}
          disabledClassName={"bg-gray-200 text-gray-400 cursor-not-allowed"}
        />
      </div>
    </WhiteCard>
  );
};

export default MentorView;
