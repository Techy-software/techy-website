import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import PostTopBar from "../../reusable components/PostTopBar/PostTopBar";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";

const AddReward = () => {
  return (
    <div className="bg-slate-50">
      <Topbar />
      <PostTopBar title="Create Ads" buttonText="Submit" />
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-3">
          <HorizontalSteps
            title="Publish Discount Coupon"
            steps={["Overview"]}
            currentStep={0}
          />
        </div>
        <WhiteCard title="Ads details" style={"col-span-9 p-5"}></WhiteCard>
      </div>
    </div>
  );
};

export default AddReward;
