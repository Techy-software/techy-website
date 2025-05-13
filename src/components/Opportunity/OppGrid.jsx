import postImage from "../../assets/postImage.jpeg";

const OppGrid = ({ opp, onClick }) => {
  return (
    <div
      className="max-w-s rounded-xl overflow-hidden shadow-lg border border-gray-200"
      onClick={onClick}
    >
      <img
        src={opp.thumbnail}
        alt="Course Image"
        className="w-full h-40 object-cover"
      />
      <div className="">
        <div className="flex items-center mb-2 px-4 py-1 bg-slate-600">
          <span className="text-white ml-1 ">Age ?</span>
          <div className="ml-auto text-gray-600 flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></div>
            <span className="text-white text-sm">{opp.location}</span>
          </div>
        </div>
        <div className="pb-4 px-4">
          <h2 className="font-semibold text-gray-800">{opp.title}</h2>
          <p className="text-gray-600 mt-1 ">{opp.startDate}</p>
        </div>
      </div>
    </div>
  );
};

export default OppGrid;
