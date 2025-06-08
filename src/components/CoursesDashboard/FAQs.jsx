import react from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const FAQs = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Label",
        data: [1200, 100],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)", // Blue
          "rgba(249, 115, 22, 0.8)", // Orange
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 159, 64, 1)", // Orange
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <WhiteCard title="Overview" style={"mb-4 pt-1 pt-5"}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <h2 className="text-lg font-bold mt-4">Revenues</h2>
            <WhiteCard style={"mt-2.5"}>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 flex justify-center items-center">
                  <Doughnut data={data} />
                </div>
                <div className="col-span-5 flex flex-col justify-center items-start ml-5">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-blue-500 mr-2 rounded-sm"></div>
                    <div>
                      <p className="text-slate-400 text-sm">Academy Earnings</p>
                      <p className="font-bold">1,200.00 EGP</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 mr-2 rounded-sm"></div>
                    <div>
                      <p className="text-slate-400 text-sm">
                        Techy's Commission
                      </p>
                      <p className="font-bold">100.00 EGP</p>
                    </div>
                  </div>
                </div>
              </div>
            </WhiteCard>
          </div>
          <div className="col-span-6">
            <h2 className="text-lg font-bold mt-4">Insights</h2>
            <div className="grid grid-cols-12 gap-6 mt-2">
              <WhiteCard style={"col-span-6 rounded-xl"}>
                <p className="text-slate-300">N. Bookings</p>
                <p className="text-bold">13</p>
              </WhiteCard>
              <WhiteCard style={"col-span-6 rounded-xl"}>
                <p className="text-slate-300">N. Orders</p>
                <p className="text-bold">1,300</p>
              </WhiteCard>
              <WhiteCard style={"col-span-6 rounded-xl"}>
                <p className="text-slate-300">Views</p>
                <p className="text-bold">100</p>
              </WhiteCard>
              <WhiteCard style={"col-span-6 rounded-xl"}>
                <p className="text-slate-300">confirmed orders</p>
                <p className="text-bold">100</p>
              </WhiteCard>
              <WhiteCard style={"col-span-6 rounded-xl"}>
                <p className="text-slate-300">rejected orders</p>
                <p className="text-bold">100</p>
              </WhiteCard>
            </div>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};

export default FAQs;
