import React, { useEffect, useState } from "react";
import "./add-mentor-component.css";
import profilePictureCircle from "../../assets/profilePictureCircle.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import addIcon from "../../assets/icons/addIcon.svg";
import IconTextModal from "./IconTextModal";
import FileUploader from "./FileUploader";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { post } from "../../utils/HtppService";
import { useRef } from "react";
import { objectToFormData } from "../../utils/objectToFormData";

const AddMentorComponent = () => {
  const [content, setContent] = useState(getContent("option1"));

  const fileInputRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const [experience, setExperience] = useState({});
  const [certificate, setCertificate] = useState({ certificate: null });
  const [formData, setFormData] = useState({
    userId: 2,
    address: {},
    workExperince: [],
    certificate: [],
  });

  const handleExperienceSubmit = (e) => {
    e.preventDefault();

    const form = e.target; // the form element
    const newExperience = {
      jobTitle: form.jobTitle.value,
      companyName: form.companyName.value,
      startDate: form.startDate.value,
      endDate: form.endDate.value,
    };

    setFormData((prev) => ({
      ...prev,
      workExperince: [...prev.workExperince, newExperience],
    }));
  };


  const handleCertificateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log("Certificate submitted", form.certificate.files);
    const newCertificate = {
      name: form.name.value,
      issuingOrganization: form.organization.value,
      issueDate: form.issueDate.value,
      expirationDate: form.expirationDate.value,
      credentialId: form.credentialId.value,
      credentialUrl: form.credentialUrl.value,
      certificate: form.certificate.files[0],
    };
    setFormData((prev) => ({
      ...prev,
      certificate: [...prev.certificate, newCertificate],
    }));
  };

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    console.log(files);
    // Decide value based on input type
    let fieldValue;
    if (type === "checkbox") {
      fieldValue = checked;
    } else if (type === "file") {
      fieldValue = files[0];
    } else {
      fieldValue = value;
    }

    const keys = name.split(".");

    setFormData((prev) => {
      const updated = { ...prev };
      let current = updated;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        current[key] = current[key] || {};
        current = current[key];
      }

      current[keys[keys.length - 1]] = fieldValue;

      return updated;
    });
  };

  const handleSubmit = async () => {
    console.log("Form data to send:", formData);
    const formDataToSend = objectToFormData(formData);

    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value); // Logs key-value pairs
    }
    try {
      const res = await post("/school/mentor/create/", formDataToSend);

      const data = await res.json();
      console.log("Success:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const WorkExperinceModalContent = () => (
    <div className="w-4/5 mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Add experience</h3>
        <button className="text-gray-500 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <form className="space-y-6 mt-4" onSubmit={handleExperienceSubmit}>
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="jobTitle">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job title"
            value={experience.jobTitle}
            onChange={(e) =>
              setExperience((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
        </div>

        {/* Company/Organization Name */}
        <div>
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="companyName"
          >
            Company/organization name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company/organization name"
            required
            value={experience.companyName}
            onChange={(e) => {
              setExperience((prev) => ({
                ...prev,
                companyName: e.target.value,
              }));
            }}
          />
        </div>

        {/* Starting and Ending Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="startDate"
            >
              Starting from <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={experience.startDate}
                onChange={(e) => {
                  setExperience((prev) => ({
                    ...prev,
                    startDate: e.target.value,
                  }));
                }}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h8M7 12h10m-9 5h8m-4 0h-1m-5 0H6v-4h12v4h-1m-9 0v-4H5v-4h14v4h-1m-5 0H9v-4H8v4h1m-1-4V9h6v3H8v-3h1m-1 3V9m0 9v-5m-1 1v5m-2 0v-5m2 0h8v5H8v-5m2 0h4v5h-4v-5z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="endDate">
              Ending in <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={experience.endDate}
                onChange={(e) => {
                  setExperience((prev) => ({
                    ...prev,
                    endDate: e.target.value,
                  }));
                }}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h8M7 12h10m-9 5h8m-4 0h-1m-5 0H6v-4h12v4h-1m-9 0v-4H5v-4h14v4h-1m-5 0H9v-4H8v4h1m-1-4V9h6v3H8v-3h1m-1 3V9m0 9v-5m-1 1v5m-2 0v-5m2 0h8v5H8v-5m2 0h4v5h-4v-5z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="description"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit form
          </button>
        </div>
      </form>
    </div>
  );

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const AddCertificateModalContent = () => (
    <div className="w-4/5 mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h3 className="text-xl font-bold">Add Certificate</h3>
        <button className="text-gray-500 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <form className="space-y-6" onSubmit={handleCertificateSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter certificate name"
              required
              value={certificate.name}
              onChange={(e) =>
                setCertificate((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </div>

          {/* Issuing Organization */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="organization"
            >
              Issuing organization <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter issuing organization"
              required
              value={certificate.organization}
              onChange={(e) =>
                setCertificate((prev) => ({
                  ...prev,
                  organization: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Issue Date */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="issueDate"
            >
              Issue date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="issueDate"
                name="issueDate"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={certificate.issueDate}
                onChange={(e) =>
                  setCertificate((prev) => ({
                    ...prev,
                    issueDate: e.target.value,
                  }))
                }
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h8M7 12h10m-9 5h8m-4 0h-1m-5 0H6v-4h12v4h-1m-9 0v-4H5v-4h14v4h-1m-5 0H9v-4H8v4h1m-1-4V9h6v3H8v-3h1m-1 3V9m0 9v-5m-1 1v5m-2 0v-5m2 0h8v5H8v-5m2 0h4v5h-4v-5z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Expiration Date */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="expirationDate"
            >
              Expiration date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="expirationDate"
                name="expirationDate"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={certificate.expirationDate}
                onChange={(e) =>
                  setCertificate((prev) => ({
                    ...prev,
                    expirationDate: e.target.value,
                  }))
                }
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h8M7 12h10m-9 5h8m-4 0h-1m-5 0H6v-4h12v4h-1m-9 0v-4H5v-4h14v4h-1m-5 0H9v-4H8v4h1m-1-4V9h6v3H8v-3h1m-1 3V9m0 9v-5m-1 1v5m-2 0v-5m2 0h8v5H8v-5m2 0h4v5h-4v-5z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Credential ID */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="credentialId"
            >
              Credential ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="credentialId"
              name="credentialId"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter credential ID"
              required
              value={certificate.credentialId}
              onChange={(e) =>
                setCertificate((prev) => ({
                  ...prev,
                  credentialId: e.target.value,
                }))
              }
            />
          </div>

          {/* Credential URL */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="credentialUrl"
            >
              Credential URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="credentialUrl"
              name="credentialUrl"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter credential URL"
              required
              value={certificate.credentialUrl}
              onChange={(e) =>
                setCertificate((prev) => ({
                  ...prev,
                  credentialUrl: e.target.value,
                }))
              }
            />
          </div>
        </div>

        {/* Certificates Upload */}
        <div>
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="certificates"
          >
            Certificates
          </label>
          <div className="w-full p-4 border-2 border-dashed border-gray-300 rounded-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-12 w-12 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <div>
              <button
                type="button"
                onClick={handleFileClick}
                className="px-4 ms-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Click to browse
              </button>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(e) => {
                  const file = e.target.files[0];
                  //TODO
                  if (file) {
                    setCertificate((prev) => ({
                      ...prev,
                      certificate: file,
                    }));
                    console.log("Selected file:", file);
                  }
                }}
                className="hidden"
                name="certificate"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  const handleFileUpload = (file) => {
    console.log("Uploaded file:", file);
  };

  const handleMenuChoice = (choice) => {
    document.querySelectorAll(".menu button").forEach((button) => {
      button.classList.remove("selected");
    });
    setContent(
      getContent(
        handleChange,
        formData,
        setFormData,
        choice,
        showPassword,
        setShowPassword,
        WorkExperinceModalContent,
        AddCertificateModalContent,
        handleFileUpload,
        fileInputRef
      )
    );
  };

  return (
    <div>
      <div className="header-component">
        <h2>Add New Mentor</h2>
        <button onClick={handleSubmit}>Submit Mentor</button>
      </div>
      <hr className="hr" />

      <div className="main-container">
        <div className="menu-container">
          <h2>4 Steps to add Mentor:</h2>
          <div className="menu">
            <button onClick={() => handleMenuChoice("option1")}>
              1- General info
            </button>
            <button onClick={() => handleMenuChoice("option2")}>
              2- Location and Contact info
            </button>
            <button onClick={() => handleMenuChoice("option3")}>
              3- Work Experince
            </button>
            <button onClick={() => handleMenuChoice("option4")}>
              4- Attachments
            </button>
          </div>
        </div>

        <div className="content-parent">
          <div className="content">{content}</div>
        </div>
      </div>
    </div>
  );
};

const getContent = (
  handleChange,
  formData,
  setFormData,
  choice,
  showPassword,
  setShowPassword,
  WorkExperinceModalContent,
  AddCertificateModalContent,
  handleFileUpload,
  fileInputRef
) => {
  const optionsSpecialization = [
    { value: "frontend", label: "Frontend Development" },
    { value: "backend", label: "Backend Development" },
    { value: "fullstack", label: "Fullstack Development" },
    { value: "devops", label: "DevOps" },
  ];

  const handleFileClick = () => {
    fileInputRef.current.click();
  };
  const optionsExperience = [
    { value: "1", label: "1 year" },
    { value: "2", label: "2 years" },
    { value: "3", label: "3 years" },
    { value: "4", label: "4 years" },
    { value: "5", label: "5 years" },
    { value: "5+", label: "5+ years" },
  ];
  switch (choice) {
    case "option1":
      return (
        <div>
          <div className="info-parent-container">
            <div className="info-title">Profile picture</div>
            <hr className="hr" />
            <div className="info-container">
              <div className="avatar">
                <img
                  src={profilePictureCircle}
                  alt="proflie image"
                  className="avatar-icon"
                />
              </div>
              <div>
                <div>
                  <button
                    type="button"
                    onClick={handleFileClick}
                    className="px-4 ms-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Upload Image
                  </button>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        image: e.target.files[0],
                      }))
                    }
                    className="hidden"
                    name="image"
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div className="info-parent-container-spacing">
            <h2>Basic info</h2>
            <hr className="hr" />
            <div>
              <form className="form-container">
                <div className="form-group">
                  <label>
                    First name ( English ) <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ex (Ahmed)"
                    onChange={handleChange}
                    value={formData.fullName}
                    name="fullName"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Middle name ( English ) <span className="required">*</span>
                  </label>
                  <input type="text" placeholder="ex (Kamal)" />
                </div>
                <div className="form-group">
                  <label>
                    Last name ( English ) <span className="required">*</span>
                  </label>
                  <input type="text" placeholder="ex (Mealy)" />
                </div>
                <div className="form-group">
                  <label>Nationality</label>
                  <select
                    onChange={handleChange}
                    name="nationality"
                    value={formData.nationality}
                  >
                    <option value="">Please select</option>
                    <option value="Egyptian">Egyptian</option>
                    <option value="American">American</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    SSN <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="ssn"
                    placeholder="ex (29831234667765432)"
                    onChange={handleChange}
                    value={formData.ssn}
                  />
                </div>
                <div className="form-group">
                  <label>Marital Status</label>
                  <select
                    name="isMarried"
                    value={formData.isMarried}
                    onChange={handleChange}
                  >
                    <option value="">Select status</option>
                    <option value="false">Single</option>
                    <option value="true">Married</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Date of birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="info-parent-container-spacing">
              <h2>Credentials</h2>
              <hr className="hr" />
              <form className="form-container-creddentials">
                <div className="form-group-creddentials">
                  <label>
                    Username <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>
                    Password <span className="required">*</span>
                  </label>
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      onChange={handleChange}
                      value={formData.password}
                      name="password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    case "option2":
      return (
        <div>
          <div className="info-parent-container">
            <h2>Location</h2>
            <hr className="hr" />
            <div>
              <div className="address-form-container">
                <form className="address-form">
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
                  >
                    <div className="form-group">
                      <label>
                        Country <span className="required">*</span>
                      </label>
                      <select name="address.Country" onChange={handleChange}>
                        <option value="egypt">Egypt</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        City <span className="required">*</span>
                      </label>
                      <select name="address.City" onChange={handleChange}>
                        <option value="cairo">Cairo</option>
                        <option value="alexandria">Alexandria</option>
                        <option value="giza">Giza</option>
                      </select>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
                  >
                    <div className="form-group">
                      <label>
                        Area <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="El dokki"
                        onChange={handleChange}
                        name="address.Area"
                        value={formData.address.Area}
                      />
                    </div>
                    <div className="form-group">
                      <label>Postal code</label>
                      <input
                        type="text"
                        placeholder="Enter postal code"
                        onChange={handleChange}
                        name="address.postalCode"
                        value={formData.address.postalCode}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      Address details <span className="required">*</span>
                    </label>
                    <textarea
                      placeholder="Enter address details"
                      name="address.AddressDetials"
                      value={formData.address.AddressDetials}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="info-parent-container-spacing">
            <h2>Contact info</h2>
            <hr className="hr" />
            <div className="phone-input-container">
              <div className="phone-input-field">
                <label htmlFor="mobile">
                  Mobile number <span className="required">*</span>
                </label>
                <PhoneInput
                  country={"eg"}
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      phoneNumber: value,
                    }))
                  }
                  inputProps={{
                    name: "phoneNumber",
                    required: true,
                    autoFocus: true,
                  }}
                />
              </div>
              <div className="phone-input-field">
                <label htmlFor="landline">
                  Landline <span className="required">*</span>
                </label>
                <PhoneInput
                  country={"eg"}
                  value={formData.landLine}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      landLine: value,
                    }))
                  }
                  inputProps={{
                    name: "landline",
                    required: true,
                  }}
                />
              </div>
            </div>
            <div className="email-input-field">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ex (example@example.com)"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
      );
    case "option3":
      return (
        <div>
          <div>
            <div className="info-parent-container">
              <h2>Specializatiion</h2>
              <hr className="hr" />
              <div className="select-input-container">
                <div className="select-input-field">
                  <label htmlFor="specialization">
                    Specialization <span className="required">*</span>
                  </label>
                  <Select
                    id="specialization"
                    options={optionsSpecialization}
                    value={formData.specialization}
                    onChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        specialization: value.value,
                      }));
                    }}
                    placeholder="Select specialization"
                  />
                </div>
                <div className="select-input-field">
                  <label htmlFor="experience">
                    Years of experience <span className="required">*</span>
                  </label>
                  <Select
                    id="experience"
                    options={optionsExperience}
                    value={formData.experience}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        experience: value.value,
                      }))
                    }
                    placeholder="Select years of experience"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="info-parent-container-spacing">
            <h2>Work experince</h2>
            <hr className="hr" />
            <div>
              <IconTextModal
                text="Add Experince"
                icon={faPlusCircle}
                modalContent={<WorkExperinceModalContent />}
                iconColor="#016BDD"
                textColor="#016BDD"
              />
            </div>
          </div>
          <div className="info-parent-container-spacing">
            <h2>Certificates</h2>
            <hr className="hr" />
            <div>
              <IconTextModal
                text="Add Certificates"
                icon={faPlusCircle}
                modalContent={<AddCertificateModalContent />}
                iconColor="#016BDD"
                textColor="#016BDD"
              />
            </div>
          </div>
        </div>
      );
    case "option4":
      return (
        <div>
          <div>
            <div className="info-parent-container">
              <h2>Attachments</h2>
              <hr className="hr" />
              <div>
                <FileUploader
                  title="National ID"
                  onFileUpload={handleFileUpload}
                />
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div>
          <h1>Select a Menu Choice</h1>
        </div>
      );
  }
};

export default AddMentorComponent;
