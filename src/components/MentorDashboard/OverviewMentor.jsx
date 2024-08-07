import React from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import PersonalPicture from "../../assets/PersonalPicture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Install recharts or apexcharts to find a suitable bar chart options
// install gauge chart or React speedometer for the circular chart
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Study: 20, Exams: 30 },
  { name: "Feb", Study: 7, Exams: 9 },
  { name: "Mar", Study: 25, Exams: 35 },
  { name: "Apr", Study: 30, Exams: 40 },
  { name: "May", Study: 8, Exams: 17 },
  // { name: "Jun", BottomPart: 35, TopPart: 40 },
  // { name: "Jul", BottomPart: 40, TopPart: 40 },
  // { name: "Aug", BottomPart: 45, TopPart: 45 },
  // { name: "Sep", BottomPart: 42, TopPart: 43 },
  // { name: "Oct", BottomPart: 50, TopPart: 50 },
  // { name: "Nov", BottomPart: 47, TopPart: 48 },
  // { name: "Dec", BottomPart: 55, TopPart: 55 },
];

const OverviewMentor = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#1F1C3B",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <div className="flex justify-cetner items-center">
            <div className="w-3 h-3 bg-orange-400 mr-2 rounded-sm"></div>
            <p
              className="label"
              style={{ margin: 0, color: "#FF9053" }}
            >{`Study: ${payload[0].value}`}</p>
          </div>
          <div className="flex justify-cetner items-center">
            <div className="w-3 h-3 bg-orange-100 mr-2 rounded-sm"></div>
            <p
              className="label"
              style={{ margin: 0, color: "#F8EFE2" }}
            >{`Exams: ${payload[1].value}`}</p>
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <WhiteCard title="Overview">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <h2 className="text-lg font-bold mt-4">Hours Spent</h2>
          <WhiteCard style={"mt-2.5"}>
            <div className="flex mb-2">
              <div className="flex justify-center items-center">
                <div className="w-4 h-4 bg-orange-400 mr-2 rounded-sm"></div>
                <p>Study</p>
              </div>
              <div className="flex justify-center items-center ml-5">
                <div className="w-4 h-4 bg-orange-100 mr-2 rounded-sm"></div>
                <p>Exams</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={<CustomTooltip />}
                  // contentStyle={{ backgroundColor: "#1F1C3B", color: "ffffff" }}
                />
                {/* <Legend /> */}
                <Bar
                  dataKey="Study"
                  stackId="a"
                  fill="#FF9053"
                  radius={[0, 0, 20, 20]}
                />
                <Bar
                  dataKey="Exams"
                  stackId="a"
                  fill="#F8EFE2"
                  radius={[20, 20, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
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
