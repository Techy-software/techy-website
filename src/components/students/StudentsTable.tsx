import {
  studentsData,
  Student,
} from "/Users/alihaggag/Documents/GitHub/techy-website/src/data/data.ts";
import React, { useMemo, useState } from "react";
import { FaSortUp, FaSortDown, FaSort, FaTh, FaList } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useTable, useSortBy } from "react-table";

interface Props {}

const StudentsTable: React.FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridView, setIsGridView] = useState(false);

  const filteredData = useMemo(() => {
    return studentsData.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.mobileNumber.includes(searchQuery)
    );
  }, [searchQuery]);

  const columns = useMemo(
    () => [
      {
        Header: "Student",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Mobile number",
        accessor: "mobileNumber",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable<Student>({ columns, data: filteredData }, useSortBy);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(0); // Reset to the first page
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
  };

  const paginatedRows = rows.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Students</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white text-blue-500 border border-gray-200 rounded hover:bg-gray-100">
            Upload CSV
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded hover:bg-blue-600">
            Add Student
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded">
          <span>Total Students</span>
          <p className="text-xl font-bold">130</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <span>Active Students</span>
          <p className="text-xl font-bold">100</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <span>Un-active Students</span>
          <p className="text-xl font-bold">30</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <span>Un-assigned Students</span>
          <p className="text-xl font-bold">13</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded w-1/2"
        />
        <div className="flex space-x-2">
          <button
            onClick={handleViewToggle}
            className={`px-4 py-2 rounded ${
              isGridView
                ? "bg-gray-300"
                : "bg-white text-blue-500 border border-gray-200"
            } hover:bg-gray-100`}
          >
            <FaTh />
          </button>
          <button
            onClick={handleViewToggle}
            className={`px-4 py-2 rounded ${
              !isGridView
                ? "bg-gray-300"
                : "bg-white text-blue-500 border border-gray-200"
            } hover:bg-gray-100`}
          >
            <FaList />
          </button>
        </div>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedRows.map((row) => {
            prepareRow(row);
            return (
              <div
                key={row.id}
                className="relative p-4 border rounded-lg shadow-sm flex flex-col items-center text-center"
              >
                {/* Profile Picture */}
                <div className="relative w-20 h-20 bg-gray-200 rounded-full overflow-hidden border border-white">
                  <img
                    src={
                      row.original.profilePicUrl || "/default-profile-pic.jpg"
                    } // Fallback image if URL is not available
                    alt={row.original.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Status Badge */}
                <div
                  className={`absolute top-2 right-2 px-2 py-1 rounded-full text-sm ${
                    row.original.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : row.original.status === "Disabled"
                      ? "bg-red-100 text-red-800"
                      : row.original.status === "Draft"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {row.original.status}
                </div>

                {/* Card Contents */}
                <div className="mt-16">
                  {row.cells.map((cell) => {
                    if (cell.column.id === "mobileNumber") return null; // Skip mobile number in grid view
                    return (
                      <div key={cell.column.id} className="mb-2">
                        <strong>{cell.column.Header}:</strong>{" "}
                        {cell.render("Cell")}
                      </div>
                    );
                  })}
                </div>

                {/* View Profile Button */}
                <button
                  className="mt-4 px-4 py-2 bg-white text-blue-500 border border-gray-200 rounded hover:bg-gray-100"
                  onClick={() =>
                    alert(`Viewing profile of ${row.original.name}`)
                  } // Handle profile view action
                >
                  View Profile
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table {...getTableProps()} className="min-w-full bg-white">
            <thead className="bg-gray-100">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-6 py-3 text-left text-sm font-medium text-gray-900"
                    >
                      <div className="flex items-center">
                        {column.render("Header")}
                        <span className="ml-2">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FaSortDown />
                            ) : (
                              <FaSortUp />
                            )
                          ) : (
                            <FaSort />
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="divide-y divide-gray-200"
            >
              {paginatedRows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="even:bg-gray-50">
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Show
          <select
            className="mx-2 p-1 border rounded"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
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
            "px-3 py-1 rounded border bg-white text-blue-500 border-gray-200 hover:bg-gray-100"
          }
          activeClassName={"bg-blue-500 text-white"}
          disabledClassName={"bg-gray-200 text-gray-400 cursor-not-allowed"}
        />
      </div>
    </div>
  );
};

export default StudentsTable;
