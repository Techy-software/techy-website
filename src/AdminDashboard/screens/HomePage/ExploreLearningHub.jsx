import { useState } from "react";

const ExploreLearningHub = () => {
  const [activeTab, setActiveTab] = useState("Development");

  const categories = [
    "Development",
    "Business",
    "Finance & accounting",
    "IT & Software",
    "Office productivity",
    "Design",
    "Personal development",
  ];

  const courses = [
    {
      category: "Development",
      title: "The Designed to STEAM Online Class",
      lessons: 2,
      price: "150 EGP",
      oldPrice: "250 EGP",
      rating: "4.5 (10k)",
      difficulty: "Beginner",
    },
    {
      category: "Development",
      title: "Another STEAM Course",
      lessons: 3,
      price: "180 EGP",
      oldPrice: "300 EGP",
      rating: "4.8 (8k)",
      difficulty: "Intermediate",
    },
    {
      category: "Development",
      title: "STEAM Bootcamp for Kids",
      lessons: 5,
      price: "200 EGP",
      oldPrice: "350 EGP",
      rating: "4.6 (12k)",
      difficulty: "Beginner",
    },
    {
      category: "Business",
      title: "Intro to Marketing",
      lessons: 6,
      price: "120 EGP",
      oldPrice: "220 EGP",
      rating: "4.3 (7k)",
      difficulty: "Beginner",
    },
  ];

  const filteredCourses = courses.filter(
    (course) => course.category === activeTab
  );

  return (
    <section className="px-6 py-12 md:py-24 bg-blue-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 text-center md:text-left">
          Explore Learning <span className="text-blue-600">HUB</span>
        </h2>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No courses found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({
  title,
  lessons,
  price,
  oldPrice,
  rating,
  difficulty,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
      <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-500">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.236L18.736 7 12 11.764 5.264 7 12 4.236zM4 9l8 4 8-4v6l-8 4-8-4V9z" />
        </svg>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-400 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.32 6.91.76-5 4.87 1.18 6.88L12 18.17l-6.18 3.25L7 13.95l-5-4.87 6.91-.76L12 2z" />
              </svg>
              {rating}
            </div>
            <span className="bg-gray-100 text-xs font-semibold px-3 py-1 rounded-full">
              {difficulty}
            </span>
          </div>

          <h3 className="font-bold text-lg text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{lessons} lessons</p>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
            <span className="text-sm text-gray-700">Techy</span>
          </div>
          <div>
            <span className="text-blue-600 font-bold text-lg mr-2">
              {price}
            </span>
            <span className="text-sm line-through text-gray-400">100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLearningHub;
