import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";

const TrophyIcon = ({ rank }) => {
  const colors = {
    1: "text-amber-400",
    2: "text-slate-400",
    3: "text-amber-600",
  };
  const colorClass = colors[rank] || "text-gray-400";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-6 w-6 ${colorClass}`}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.87 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.13 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
};

const LeaderboardItem = ({ item }) => {
  return (
    <div className="flex items-center rounded-lg bg-gray-50 px-7 py-10">
      <div className="flex-shrink-0">
        <TrophyIcon rank={item.rank} />
      </div>
      <div className="ml-4 flex-1">
        <p className="text-base font-semibold text-gray-900">{item.name}</p>
      </div>
      <div className="text-base font-semibold text-gray-700">{item.points}</div>
    </div>
  );
};

const LeaderBoard = () => {
  const leaderboardData = [
    { rank: 1, name: "Sunstra Maneerattana", points: "5,500 PX" },
    { rank: 2, name: "Sunstra Maneerattana", points: "5,000 PX" },
    { rank: 3, name: "Sunstra Maneerattana", points: "4,500 PX" },
  ];

  return (
    <div className="rounded-xl bg-whiteshadow-sm mt-5">
      <WhiteCard title={"Leaderboard"} titleStyle="text-lg font-semibold">
        <div className="space-y-4 mt-4">
          {leaderboardData.map((item, index) => (
            <LeaderboardItem key={index} item={item} />
          ))}
        </div>
      </WhiteCard>
    </div>
  );
};

export default LeaderBoard;
