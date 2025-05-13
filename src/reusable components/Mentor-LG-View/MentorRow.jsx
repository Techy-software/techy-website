import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const MentorRow = ({ mentor }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-2 text-sm">{mentor.fullName}</td>
      <td className="text-center">
        <input type="checkbox" className="py-3 px-2" />
      </td>
      <td className="text-center">
        <input type="checkbox" className="py-3 px-2" />
      </td>
      <td className="text-center">
        <input type="checkbox" className="py-3 px-2" />
      </td>
      <td className="text-center">
        <input type="checkbox" className="py-3 px-2" />
      </td>
      <td className="py-3 px-4 text-center">
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#016BDD" }} />
      </td>
    </tr>
  );
};

export default MentorRow;
