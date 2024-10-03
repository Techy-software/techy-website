import OrderRow from "./OrderRow";

const OrderTable = () => {
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
      price: "120 EGP",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-blue-50">
          <tr>
            <th className="py-3 px-1 text-left font-normal text-gray-600 text-xs">
              Course ID
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              Level
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              Total price
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              Publisher by
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              Date
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              Status
            </th>
            <th className="py-3 px-2 text-center font-normal text-gray-600 text-xs">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <span>Show</span>
          <select className="border rounded-md px-2 py-1 text-gray-400">
            <option>6</option>
            <option>12</option>
            <option>24</option>
          </select>
        </div>
        <div className="flex items-center space-x-8">
          <button className="text-gray-400">&lt;</button>
          <button className="px-3 py-1 rounded bg-blue-500 text-white">
            1
          </button>
          <button className="">2</button>
          <button className="">3</button>
          <button className="">4</button>
          <span>...</span>
          <button className="">7</button>
          <button className="text-gray-400">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
