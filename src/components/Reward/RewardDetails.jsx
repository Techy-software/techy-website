import HorizontalMangment from "../../reusable components/HorizontalMangment/HorizontalManagment";
import PostTopBar from "../../reusable components/PostTopBar/PostTopBar";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import PostImage from "../../assets/reward.jpeg";
const RewardDetails = () => {
  const steps = ["Overview", "users"];
  const specs = [
    { ID: "12345" },
    { "Reward Promo Code": "Techy10" },
    { Title: "All courses discount" },
    { Description: "-" },
    { "Reward type": "Percentage" },
    { "Reward Value": "10%" },
    { "Valid from": "01 Feb, 2024" },
    { "Valid until": "05 Feb, 2024" },
  ];
  return (
    <div>
      <Topbar />
      <PostTopBar title="Reward Details" status="Active" buttonText="Edit" />
      <div className="grid grid-cols-12 gap-4 p-5">
        <div className="col-span-3">
          <HorizontalMangment steps={steps} currentStep={0} />
        </div>

        <WhiteCard title="Overview" style={"col-span-9 p-5"}>
          <div className="p-5">
            <span className="text-slate-400">Thumbnail</span>
            <div className="flex justify-center mt-5">
              <img
                src={PostImage}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="flex">
              <div>
                {specs.map((spec) => {
                  return (
                    <div className="flex my-4">
                      <span className="text-slate-400">
                        {Object.keys(spec)[0]}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="ms-9">
                {specs.map((spec) => {
                  return (
                    <div className="flex my-4">
                      <div>
                        <span>{Object.values(spec)[0]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>
  );
};
export default RewardDetails;
