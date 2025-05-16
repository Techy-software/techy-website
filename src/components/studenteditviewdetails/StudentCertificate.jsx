import React, { useEffect, useState } from "react";
import CategorySidebar from "../../reusable components/CategorySidebar/CategorySidebar";
import { FaEye, FaPlusCircle } from "react-icons/fa";
import axios from "axios";

const CertificateList = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/certificates") // Update with your real endpoint
      .then((res) => {
        setCertificates(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching certificates:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex">
      <CategorySidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-md shadow-sm p-6">
          <h2 className="text-lg font-semibold border-b pb-4 mb-4">Certificates</h2>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="border-b pb-4 mb-4 flex justify-between items-start"
                >
                  <div>
                    <div className="font-semibold text-sm text-black truncate max-w-xs">
                      {cert.title}
                    </div>
                    <div className="text-sm text-gray-600">Issued {cert.issueDate}</div>
                    <div className="text-sm text-gray-600">
                      Credential ID {cert.credentialId}
                    </div>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
                  >
                    <FaEye />
                    <span>View Credential</span>
                  </a>
                </div>
              ))}

              <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm mt-4">
                <FaPlusCircle className="mr-2" />
                Add Certificate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateList;
