import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const CourseRow = ({ course }) => {
  console.log("course", course);
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-2 text-sm">{course.fullName}</td>
      <td className="py-3 px-2 text-center text-sm">{course.lessons}</td>
      <td className="py-3 px-2 text-center text-sm">{course.level}</td>
      <td className="py-3 px-2 text-center text-sm">{course.rate}</td>
      <td className="py-3 px-2 text-center text-sm">{course.uploadedBy}</td>
      <td className="py-3 px-2 text-center text-sm">
        {course.lastUpdated}
        <br />
        <span className="text-gray-400">{course.lastUpdatedTime}</span>
      </td>
      <td className="py-3 px-4 text-center">
        <span
          className={`py-1 px-3 rounded-md text-sm ${
            course.status === "Active"
              ? "bg-green-100 text-green-600"
              : course.status === "Disabled"
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {course.status}
        </span>
      </td>
      <td className="py-3 px-4 text-center">
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#016BDD" }} />
      </td>
    </tr>
  );
};

export default CourseRow;
