import PostTopBar from "../../reusable components/PostTopBar/PostTopBar";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";

const Rewards = () => {
  return (
    <div>
      <Topbar />
      <PostTopBar title="Rewards" buttonText="Add role" />
      <WhiteCard></WhiteCard>
    </div>
  );
};

export default Rewards;
