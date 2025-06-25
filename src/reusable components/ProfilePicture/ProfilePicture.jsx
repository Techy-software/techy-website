import { useRef, useState } from "react";
import WhiteCard from "../WhiteCard/WhiteCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const ProfilePicture = ({ title, src, alt, children, onImageChange }) => {
  const [preview, setPreview] = useState(src || null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);

    if (onImageChange) {
      onImageChange(file);
    }
  };

  return (
    <WhiteCard title={title}>
      <div className="flex items-center mt-7">
        <div className="border-2 border-dashed rounded-full me-5 w-24 h-24 overflow-hidden flex items-center justify-center bg-gray-100">
          {preview ? (
            <img
              src={preview}
              alt={alt || "Profile Preview"}
              className="w-full h-full object-cover"
            />
          ) : (
            <FontAwesomeIcon icon={faUser} className="text-gray-400 text-4xl" />
          )}
        </div>

        <button
          className="border-2 text-blue-500 p-3 rounded-lg"
          onClick={() => fileInputRef.current.click()}
        >
          Upload Picture
        </button>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      {children}
    </WhiteCard>
  );
};

export default ProfilePicture;
