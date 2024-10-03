import BlueButton from "../BlueButton/BlueButton";
import GridListButton from "../GridListButton/GridListButton";
import WhiteCard from "../WhiteCard/WhiteCard";
import filter from "../../assets/filter.png";
import GridCard from "./GridCard";
const CoursesList = () => {
  return (
    <>
      <WhiteCard>
        <div className="flex justify-between items-center">
          <div>
            {/* <SearchBar /> */}
            <div className="cursor-pointer">
              <img src={filter} alt="Filter" />
            </div>
          </div>
          <div className="flex items-center">
            <GridListButton />
            <BlueButton text="Create new course" buttonStyle={"w-auto"} />
          </div>
        </div>
        <GridCard />
      </WhiteCard>
    </>
  );
};

export default CoursesList;
