import HorizontalMangment from "../../reusable components/HorizontalMangment/HorizontalManagment";
import PostTopBar from "../../reusable components/PostTopBar/PostTopBar";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import PostImage from "../../assets/postImage.jpeg";
const RewardDetails = () => {
  const steps = ["Overview", "users"];
  const specs = [
    { ID: "12345" },
    { "Reward Promo Code": "Techy10" },
    { Title: "All courses discount" },
    { Description: "-" },
    { "Reward type": "Percentage" },
    {},
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
          <span className="text-slate-400">Thumbnail</span>
          <div className="flex justify-center">
            <img src={PostImage} className="object-cover" />
          </div>
        </WhiteCard>
      </div>
    </div>
  );
};
export default RewardDetails;
