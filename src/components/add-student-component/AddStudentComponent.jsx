import { useRef, useState } from "react";
import IconTextModal from "../add-mentor-component/IconTextModal";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { objectToFormData } from "../../utils/objectToFormData";

const AddStudentComponent = () => {
  const [content, setContent] = useState(getContent("option1"));
  const fileInputRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    age: "",
    userId: 2,
    address: {},
    topics: [],
    certificate: [],
  });

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
    // const formDataToSend = objectToFormData(formData);

    // for (let [key, value] of formDataToSend.entries()) {
    //   console.log(key, value); // Logs key-value pairs
    // }
    // try {
    //   // const res = await post("/school/students/create/", formDataToSend);

    //   const data = await res.json();
    //   console.log("Success:", data);
    // } catch (err) {
    //   console.error("Error:", err);
    // }
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const ReletiveModalContent = () => (
    <div className="w-4/5 mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Add relative</h2>
        <button className="text-gray-500 hover:text-red-500">&#10006;</button>
      </div>

      {/* Form Fields */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="ex (Ahmed)"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="35 Years"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job title
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
              <option>Engineer</option>
              <option>Doctor</option>
              <option>Teacher</option>
            </select>
          </div>

          {/* Relationship */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Relationship
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
              <option>Father</option>
              <option>Mother</option>
              <option>Sibling</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile number <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select className="p-2 border border-gray-300 rounded-l-md">
                <option>+966</option>
                <option>+1</option>
              </select>
              <input
                type="text"
                placeholder="Mobile number"
                className="flex-1 p-2 border-t border-b border-r border-gray-300 rounded-r-md"
              />
            </div>
          </div>

          {/* Landline */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Landline <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="040"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Email */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="ex (example@example.com)"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="mr-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  const interests = [
    { name: "Web development", color: "bg-yellow-400" },
    { name: "C++", color: "bg-gray-300" },
    { name: "Python turtle", color: "bg-yellow-400" },
    { name: "Python", color: "bg-yellow-400" },
    { name: "Scratch", color: "bg-gray-300" },
    { name: "Pictoblox", color: "bg-gray-300" },
    { name: "Game development", color: "bg-gray-300" },
    { name: "AI", color: "bg-gray-300" },
  ];

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const IntrestsModalContent = () => (
    <div className="w-4/5 mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-2">
        <h2 className="text-xl font-semibold">What are you interested in?</h2>
        <button className="text-gray-500 hover:text-red-500">&#10006;</button>
      </div>

      {/* Subtext */}
      <p className="text-sm text-gray-500 mb-4">
        This helps us recommend great content
      </p>

      {/* Interests */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {interests.map((interest) => (
          <button
            key={interest.name}
            className={`px-4 py-2 rounded-full font-semibold flex items-center justify-center ${
              selectedInterests.includes(interest.name)
                ? interest.color
                : "bg-gray-100"
            }`}
            onClick={() => toggleInterest(interest.name)}
          >
            {interest.name}
          </button>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="text-gray-500 hover:text-blue-500">Cancel</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );

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
      <form className="space-y-6">
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
            <p className="text-gray-500">Drag & Drop file here</p>
            <p className="text-sm text-gray-400">
              or click to browse (4mb max)
            </p>
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
      getContent({
        choice,
        handleChange,
        showPassword,
        formData,
        setFormData,
        handleSubmit,
        handleCertificateSubmit,
        togglePasswordVisibility,
        ReletiveModalContent,
        IntrestsModalContent,
        AddCertificateModalContent,
        handleFileUpload,
        fileInputRef,
      })
    );
  };

  return (
    <div>
      <div className="header-component">
        <h2>Add New Student</h2>
        <button onClick={handleSubmit}>submit</button>
      </div>
      <hr className="hr" />

      <div className="main-container">
        <div className="menu-container">
          <h2>Few steps to add student:</h2>
          <div className="menu">
            <button onClick={() => handleMenuChoice("option1")}>
              General info
            </button>
            <button onClick={() => handleMenuChoice("option2")}>
              Relatives
            </button>
            <button onClick={() => handleMenuChoice("option3")}>
              Interests
            </button>
            <button onClick={() => handleMenuChoice("option4")}>
              Certificates
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

const getContent = ({
  choice,
  handleChange,
  showPassword,
  formData,
  setFormData,
  handleSubmit,
  handleCertificateSubmit,
  togglePasswordVisibility,
  ReletiveModalContent,
  IntrestsModalContent,
  AddCertificateModalContent,
  handleFileUpload,
  fileInputRef,
}) => {
  switch (choice) {
    case "option1":
      return (
        <div className="w-full mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
          {/* Profile Picture */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold">Profile picture</h2>
            <div className="flex items-center mt-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex justify-center items-center">
                <span className="text-4xl text-gray-400">&#128100;</span>
              </div>
              <button className="ml-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Upload picture
              </button>
            </div>
          </div>

          {/* Basic Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-lg font-semibold mb-4">Basic info</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="ex (Ahmed)"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="fullName"
                  value={formData.fullName}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="text"
                  placeholder="ex (17 years)"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  // onChange={handleChange}
                  // name="age"
                  // value={formData.age}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  onChange={handleChange}
                  value={formData.gender}
                >
                  <option value={0}>Select gender</option>
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                </select>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                  <option>Egypt</option>
                  <option>USA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                  <option>Cairo</option>
                  <option>Alexandria</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Area
                </label>
                <input
                  type="text"
                  placeholder="El Dokki"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Postal code
                </label>
                <input
                  type="text"
                  placeholder="Postal code"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address details
                </label>
                <textarea
                  placeholder="Enter address details"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact info</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile number
                </label>
                <div className="flex items-center">
                  <select className="p-2 border border-gray-300 rounded-l-md">
                    <option>+966</option>
                    <option>+1</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="flex-1 p-2 border-t border-b border-r border-gray-300 rounded-r-md"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Landline
                </label>
                <input
                  type="text"
                  placeholder="040"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="ex (example@example.com)"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* School Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">School</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  School name
                </label>
                <input
                  type="text"
                  placeholder="School name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  School type
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                  <option>Select school type</option>
                  <option>Private</option>
                  <option>Public</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Study language
                </label>
                <input
                  type="text"
                  placeholder="Study language"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Register date
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      );
    case "option2":
      return (
        <div>
          <div className="info-parent-container-spacing">
            <h2>Relatives</h2>
            <hr className="hr" />
            <div>
              <IconTextModal
                text="Add Relatives"
                icon={faPlusCircle}
                modalContent={<ReletiveModalContent />}
                iconColor="#016BDD"
                textColor="#016BDD"
              />
            </div>
          </div>
        </div>
      );
    case "option3":
      return (
        <div className="info-parent-container-spacing">
          <h2>Interests</h2>
          <hr className="hr" />
          <div>
            <IconTextModal
              text="Add Interests"
              icon={faPlusCircle}
              modalContent={<IntrestsModalContent />}
              iconColor="#016BDD"
              textColor="#016BDD"
            />
          </div>
        </div>
      );
    case "option4":
      return (
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
      );
    default:
      return (
        <div>
          <div>Option 1 - Content Block 1</div>
          <div>Option 1 - Content Block 2</div>
          <div>Option 1 - Content Block 3</div>
        </div>
      );
  }
};

export default AddStudentComponent;
