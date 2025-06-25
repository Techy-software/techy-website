import { FaEye } from "react-icons/fa";

const CertificateItem = ({ certificate }) => {
  return (
    <div className="flex justify-between items-center border p-4 rounded-lg mt-4 shadow-sm bg-white">
      <div>
        <h3 className="font-semibold text-sm text-gray-800 truncate w-56">
          {certificate.name}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Issued {certificate.issueDate}
        </p>
        <p className="text-xs text-gray-500">
          Credential ID {certificate.credentialId}
        </p>
      </div>

      {certificate.credentialUrl && (
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
        >
          <FaEye /> View Credential
        </a>
      )}
    </div>
  );
};

export default CertificateItem;
