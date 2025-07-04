import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";

const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 20 20"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.1 3.374a1 1 0 00.95.69h3.547c.969 0 1.371 1.24.588 1.81l-2.87 2.084a1 1 0 00-.364 1.118l1.1 3.374c.3.921-.755 1.688-1.538 1.118L10 13.347l-2.87 2.084c-.782.57-1.837-.197-1.538-1.118l1.1-3.374a1 1 0 00-.364-1.118L3.458 8.8c-.783-.57-.38-1.81.588-1.81h3.547a1 1 0 00.95-.69l1.1-3.374z"
    />
  </svg>
);

const ReviewItem = ({ review }) => {
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);

  return (
    <div className="bg-gray-50 hover:shadow-md transition-shadow rounded-lg p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
          {getInitials(review.name)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-semibold text-gray-900">
              {review.name}
            </h4>
            <p className="text-sm text-gray-400">{review.date}</p>
          </div>

          <div className="mt-1 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < review.rating} />
            ))}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            {review.review}
          </p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviewsData = [
    {
      name: "Abdelrahman Elshaer",
      date: "Jun 23, 2020",
      rating: 5,
      review:
        "Very good introduction to basic programming. Very easy for beginners in python who have already some programming background - but still extremely useful to quickly and efficiently learn python basics.",
    },
    {
      name: "Sara Mostafa",
      date: "Jul 3, 2020",
      rating: 4,
      review:
        "Great structure and delivery. The examples were relevant and well-explained. Would’ve loved extra quizzes.",
    },
    {
      name: "Abdelrahman Elshaer",
      date: "Jun 23, 2020",
      rating: 5,
      review:
        "Very good introduction to basic programming. Very easy for beginners in python who have already some programming background - but still extremely useful to quickly and efficiently learn python basics.",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm mt-5">
      <WhiteCard title={"Reviews"} titleStyle="text-lg font-semibold">
        <div className="space-y-5 mt-5">
          {reviewsData.map((review, index) => (
            <ReviewItem key={index} review={review} />
          ))}
        </div>
      </WhiteCard>
    </div>
  );
};

export default Reviews;
