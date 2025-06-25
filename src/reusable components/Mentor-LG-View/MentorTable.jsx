import MentorRow from "./MentorRow";
import MentorRowInfo from "./MentorRowInfo";

const MentorTable = ({ lists, info = false, OptionsButton }) => {
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
              <MentorRowInfo
                key={course.id}
                mentor={course}
                OptionsButton={OptionsButton}
              />
            ) : (
              <MentorRow key={course.id} mentor={course} />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MentorTable;
