import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteCard from "../WhiteCard/WhiteCard";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const ProfilePicture = ({ title, src, alt, children }) => {
  return (
    <>
      <WhiteCard title={title}>
        <div className="flex items-center mt-7">
          <div className="border-2 border-dashed rounded-full me-5">
            <FontAwesomeIcon icon={faUser} className="p-7 w-6 h-6" />
          </div>
          <button className="border-2 text-blue-500 p-3 rounded-lg">
            Upload Picture
          </button>
        </div>
        {children}
      </WhiteCard>
    </>
  );
};

export default ProfilePicture;
