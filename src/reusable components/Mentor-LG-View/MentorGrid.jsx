import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import personalImage from "../../assets/PersonalPicture.png";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const MentorGrid = () => {
  return (
    <div className="bg-slate-50 p-3 rounded-xl">
      <div className="flex justify-end">
        <span className="bg-green-100 text-green-600 rounded-md p-1">
          Active
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={personalImage}
          alt="Personal Picture"
          className="w-20 h-20 rounded-full"
        />
        <div className="text-sm font-bold mt-2">Abdelahrahman ElShaer</div>
        <div className="text-xs text-gray-500">ahmed@gmail.com</div>
        <div className="flex gap-6 mt-5">
          <button className="bg-white text-blue-500 text-semibold border py-2 px-3 rounded-xl">
            View Profile
          </button>
          <button className="bg-white border p-2 px-3 rounded-xl">
            <FontAwesomeIcon icon={faEllipsis} style={{ color: "#016BDD" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorGrid;
