import React from 'react';

interface StudentCardProps {
  student: {
    id: number;
    name: string;
    email: string;
    status: string;
  };
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
      <img
        src="/path-to-avatar.jpg" // Replace with actual path to image
        alt={student.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold">{student.name}</h2>
      <p className="text-gray-600">{student.email}</p>
      <span className={`mt-2 px-3 py-1 text-sm rounded-full ${student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {student.status}
      </span>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        View Profile
      </button>
    </div>
  );
};

export default StudentCard;
