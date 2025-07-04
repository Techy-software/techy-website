import { useState } from "react";
import CoursesTable from "../../reusable components/Courses-LG-View/CourseTable";
import { post } from "../../utils/HtppService";
import { useNavigate } from "react-router-dom";

const CreateDiscountCoupon = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const navigate = useNavigate();

  const [couponData, setCouponData] = useState({
    code: "",
    description: "",
    discountAmount: "",
    percentage: true,
    startDate: "",
    endDate: "",
    usageLimit: ""
  });

  const handleMenuChoice = (choice) => {
    setSelectedOption(choice);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === "checkbox" ? checked : value;
    setCouponData({ ...couponData, [name]: finalValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      code: couponData.code,
      description: couponData.description,
      discountAmount: parseFloat(couponData.discountAmount),
      percentage: couponData.percentage,
      startDate: new Date(couponData.startDate).toISOString(),
      endDate: new Date(couponData.endDate).toISOString(),
      usageLimit: parseInt(couponData.usageLimit)
    };

    try {
      const response = await post("school/coupons/", body);
      console.log("Coupon created:", response);

      alert("Discount coupon created successfully!");

      setCouponData({
        code: "",
        description: "",
        discountAmount: "",
        percentage: true,
        startDate: "",
        endDate: "",
        usageLimit: ""
      });

      navigate(-1); // Navigate back
    } catch (err) {
      console.error("Error creating coupon:", err);
      alert("Failed to submit. Please try again later.");
    }
  };

  const renderOverview = () => (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-6">Discount Coupon Details</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Promo Code *</label>
          <input
            type="text"
            name="code"
            value={couponData.code}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter promo code"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Discount Amount *</label>
          <input
            type="number"
            name="discountAmount"
            value={couponData.discountAmount}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
            placeholder="10"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Discount Type *</label>
          <select
            name="percentage"
            value={couponData.percentage ? "true" : "false"}
            onChange={(e) =>
              setCouponData({ ...couponData, percentage: e.target.value === "true" })
            }
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="true">Percentage</option>
            <option value="false">Fixed Amount</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Usage Limit *</label>
          <input
            type="number"
            name="usageLimit"
            value={couponData.usageLimit}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date *</label>
          <input
            type="date"
            name="startDate"
            value={couponData.startDate}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">End Date *</label>
          <input
            type="date"
            name="endDate"
            value={couponData.endDate}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description *</label>
          <textarea
            name="description"
            value={couponData.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  const renderAssignCoupons = () => <CoursesTable />;

  return (
    <div>
      <div className="header-component px-6 py-4 flex justify-between items-center bg-white shadow">
        <h2 className="text-2xl font-semibold">Create Discount Coupon</h2>
      </div>
      <hr />

      <div className="main-container flex p-6 gap-6">
        <div className="menu-container w-1/4">
          <h3 className="text-lg font-semibold mb-2">Publish Discount Coupon</h3>
          <div className="menu space-y-2">
            <button
              onClick={() => handleMenuChoice("option1")}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedOption === "option1" ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleMenuChoice("option2")}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedOption === "option2" ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              Assign Coupons
            </button>
          </div>
        </div>

        <div className="content-parent w-3/4">
          <div className="content">
            {selectedOption === "option1" ? renderOverview() : renderAssignCoupons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDiscountCoupon;
