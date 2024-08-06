import React from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import PersonalPicture from "../../assets/PersonalPicture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Install recharts or apexcharts to find a suitable bar chart options
// install gauge chart or React speedometer for the circular chart

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

// Custom plugin for rounded bars
const roundedBarPlugin = {
  id: "roundedBar",
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    const borderRadius = 15;
    ctx.save();
    chart.getDatasetMeta(0).data.forEach((bar, index) => {
      const model = bar.$context.raw;
      const height = Math.abs(bar.y - bar.base);
      const y = bar.y - height;
      const x = bar.x - bar.width / 2;
      const width = bar.width;
      ctx.beginPath();
      ctx.fillStyle = chart.data.datasets[0].backgroundColor[index];
      ctx.moveTo(x + borderRadius, y);
      ctx.lineTo(x + width - borderRadius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
      ctx.lineTo(x + width, y + height - borderRadius);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - borderRadius,
        y + height
      );
      ctx.lineTo(x + borderRadius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
      ctx.lineTo(x, y + borderRadius);
      ctx.quadraticCurveTo(x, y, x + borderRadius, y);
      ctx.closePath();
      ctx.fill();
    });
    ctx.restore();
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "",
      data: [20, 18, 25, 30, 28, 35, 40, 45, 42, 50, 47, 55], // Bottom part values
      backgroundColor: "rgba(255, 144, 83, 1)", // Faded orange
      borderColor: "#FF9053",
      borderWidth: 1,
    },
    {
      label: "Top Part",
      data: [30, 27, 35, 40, 37, 40, 40, 45, 43, 50, 48, 55], // Top part values
      backgroundColor: "rgba(248, 239, 226, 1)", // Faded grey
      borderColor: "rgba(248, 239, 226, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    roundedBar: roundedBarPlugin,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
};

const OverviewMentor = () => {
  return (
    <WhiteCard title="Overview">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <h2 className="text-lg font-bold mt-4">Hours Spent</h2>
          <WhiteCard style={"mt-2.5"}>
            <Bar data={data} options={options} />
            <div className="col-span-7 flex justify-center items-center"></div>
            <div className="col-span-5 flex flex-col justify-center items-start ml-5">
              <div className="flex items-center mb-2"></div>
            </div>
          </WhiteCard>
        </div>
        <div className="col-span-6"></div>
      </div>
    </WhiteCard>
  );
};

export default OverviewMentor;
