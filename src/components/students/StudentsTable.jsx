import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import {
  FaSortUp,
  FaSortDown,
  FaSort,
  FaTh,
  FaList,
  FaEdit,
} from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { get } from "../../utils/HtppService";

const StudentsTable = () => {
  const navigator = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridView, setIsGridView] = useState(false);
  const [studentsData, setStudentsData] = useState([]);
  const [pageData, setPageData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await get("/school/students/all/?pageNo=0&pageSize=10");
      console.log("studentsDataaaaaaaa", response);
      setStudentsData(response.content);
    } catch (error) {
      console.error("Error fetching students data:", error);
    }

    try {
      const response = await get("/school/students/overview/");
      setPageData(response);
    } catch (error) {
      console.error("Error fetching page data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("studentsData", studentsData);

  // if (!studentsData) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="loader"></div>
  //       <style jsx>{`
  //         .loader {
  //           border: 8px solid #f3f3f3;
  //           border-top: 8px solid #3498db;
  //           border-radius: 50%;
  //           width: 60px;
  //           height: 60px;
  //           animation: spin 2s linear infinite;
  //         }
  //         @keyframes spin {
  //           0% {
  //             transform: rotate(0deg);
  //           }
  //           100% {
  //             transform: rotate(360deg);
  //           }
  //         }
  //       `}</style>
  //     </div>
  //   );
  // }

  const filteredData = useMemo(() => {
    console.log("studentsData", studentsData);
    return studentsData.filter(
      (student) =>
        student.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.phoneNumber?.includes(searchQuery)
    );
  }, [searchQuery, studentsData]);

  const columns = useMemo(
    () => [
      // {
      //   Header: "Profile",
      //   accessor: "profilePicture",
      //   Cell: ({ value }) => (
      //     <div className="relative w-10 h-10 bg-gray-200 rounded-full overflow-hidden border border-white">
      //       <img
      //         src={value || "/default-profile-pic.jpg"} // Fallback image if URL is not available
      //         alt={value}
      //         className="w-full h-full object-cover"
      //       />
      //     </div>
      //   ),
      // },
      {
        Header: "Student",
        accessor: "fullName",
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ value }) => (
          <span className="text-gray-600">{value || "N/A"}</span>
        ),
      },
      {
        Header: "Mobile number",
        accessor: "phoneNumber",
      },
      {
        Header: "Gender",
        accessor: "gender",
        Cell: ({ value }) => (
          <span className="text-gray-600">
            {value === 1 ? <>Male</> : <>Female</>}
          </span>
        ),
      },
      {
        Header: "Status",
        accessor: "isActive",
        Cell: ({ value }) => {
          let statusClass = "";
          if (value) {
            statusClass = "bg-green-100 text-green-800";
          } else {
            statusClass = "bg-orange-100 text-orange-800";
          }
          return (
            <span className={`px-2 py-1 rounded-full text-sm ${statusClass}`}>
              {value ? "Active" : "Inactive"}
            </span>
          );
        },
      },
      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <button
            onClick={() => {
              navigator("/StudentDashBoard", {
                state: { student: row.original },
              });
            }}
            className="text-blue-500 hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faEllipsis} style={{ color: "#016BDD" }} />
          </button>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({ columns, data: filteredData }, useSortBy);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(0); // Reset to the first page
  };

  const handleSearchChange = (event) => {
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
          <button
            className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded hover:bg-blue-600"
            onClick={() => navigator("/addStudent")}
          >
            Add Student
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded">
          <span>Total Students</span>
          <p className="text-xl font-bold">{pageData.totalStudents}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <span>Active Students</span>
          <p className="text-xl font-bold">{pageData.activeStudents}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <span>Un-active Students</span>
          <p className="text-xl font-bold">{pageData.unActiveStudents}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <span>Un-assigned Students</span>
          <p className="text-xl font-bold">{pageData.unassignedStudents}</p>
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
            console.log("row", row);
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
                      row.original.profilePicture || "/default-profile-pic.jpg"
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
                    console.log("cell", cell);
                    if (
                      cell.column.id === "phoneNumber" ||
                      cell.column.id === "actions"
                    )
                      return null; // Skip mobile number in grid view
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
