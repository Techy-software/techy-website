import postImage from "../../assets/postImage.jpeg";
import { AiFillStar } from "react-icons/ai"; // Importing a star icon

const GridCard = ({ course }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg border border-gray-200">
      <img
        src={postImage}
        alt="Course Image"
        className="w-full h-40 object-cover"
      />
      <div className="">
        <div className="flex items-center mb-2 px-4 py-2 bg-slate-500">
          <AiFillStar className="text-yellow-500" />
          <span className="text-white ml-1">4.5 (10k)</span>
          <div className="ml-auto text-gray-600 flex items-center">
            <div className="w-2 h-2 rounded-full bg-gray-300 mr-1.5"></div>
            <span className="text-white">Beginner</span>
          </div>
        </div>
        <div className="pb-4 px-4">
          <h2 className="font-semibold text-lg text-gray-800">
            The Designed to STEAM Online Class
          </h2>
          <p className="text-gray-600 mt-1">2 lessons</p>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
