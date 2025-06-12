import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import CourseContent from "./CourseContent ";
const Overview = ({courseData}) => {

     return (
    <>
      <WhiteCard title="Description" style={"mb-4 pt-1 pt-5"}>
        <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {courseData?.description || "No description available."}
        </div>
      </WhiteCard>
      <CourseContent/>
    </>
  );
};

export default Overview;
