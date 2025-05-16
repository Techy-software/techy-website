import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import CategorySidebar from "../../reusable components/CategorySidebar/CategorySidebar";
import axios from "axios";

const StudentFAQ = ({ relativeId = 1 }) => {
  const [relative, setRelative] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`/api/relatives/${relativeId}`)
      .then((res) => {
        setRelative(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load relative data.");
        setLoading(false);
      });
  }, [relativeId]);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="flex">
      <CategorySidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-md shadow-sm p-6">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-lg font-semibold">Relatives</h2>
            <button className="text-blue-600 hover:text-blue-800">
              <FaEdit />
            </button>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-sm text-gray-800">
            <Detail label="Full name" value={relative.fullName} />
            <Detail label="Age" value={`${relative.age} years`} />
            <Detail label="Job title" value={relative.jobTitle} />
            <Detail label="Relationship" value={relative.relationship} />
            <Detail label="Mobile number" value={relative.mobile} />
            <Detail label="Landline" value={relative.landline} />
            <Detail label="Email" value={relative.email} />
            <Detail label="Register Date" value={relative.registerDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <div className="text-gray-500">{label}</div>
    <div className="font-medium">{value}</div>
  </div>
);

export default StudentFAQ;
