import BlueButton from "../BlueButton/BlueButton";
import GridListButton from "../GridListButton/GridListButton";
import WhiteCard from "../WhiteCard/WhiteCard";

const CoursesList = () => {
  return (
    <>
      <WhiteCard>
        <div>
          <div>
            {/* <SearchBar /> */}
            {/* <Icon /> */}
          </div>
          <div className="flex items-center">
            <GridListButton />
            <BlueButton text="Create new course" buttonStyle={"w-auto"} />
          </div>
        </div>
      </WhiteCard>
    </>
  );
};

export default CoursesList;
