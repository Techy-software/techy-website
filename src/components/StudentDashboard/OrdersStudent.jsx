import filter from "../../assets/filter.png";
import { useState, useMemo } from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import GridListButton from "../../reusable components/GridListButton/GridListButton";
import SearchBar from "../../reusable components/SearchBar/SearchBar";
import PaginatedTable from "../../reusable components/PaginatedTable";
import { get } from "../../utils/HtppService";
import MentorGrid from "../../reusable components/Mentor-LG-View/MentorGrid";
import { useNavigate } from "react-router-dom";

const OrderStudent = ({ studentId }) => {
  const [selectedView, setSelectedView] = useState("list");
  const [ordersData, setOrdersData] = useState({});
  const navigate = useNavigate();

  const fetchOrders = async () => {
    const response = await get(`/school/students/${studentId}/orders/`);
    const data = response.data;

    setOrdersData(response);
    if (!data?.orders) return [];
    const courses = [];

    data.orders.forEach((order) => {
      order.orderItems.forEach((item) => {
        courses.push({
          ...item.course,
          orderId: order.id,
          orderNo: order.orderNo,
          dateCreated: order.dateCreated,
          orderStatusType: order.orderStatusType,
          price: item.price,
          totalPoints: item.totalPoints,
        });
      });
    });

    return courses;
  };

  const columns = useMemo(
    () => [
      {
        Header: "Course Title",
        accessor: "title",
      },
      {
        Header: "Order No",
        accessor: "orderNo",
      },
      {
        Header: "Status",
        accessor: "orderStatusType",
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: ({ value }) => `$${value?.toFixed(2)}`,
      },
      {
        Header: "Points",
        accessor: "totalPoints",
      },
      {
        Header: "School",
        accessor: "school.fullName",
      },
    ],
    []
  );

  const renderCard = (row, onRowClick) => {
    const course = row.original;

    return (
      <div
        key={course.id + course.orderId}
        className="p-4 border rounded-lg hover:shadow cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="mt-2 font-bold text-lg">{course.title}</h3>
        <p className="text-sm text-gray-600">
          Order #{course.orderNo} • {course.orderStatusType}
        </p>
        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>Price: ${course.price?.toFixed(2)}</span>
          <span>Points: {course.totalPoints}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          {course.school?.profilePicture ? (
            <img
              src={course.school.profilePicture}
              alt="school"
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          )}
          <span className="text-gray-700 text-sm">
            {course.school?.fullName}
          </span>
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
        <>
          <hr />
          <div className="grid grid-cols-12 gap-5 mt-2">
            <WhiteCard style={"col-span-3 rounded-lg"}>
              <p className="text-slate-500">Total orders</p>
              <p className="font-bold">{ordersData.totalOrders}</p>
            </WhiteCard>
            <WhiteCard style={"col-span-3 rounded-lg"}>
              <p className="text-slate-500">Pending orders</p>
              <p className="font-bold">30???</p>
            </WhiteCard>
            <WhiteCard style={"col-span-3 rounded-lg"}>
              <p className="text-slate-500">Cancelled orders</p>
              <p className="font-bold">{ordersData.cancelledOrders}</p>
            </WhiteCard>
            <WhiteCard style={"col-span-3 rounded-lg"}>
              <p className="text-slate-500">Completed orders</p>
              <p className="font-bold">{ordersData.completedOrders}</p>
            </WhiteCard>
            <WhiteCard style={"col-span-3 rounded-lg"}>
              <p className="text-slate-500">in-progress orders</p>
              <p className="font-bold">{ordersData.inProgressOrders}</p>
            </WhiteCard>
            <WhiteCard style={"col-span-3 rounded-lg"}>
              <p className="text-slate-500">in-cart orders</p>
              <p className="font-bold">13???</p>
            </WhiteCard>
          </div>
          <br />
          <hr />
        </>
        {/* Unified Paginated Table/Grid */}
        <PaginatedTable
          columns={columns}
          dataFetcher={fetchOrders}
          searchKeys={["title", "school.fullName", "orderStatusType"]}
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

export default OrderStudent;
