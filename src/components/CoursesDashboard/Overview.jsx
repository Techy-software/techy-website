import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Academy from "../../assets/Academy.png";
import ImagePost from "../../assets/postImage.jpeg";
import InputField from "../../reusable components/InputField/InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faShareFromSquare,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
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
