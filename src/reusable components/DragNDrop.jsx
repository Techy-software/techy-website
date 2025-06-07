import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const DragNDrop = ({ formData, setFormData }) => {
  const [error, setError] = useState("");

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      setError("");

      if (fileRejections.length > 0) {
        const reason = fileRejections[0].errors[0].message;
        setError(reason);
        return;
      }

      const selectedFile = acceptedFiles[0];

      // Add preview URL for UI, and save to formData
      const fileWithPreview = Object.assign(selectedFile, {
        preview: URL.createObjectURL(selectedFile),
      });

      setFormData((prev) => ({
        ...prev,
        thumbnail: fileWithPreview,
      }));
    },
    [setFormData]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    maxSize: 4 * 1024 * 1024, // 4MB
    multiple: false,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Thumbnail</h2>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
          isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-2">
          {formData.thumbnail !== null ? (
            <img
              src={formData.thumbnail.preview}
              alt="Preview"
              className="w-full max-w-xs rounded shadow-md"
              onLoad={() => URL.revokeObjectURL(formData.thumbnail.preview)}
            />
          ) : (
            <>
              <p className="text-gray-500 font-medium">Drag & Drop file here</p>
              <p className="text-sm text-gray-400">
                or{" "}
                <button
                  type="button"
                  onClick={open}
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  click to browse
                </button>{" "}
                (4 MB max)
              </p>
            </>
          )}
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Upload your course image here. It must meet our{" "}
          <a href="#" className="underline text-blue-500">
            course image quality standards
          </a>
          . Important guidelines: 750x422 pixels; .jpg, .jpeg or .png; no text
          on the image.
        </p>

        {error && (
          <p className="text-sm text-red-500 mt-2 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default DragNDrop;
