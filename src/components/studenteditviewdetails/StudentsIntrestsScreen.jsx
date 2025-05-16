import React, { useEffect, useState } from "react";
import CategorySidebar from "../../reusable components/CategorySidebar/CategorySidebar";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";

const InterestList = () => {
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/interests") // Update with your actual endpoint
      .then((res) => {
        setInterests(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching interests:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex">
      <CategorySidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-md shadow-sm p-6">
          <h2 className="text-lg font-semibold border-b pb-4 mb-4">Interests</h2>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="border-b pb-4 mb-4 flex justify-between items-start"
                >
                  <div>
                    <div className="font-semibold text-sm text-black truncate max-w-xs">
                      {interest.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {interest.description}
                    </div>
                  </div>
                </div>
              ))}

              <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm mt-4">
                <FaPlusCircle className="mr-2" />
                Add Interest
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterestList;
