import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Academy from "../../assets/Academy.png";
import ImagePost from "../../assets/postImage.jpeg";
import InputField from "../../reusable components/InputField/InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faShareFromSquare,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
const Feed = () => {
  return (
    <>
      <WhiteCard style={"flex mb-4 py-3"}>
        <img src={Academy} alt="Profile Photo" className="w-10 h-10 me-3" />
        <InputField
          placeholder="What's on your head?"
          style={{ border: "none" }}
        />
      </WhiteCard>
      <WhiteCard style={"mb-4 pt-1"}>
        <div className="flex items-center">
          <img src={Academy} alt="Profile Photo" className="w-10 h-10 me-3" />
          <div>
            <h2 className="text-lg font-bold mt-4">Techy School</h2>
            <span className="text-slate-400">1h</span>
          </div>
        </div>
        <p className="text-slate-700 p-3">
          Donec eleifend hendrerit purus et dignissim. Nunc lacinia lorem ut
          eros scelerisque, quis semper felis accumsan. Proin tempus dolor ex,
          at convallis mauris sollicitudin sit amet. posted a new course "React
          Native"
        </p>
        <div className="flex justify-between text-slate-500">
          <p>Fady Ibrahim and 14 others</p>
          <p>3 Comments</p>
        </div>
        <hr className="my-2" />
        <div className="grid grid-cols-12 gap-4 text-slate-500">
          <div className="col-span-4 text-center">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span className="m-2">Like</span>
          </div>
          <div className="col-span-4 text-center">
            <FontAwesomeIcon icon={faCommentDots} />
            <span className="m-2">Comment</span>
          </div>
          <div className="col-span-4 text-center">
            <FontAwesomeIcon icon={faShareFromSquare} />
            <span className="m-2">Share</span>
          </div>
        </div>
      </WhiteCard>
      <WhiteCard style={"mb-4 pt-1"}>
        <div className="flex items-center">
          <img src={Academy} alt="Profile Photo" className="w-10 h-10 me-3" />
          <div>
            <h2 className="text-lg font-bold mt-4">Techy School</h2>
            <span className="text-slate-400">1h</span>
          </div>
        </div>
        <p className="text-slate-700 p-3">
          Donec eleifend hendrerit purus et dignissim. Nunc lacinia lorem ut
          eros scelerisque, quis semper felis accumsan. Proin tempus dolor ex,
          at convallis mauris sollicitudin sit amet. posted a new course "React
          Native"
        </p>
        <div className="w-full flex justify-center my-2">
          <img src={ImagePost} alt="post of an image" className="rounded" />
        </div>
        <div className="flex justify-between text-slate-500">
          <p>Fady Ibrahim and 14 others</p>
          <p>3 Comments</p>
        </div>
        <hr className="my-2" />
        <div className="grid grid-cols-12 gap-4 text-slate-500">
          <div className="col-span-4 text-center">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span className="m-2">Like</span>
          </div>
          <div className="col-span-4 text-center">
            <FontAwesomeIcon icon={faCommentDots} />
            <span className="m-2">Comment</span>
          </div>
          <div className="col-span-4 text-center">
            <FontAwesomeIcon icon={faShareFromSquare} />
            <span className="m-2">Share</span>
          </div>
        </div>
      </WhiteCard>
    </>
  );
};

export default Feed;
