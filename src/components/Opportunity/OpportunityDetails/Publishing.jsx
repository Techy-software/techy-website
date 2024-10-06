import ComboAutocomplete from "../../../reusable components/AutoComplete/ComboAutoComplete";
import HorizontalSteps from "../../../reusable components/HorizontalSteps/HorizontalSteps";
import InputField from "../../../reusable components/InputField/InputField";
import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";

const Publishing = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 m-3">
        <HorizontalSteps
          steps={[
            "Overview",
            "Speakers",
            "Pricing & Payment methods",
            "Publishing",
          ]}
          currentStep={3}
          title={"Publish Opportunity"}
        />
      </div>
      <div className="col-span-9">
        <WhiteCard title={"Target"}>
          <div className="mt-5">
            <p className="font-semibold mt-2">
              What are the requirements or prerequistites for taking your
              course?
            </p>
            <p className="text-slate-400 text-sm mt-2">
              List the required skills, experience, tools or equipment learners
              should have prior to taking your course.
            </p>
            <p className="text-slate-400 text-sm mt-1 mb-3">
              If there are no requirements, use this space as an opportunity to
              lower the barrier for beginners.
            </p>
            <InputField label={"Prerequisites"} />
          </div>
          <hr className="my-3" />
          <div>
            <p className="font-semibold mt-2">Who is this course for?</p>
            <p className="text-slate-400 text-sm mt-2">
              Enter age range for students who will find your course content
              valuable
            </p>
            <p className="text-slate-400 text-sm mt-1 mb-3">
              This will help you attract the right learners to your course.
            </p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <label className="font-normal text-xs">Age from</label>
                <ComboAutocomplete options={[]} placeholder={"8"} />
              </div>
              <div className="col-span-6">
                <label className="font-normal text-xs">Age to</label>
                <ComboAutocomplete options={[]} placeholder={"12"} />
              </div>
              <div className="col-span-6">
                <label className="font-normal text-xs">level</label>
                <ComboAutocomplete options={[]} placeholder={"Beginner"} />
              </div>
              <div className="col-span-6">
                <label className="font-normal text-xs">Privacy</label>
                <ComboAutocomplete options={[]} placeholder={"Public"} />
              </div>
            </div>
          </div>
        </WhiteCard>
        <WhiteCard title={"Tags"} style={"mt-5"}>
          <p className="m-5 ms-0 text-slate-400 text-xs mb-3">
            Your course Tags is crucial to your success. If it's done right. it
            can also help you gain visibility in search results.
          </p>
          <InputField label={"Tags"} />
        </WhiteCard>
      </div>
    </div>
  );
};

export default Publishing;
