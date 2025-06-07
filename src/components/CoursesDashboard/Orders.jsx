import filter from "../../assets/filter.png";
import { useState } from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import GridListButton from "../../reusable components/GridListButton/GridListButton";
import SearchBar from "../../reusable components/SearchBar/SearchBar";
import OrderTable from "../../reusable components/LG-View-Orders/OrderTable";
import OrderGrid from "../../reusable components/LG-View-Orders/OrderGrid";

const Orders = () => {
  const [selectedView, setSelectedView] = useState("grid");
  const orders = [
    {
      id: 1,
      name: "The Designed to STEAM Online Class",
      lessons: 12,
      level: "Beginner",
      rate: "4 Stars",
      uploadedBy: "Techy Acader",
      lastUpdated: "12 Dec, 2023",
      lastUpdatedTime: "10:00 AM",
      status: "Draft",
      statusGrid: "Learn",
      price: "120 EGP",
    },
    {
      id: 2,
      name: "The Designed to STEAM Online Class",
      lessons: 23,
      level: "Beginner",
      rate: "4 Stars",
      uploadedBy: "Techy Acader",
      lastUpdated: "12 Dec, 2023",
      lastUpdatedTime: "10:00 AM",
      status: "Active",
      statusGrid: "Cancelled",
      price: "120 EGP",
    },
    {
      id: 3,
      name: "The Designed to STEAM Online Class",
      lessons: 63,
      level: "Beginner",
      rate: "4 Stars",
      uploadedBy: "Techy Acader",
      lastUpdated: "12 Dec, 2023",
      lastUpdatedTime: "10:00 AM",
      status: "Disabled",
      statusGrid: "Ordered",
      price: "120 EGP",
    },
    {
      id: 4,
      name: "The Designed to STEAM Online Class",
      lessons: 14,
      level: "Beginner",
      rate: "4 Stars",
      uploadedBy: "Techy Acader",
      lastUpdated: "12 Dec, 2023",
      lastUpdatedTime: "10:00 AM",
      status: "Disabled",
      statusGrid: "Paid",
      price: "120 EGP",
    },
    {
      id: 5,
      name: "The Designed to STEAM Online Class",
      lessons: 5,
      level: "Beginner",
      rate: "4 Stars",
      uploadedBy: "Techy Acader",
      lastUpdated: "12 Dec, 2023",
      lastUpdatedTime: "10:00 AM",
      status: "Draft",
      statusGrid: "Learn",
      price: "120 EGP",
    },
    {
      id: 6,
      name: "The Designed to STEAM Online Class",
      lessons: 21,
      level: "Beginner",
      rate: "4 Stars",
      uploadedBy: "Techy Acader",
      lastUpdated: "12 Dec, 2023",
      lastUpdatedTime: "10:00 AM",
      status: "Active",
      statusGrid: "Confirmed",
      price: "120 EGP",
    },
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
          <div>
            {orders.map((order) => (
              <OrderGrid key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <OrderTable />
        )}
      </WhiteCard>
    </>
  );
};

export default Orders;
