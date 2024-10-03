import StudentRow from "./StudentRow";

const StudentTable = () => {
  const Mentors = [
    {
      id: 1,
      name: "Ahmed Mealy",
      emil: "ahmed@gmail.com",
      mobile: "01000000000",
      gender: "male",
      status: "Disabled",
    },
    {
      id: 2,
      name: "Ahmed Mealy",
      emil: "ahmed@gmail.com",
      mobile: "01000000000",
      gender: "male",
      status: "Draft",
    },
    {
      id: 3,
      name: "Ahmed Mealy",
      emil: "ahmed@gmail.com",
      mobile: "01000000000",
      gender: "male",
      status: "Active",
    },
    {
      id: 4,
      name: "Ahmed Mealy",
      emil: "ahmed@gmail.com",
      mobile: "01000000000",
      gender: "male",
      status: "Draft",
    },
    {
      id: 5,
      name: "Ahmed Mealy",
      emil: "ahmed@gmail.com",
      mobile: "01000000000",
      gender: "male",
      status: "Disabled",
    },
    {
      id: 6,
      name: "Ahmed Mealy",
      emil: "ahmed@gmail.com",
      mobile: "01000000000",
      gender: "male",
      status: "Active",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-blue-50">
          <tr>
            <th className="py-3 px-1 text-left font-normal text-gray-600 text-xs">
              Mentor
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs w-">
              Email
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              Mobile Number
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              Gender
            </th>
            <th className="py-3 px-0 text-center font-normal text-gray-600 text-xs">
              Status
            </th>
            <th className="py-3 px-2 text-center font-normal text-gray-600 text-xs">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {Mentors.map((mentor) => (
            <StudentRow key={mentor.id} student={mentor} />
          ))}
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

export default StudentTable;
