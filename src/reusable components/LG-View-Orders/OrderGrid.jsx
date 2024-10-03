const OrderGrid = ({ order }) => {
  return (
    <div className="bg-slate-50 rounded-xl flex justify-between p-2 my-4">
      <div className="">
        <p className="font-semibold">#456880</p>
        <p className="text-slate-500 text-sm">16 Feb 2022</p>
      </div>
      <div className="flex gap-4 items-center">
        <div
          className={`py-1  px-3 rounded-md text-sm ${
            order.statusGrid === "Learn"
              ? "bg-green-100 text-green-600"
              : order.statusGrid === "Cancelled"
              ? "bg-red-100 text-red-600"
              : order.statusGrid === "Confirmed"
              ? "bg-blue-100 text-blue-600"
              : order.statusGrid === "Paid"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {order.statusGrid}
        </div>
        <span className="text-slate-500">&gt;</span>
      </div>
    </div>
  );
};

export default OrderGrid;
