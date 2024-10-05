import HorizontalSteps from "../../../reusable components/HorizontalSteps/HorizontalSteps";

const Speakers = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 m-3">
        <HorizontalSteps
          steps={["Overview", "Speakers", "Pricing & Payment methods"]}
          currentStep={1}
          title={"Publish Opportunity"}
        />
      </div>
    </div>
  );
};

export default Speakers;
