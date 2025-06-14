import React, { useState } from "react";
import axios from "axios";

const BasicInfoForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    academyName: "",
    email: "",
    country: "Egypt",
    city: "Cairo",
    area: "",
    postalCode: "",
    addressDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual backend endpoint
      await axios.post("/api/basic-info", formData);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6 my-10"
    >
      <h2 className="text-lg font-semibold text-gray-800 ">Basic info</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full h-12 mt-1 px-3 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile number <span className="text-red-500">*</span>
          </label>
          <div className="flex h-12 mt-1">
            <select
              name="countryCode"
              value={formData.countryCode || "+20"}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  countryCode: e.target.value,
                }))
              }
              className="border rounded-l-md px-3 bg-gray-100"
            >
              <option value="+20">+20 (Egypt)</option>
              <option value="+966">+966 (Saudi Arabia)</option>
              <option value="+971">+971 (UAE)</option>
              <option value="+962">+962 (Jordan)</option>
            </select>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-r-md px-3"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Academy name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="academyName"
            value={formData.academyName}
            onChange={handleChange}
            required
            className="w-full h-12 mt-1 px-3 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="ex (example@example.com)"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-12 mt-1 px-3 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full h-12 mt-1 px-3 border rounded-md"
          >
            <option>Egypt</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            City <span className="text-red-500">*</span>
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full h-12 mt-1 px-3 border rounded-md"
          >
            <option>Cairo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Area
          </label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full h-12 mt-1 px-3 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Postal code
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full h-12 mt-1 px-3 border rounded-md"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Address details <span className="text-red-500">*</span>
        </label>
        <textarea
          name="addressDetails"
          value={formData.addressDetails}
          onChange={handleChange}
          required
          placeholder="Enter address details"
          className="w-full h-32 mt-1 px-3 py-2 border rounded-md"
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default BasicInfoForm;
