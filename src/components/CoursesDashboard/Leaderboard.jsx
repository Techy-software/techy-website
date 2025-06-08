import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import { useEffect, useState } from "react";
import { get } from "../../utils/HtppService";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const medals = ["🥇", "🥈", "🥉", "🏅"];

  const fetchData = async () => {
    try {
      const response = await get(
        "school/course/b2e814be-69e5-4a13-8518-20259c2b9a9f/students/"
      );

      if (response?.content && Array.isArray(response.content)) {
        const sortedContent = response.content.sort(
          (a, b) => b.totalPoints - a.totalPoints
        );
        setLeaderboardData(sortedContent); // store the sorted array, not the whole response
        console.log("Sorted leaderboard data:", sortedContent);
      } else {
        setLeaderboardData(null);
      }
    } catch (err) {
      console.error("Error fetching course data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <WhiteCard title="Leaderboard" style={"mb-4 pt-1 pt-5"}>
        <div className="space-y-2 pt-4">
          {leaderboardData?.map(({ totalPoints, user }, index) => (
            <div
              key={user.id}
              className="flex justify-between items-center border-b pb-5 pt-3"
            >
              <div className="flex items-center gap-2">
                <span className="pl-3">{medals[index] || medals[3]}</span>{" "}
                {/* medal by position */}
                <span className="pl-4">{user.fullName}</span>
              </div>
              <span className="font-semibold">{totalPoints} px</span>
            </div>
          ))}
        </div>
      </WhiteCard>
    </div>
  );
};

export default Leaderboard;
