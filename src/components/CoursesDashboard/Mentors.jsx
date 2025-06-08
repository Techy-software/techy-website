import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";

const Mentors = ({ courseData }) => {
  
  const handleAddMentor = () => {
  console.log("Add Mnetor button clicked");
  // your logic here
};

  return (
    <div>
      <WhiteCard
        title="Instructors"
        style={"mb-4 pt-1 pt-5"}
        button={
          <button
            onClick={handleAddMentor}
            className="flex items-center gap-2 px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Mentors
          </button>
        }
      >
        <div className="flex items-center space-x-4 pt-3">
          <img
            src={courseData?.mentor.profilePicture}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium">{courseData?.mentor.fullName}</span>
            <span className="text-sm text-gray-600">
              {courseData?.mentorTitle}
            </span>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};

export default Mentors;
