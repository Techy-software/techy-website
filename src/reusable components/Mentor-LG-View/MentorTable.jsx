import MentorRow from "./MentorRow";
import MentorRowInfo from "./MentorRowInfo";

const MentorTable = ({ lists, info = false }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-blue-50">
          <tr>
            <th className="py-3 px-1 text-left font-normal text-gray-600 text-xs">
              {info ? "Mentor" : "Mentor Name"}
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs w-">
              {info ? "Email" : "Visible"}
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              {info ? "Mobile Number" : "Manage"}
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              {info ? "Gender" : "Performance"}
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              {info ? "Courses" : "Q&A"}
            </th>
            <th className="py-3 px-2 text-center font-normal text-gray-600 text-xs">
              {info ? "Status" : "Actions"}
            </th>
            {info && (
              <th className="py-3 px-2 text-center font-normal text-gray-600 text-xs">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {lists.map((course) =>
            info ? (
              <MentorRowInfo key={course.id} mentor={course} />
            ) : (
              <MentorRow key={course.id} mentor={course} />
            )
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <span>Show</span>
          <select className="border rounded-md px-2 py-1 text-gray-400">
            <option>6</option>
            <option>12</option>
            <option>24</option>
          </select>
        </div>
        <div className="flex items-center space-x-8">
          <button className="text-gray-400">&lt;</button>
          <button className="px-3 py-1 rounded bg-blue-500 text-white">
            1
          </button>
          <button className="">2</button>
          <button className="">3</button>
          <button className="">4</button>
          <span>...</span>
          <button className="">7</button>
          <button className="text-gray-400">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default MentorTable;
