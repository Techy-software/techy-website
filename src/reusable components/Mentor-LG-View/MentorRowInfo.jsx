import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MentorRowInfo = ({ mentor, OptionsButton }) => {
  const navigator = useNavigate();

  const handleDefaultAction = () => {
    navigator("/MentorDashBoard", { state: { id: mentor.userId } });
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-2 text-sm">{mentor.fullName}</td>
      <td className="py-3 px-2 text-center text-sm">{mentor.email}</td>
      <td className="py-3 px-2 text-center text-sm">{mentor.phoneNumber}</td>
      <td className="py-3 px-2 text-center text-sm">
        {mentor.gender ? "Male" : "Female"}
      </td>
      <td className="py-3 px-2 text-center text-sm">{mentor.courses}</td>
      <td className="py-3 px-4 text-center">
        <span
          className={`py-1 px-3 rounded-md text-sm ${
            mentor.isActive
              ? "bg-green-100 text-green-600"
              : mentor.isActive === "Inactive"
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {mentor.isActive ? "Active" : "Inactive"}
        </span>
      </td>
      <td className="py-3 px-4 text-center">
        {OptionsButton ? (
          <div
            onClick={(e) => OptionsButton(e)}
            data-id={mentor.mentorId}
            className="cursor-pointer"
          >
            <FontAwesomeIcon icon={faEllipsis} style={{ color: "#016BDD" }} />
          </div>
        ) : (
          <button
            className="px-2 py-1 bg-white text-blue-500 border border-gray-200 rounded hover:bg-gray-100"
            onClick={handleDefaultAction}
          >
            View Profile
          </button>
        )}
      </td>
    </tr>
  );
};

export default MentorRowInfo;
