import { useState } from "react";

const VideoUploader = ({ onVideoSelect }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setPreviewURL(url);
      if (onVideoSelect) onVideoSelect(file);
    } else {
      alert("Please select a valid video file");
    }
  };

  return (
    <div className="space-y-4 border rounded-md p-4 bg-white shadow-sm">
      <label className="block text-sm font-medium text-gray-700">
        Upload Video
      </label>
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      {previewURL && (
        <div className="mt-4">
          <video
            className="w-full rounded-md"
            controls
            poster="/placeholder.jpg"
          >
            <source src={previewURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
