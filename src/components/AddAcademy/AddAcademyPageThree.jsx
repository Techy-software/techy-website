import { useState } from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import plusCircle from "../../assets/plus.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DragNDrop from "../../reusable components/DragNDrop";
import InputField from "../../reusable components/InputField/InputField";
import CertificateItem from "../../reusable components/CertificateItem";

const AddAcademyPageThree = ({ academyData, setAcademyData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [certificateData, setCertificateData] = useState({
    name: "",
    organization: "",
    issueDate: "",
    expirationDate: "",
    credentialId: "",
    credentialUrl: "",
    certificate: null,
  });

  const handleChange = (field, value) => {
    setCertificateData({ ...certificateData, [field]: value });
  };

  const handleSubmit = () => {
    setAcademyData((prev) => ({
      ...prev,
      certificates: [...prev.certificates, certificateData],
    }));

    setCertificateData({
      name: "",
      organization: "",
      issueDate: "",
      expirationDate: "",
      credentialId: "",
      credentialUrl: "",
    });
    setIsOpen(false);
  };

  return (
    <>
      <div className="px-10 pt-10">
        <WhiteCard title="Certificates">
          {academyData.certificates.length === 0 ? (
            <p className="text-gray-500 mt-4">No certificates added yet.</p>
          ) : (
            academyData.certificates.map((cert, index) => (
              <CertificateItem key={index} certificate={cert} />
            ))
          )}
          <div
            className="text-blue-700 flex items-start gap-2 mt-4 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img src={plusCircle} alt="certificate" className="w-5 h-5" />
            <p>Add Certificate</p>
          </div>
        </WhiteCard>
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black/25" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-xl rounded-lg bg-white p-6 space-y-4">
              <Dialog.Title className="text-lg font-medium">
                Add Certificate
              </Dialog.Title>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <InputField
                    type="text"
                    value={certificateData.name}
                    setValue={(e) => handleChange("name", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Issuing Organization
                  </label>
                  <InputField
                    type="text"
                    value={certificateData.organization}
                    setValue={(e) =>
                      handleChange("organization", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    className="border p-2 w-full"
                    value={certificateData.issueDate}
                    onChange={(e) => handleChange("issueDate", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Expiration Date
                  </label>
                  <input
                    type="date"
                    className="border p-2 w-full"
                    value={certificateData.expirationDate}
                    onChange={(e) =>
                      handleChange("expirationDate", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Credential ID
                  </label>
                  <InputField
                    type="text"
                    value={certificateData.credentialId}
                    setValue={(e) =>
                      handleChange("credentialId", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Credential URL
                  </label>
                  <InputField
                    type="text"
                    value={certificateData.credentialUrl}
                    setValue={(e) =>
                      handleChange("credentialUrl", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* File Upload */}
              <DragNDrop
                formData={certificateData}
                setFormData={setCertificateData}
                target="certificate"
              />

              {/* Buttons */}
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  className="px-4 py-2 border rounded text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddAcademyPageThree;
