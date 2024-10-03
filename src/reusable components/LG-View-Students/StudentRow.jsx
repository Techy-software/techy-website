import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const StudentRow = ({ student }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-2 text-sm">{student.name}</td>
      <td className="py-3 px-2 text-center text-sm">{student.email}</td>
      <td className="py-3 px-2 text-center text-sm">{student.mobile}</td>
      <td className="py-3 px-2 text-center text-sm">{student.gender}</td>
      <td className="py-3 px-4 text-center">
        <span
          className={`py-1 px-3 rounded-md text-sm ${
            student.status === "Active"
              ? "bg-green-100 text-green-600"
              : student.status === "Disabled"
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {student.status}
        </span>
      </td>
      <td className="py-3 px-4 text-center">
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#016BDD" }} />
      </td>
    </tr>
  );
};

export default StudentRow;
