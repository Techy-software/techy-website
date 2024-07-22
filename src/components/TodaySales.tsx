import React from "react";

const TodaySales = () => {
  return (
    <div className="bg-white p-6 shadow rounded">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold">Today's Sales</h2>
          <p className="text-sm text-gray-600">Subtitle</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Export
        </button>
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-red-500 text-white p-4 rounded opacity-70 flex flex-col">
          <div className="mb-2">
            <i className="fas fa-chart-line fa-2x"></i> {/* Replace with actual icon */}
          </div>
          <div className="text-xl mb-2">123</div>
          <div className="text-sm mb-2">Sales Count</div>
          <div className="text-xs">8% from yesterday</div>
        </div>

        {/* Card 2 */}
        <div className="bg-orange-500 text-white p-4 rounded opacity-70 flex flex-col">
          <div className="mb-2">
            <i className="fas fa-cogs fa-2x"></i> {/* Replace with actual icon */}
          </div>
          <div className="text-xl mb-2">456</div>
          <div className="text-sm mb-2">Orders Processed</div>
          <div className="text-xs">5% from yesterday</div>
        </div>

        {/* Card 3 */}
        <div className="bg-green-500 text-white p-4 rounded opacity-70 flex flex-col">
          <div className="mb-2">
            <i className="fas fa-dollar-sign fa-2x"></i>
          </div>
          <div className="text-xl mb-2">$789</div>
          <div className="text-sm mb-2">Revenue</div>
          <div className="text-xs">10% from yesterday</div>
        </div>

        {/* Card 4 */}
        <div className="bg-purple-500 text-white p-4 rounded opacity-70 flex flex-col">
          <div className="mb-2">
            <i className="fas fa-users fa-2x"></i> {/* Replace with actual icon */}
          </div>
          <div className="text-xl mb-2">321</div>
          <div className="text-sm mb-2">New Users</div>
          <div className="text-xs">12% from yesterday</div>
        </div>
      </div>
    </div>
  );
};

export default TodaySales;
