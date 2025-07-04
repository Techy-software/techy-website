import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";
import CourseCard from "./CourseRightCard";
const SubjectSection = () => {
  return (
    <div className=" min-h-screen bg-white">
      <div className=" bg-blue-50 px-6 py-10 ps-20 shadow-md mb-6">
        <div className="text-sm text-blue-600 font-medium mb-1">
          <a href="#" className="hover:underline">
            Subjects
          </a>{" "}
          &gt; Add new subject
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Javascript for Beginners
        </h1>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center text-yellow-500 font-semibold">
            ⭐ Rating
          </div>
          <span className="text-orange-500">5.0</span>
          <span className="text-gray-500">(34 Reviews)</span>
        </div>
        <div className="mt-2 text-blue-700 font-medium">Techy</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="col-span-2 space-y-6">
          <WhiteCard title={"Description"} titleStyle={"text-lg font-semibold"}>
            <div className="text-gray-400 ">
              <p className="mb-2 mt-2">
                Take this Javascript training course and start learning
                Javascript today.
              </p>
              <blockquote className=" italic mb-2">
                "As a business person, I have no place in programming."
              </blockquote>
              <p className="">
                Ten years ago you could have gotten away with that statement...
              </p>
              <button className="text-blue-600 mt-2 text-sm font-medium hover:underline mt-5">
                See more ↓
              </button>
            </div>
          </WhiteCard>

          <WhiteCard
            title={"Course Content"}
            titleStyle={"text-lg font-semibold"}
          >
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-4 gap-3 flex items-center">
                <span>7 Sections </span> •<span> 15 Lectures </span> •
                <span> 1h 50m total length</span>
              </p>
              <div className="mb-3">
                <div className="font-medium text-gray-500 mb-2 flex justify-between items-center">
                  Section 1 - Introduction{" "}
                  <span className="text-sm text-blue-400 ml-2">15 mins</span>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">
                          0{num}
                        </span>
                        <span className="text-gray-700">Intro</span>
                      </div>
                      <span className="text-gray-500 text-sm">
                        Video • 2min
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </WhiteCard>
        </div>

        <CourseCard />
      </div>
    </div>
  );
};

export default SubjectSection;
