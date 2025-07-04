import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";

const Instructors = () => {
  return (
    <div className="mt-6">
      <WhiteCard title={"Instructors"} titleStyle={"text-lg font-semibold"}>
        <div className="flex items-center gap-4 mt-5">
          <div className="bg-blue-500 h-10 w-10 rounded-full"></div>
          <div>
            <p className="text-black mb-1">Abdelrahman Elshaer</p>
            <p className="text-gray-500">Senior UX/UI Designer</p>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};

export default Instructors;
