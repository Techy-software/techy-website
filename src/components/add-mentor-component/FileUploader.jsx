import React, { useState } from 'react';

const FileUploader = ({
  title,
  maxFileSize = 4000000, // 4MB
  onFileUpload,
  image,
}) => {
  const [file, setFile] = useState(null);

  const handleDragDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (file) => {
    if (file.size <= maxFileSize) {
      setFile(file);
      onFileUpload(file);
    } else {
      alert(`File size exceeds the limit of ${maxFileSize / 1000000}MB.`);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDragDrop}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
        <div className="bg-gray-200 rounded-lg p-6">
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded file"
              className="max-h-64 object-contain"
            />
          ) : (
            <div className="text-center">
              <img src={image} alt="Drag & Drop" className="max-h-64 object-contain mb-4" />
              <p className="text-gray-500 mb-2">Drag & Drop file here</p>
              <p className="text-gray-500 mb-4">or click to browse ({maxFileSize / 1000000}mb max)</p>
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files[0])}
              />
              <label
                htmlFor="file-input"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Browse
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;