import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import personalImage from "../../assets/PersonalPicture.png";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MentorGrid = ({ mentor, OptionsButton }) => {
  console.log(mentor);
  const navigator = useNavigate();
  return (
    <div className="bg-slate-50 p-3 rounded-xl">
      <div className="flex justify-end">
        <span className="bg-green-100 text-green-600 rounded-md p-1">
          {mentor.isActive ? "Active" : "Inactive"}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={mentor.image || personalImage}
          alt="Personal Picture"
          className="w-20 h-20 rounded-full"
        />
        <div className="text-sm font-bold mt-2">{mentor.fullName}</div>
        <div className="text-xs text-gray-500">{mentor.email}</div>
        <div className="flex gap-6 mt-5">
          <button
            className="bg-white text-blue-500 text-semibold border py-2 px-3 rounded-xl"
            onClick={() => {
              navigator("/MentorDashBoard", { state: { id: mentor.id } });
            }}
          >
            View Profile
          </button>
          <button
            className="bg-white border p-2 px-3 rounded-xl"
            onClick={OptionsButton}
            data-id={mentor.mentorId}
          >
            <FontAwesomeIcon
              icon={OptionsButton ? faPlus : faEllipsis}
              style={{ color: "#016BDD" }}
              value={mentor.mentorId}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorGrid;
