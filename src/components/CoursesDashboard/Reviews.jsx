import { useEffect, useState } from "react";
import { get } from "../../utils/HtppService";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";

const ReviewCard = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(
          "course/my/course-review/?pageSize=10&pageNo=0&courseId=b2e814be-69e5-4a13-8518-20259c2b9a9f"
        );
        if (response && Array.isArray(response.reviews)) {
          setReviews(response.reviews);
        } else {
          console.log("Expected reviews array but got:", response);
          setReviews([]);
        }
      } catch (err) {
        console.error("Error fetching review data:", err);
        setReviews([]);
      }
    };

    fetchData();
  }, []);

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div>
      <WhiteCard title="Reviews" style="mb-4 pt-1 pt-5">
        <div className="pt-5">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm p-4 border border-gray-200 mb-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">
                      {review.name || "Unknown"}
                    </span>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                    ⋮
                  </button>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-yellow-500">
                    {renderStars(review.rating || 0)}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {review.date || "N/A"}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {review.comment || "No comment available"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-sm">No reviews available.</p>
          )}
        </div>
      </WhiteCard>
    </div>
  );
};

export default ReviewCard;
