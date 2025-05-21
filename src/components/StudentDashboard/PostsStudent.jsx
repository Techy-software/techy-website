import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../../reusable components/InputField/InputField";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import {
  faShareFromSquare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import Academy from "../../assets/Academy.png";
import ImagePost from "../../assets/postImage.jpeg";
import { get } from "../../utils/HtppService";
import { useEffect, useState } from "react";

const PostsStudent = ({ studentId }) => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await get(
        `/user/profile/posts/${studentId}/?pageSize=10&pageNo=0&isWatch=0`
      );
      setPosts(response.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {posts.map((item) => (
        <WhiteCard key={item.post.id} style={"mb-4 pt-1"}>
          <div className="flex items-center">
            <img
              src={item.post.user.profilePicture}
              alt="Profile Photo"
              className="w-10 h-10 me-3 rounded-lg"
            />
            <div>
              <h2 className="text-lg font-bold mt-4">
                {item.post.user.fullName}
              </h2>
              <span className="text-slate-400">1h</span>{" "}
              {/* You can calc the time diff if needed */}
            </div>
          </div>
          <p className="text-slate-700 p-3">{item.post.content}</p>

          <div className="flex justify-between text-slate-500">
            <p>
              {item.post.reactions[0]?.user.fullName} and{" "}
              {item.post.reactions.length - 1} others
            </p>
            <p>{item.commentsCount} Comments</p>
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
      ))}
    </div>
  );
};

export default PostsStudent;
