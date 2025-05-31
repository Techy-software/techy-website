import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const PaginatedTable = ({
  columns,
  dataFetcher,
  searchKeys = [],
  defaultPageSize = 6,
  renderRowCard,
  onRowClick,
  customStats,
  customHeader,
  isGridView,
}) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    try {
      const response = await dataFetcher();
      setData(response?.content || response || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      searchKeys.some((key) =>
        item[key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery, searchKeys]);

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({ columns, data: filteredData }, useSortBy);

  const paginatedRows = rows.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {customHeader && customHeader}
      {customStats && <div className="mb-4">{customStats}</div>}

      <div className="flex justify-between items-center mb-4">
        <input
          className="px-4 py-2 border rounded w-1/2"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {isGridView && renderRowCard ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedRows.map((row) => {
            prepareRow(row);
            return renderRowCard(row, onRowClick);
          })}
        </div>
      ) : (
        <div className="overflow-x-auto">
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
                  <tr {...row.getRowProps()} onClick={() => onRowClick?.(row)}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="px-6 py-4">
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
        <div className="text-sm">
          Show{" "}
          <select
            className="mx-2 p-1 border rounded"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(0);
            }}
          >
            {[6, 12, 18].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>{" "}
          entries
        </div>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName="inline-flex space-x-1"
          activeClassName="bg-blue-500 text-white"
          pageClassName="px-3 py-1 border rounded"
          previousLabel="<"
          nextLabel=">"
        />
      </div>
    </div>
  );
};

export default PaginatedTable;
