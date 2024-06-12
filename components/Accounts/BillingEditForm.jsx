"use client";
import { updateUserProfile } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { useState } from "react";

const BillingEditForm = ({ setShow, dictionary }) => {
  const { userInfo, setUserInfo } = useAuth();
  const [formData, setFormData] = useState({
    street: userInfo?.billingAddress?.street || "",
    city: userInfo?.billingAddress?.city || "",
    state: userInfo?.billingAddress?.state || "",
    zip: userInfo?.billingAddress?.zip || "",
    phone: userInfo?.billingAddress?.phone || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserProfile(formData, "billing");
      if (response.success) {
        setUserInfo({
          ...userInfo,
          billingAddress: {
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
            phone: formData.phone,
          },
        }); 
      } else {
        console.log("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    setShow(false);
  };

  return (
    <div className="py-5">
      <h3 className="text-2xl text-center pb-2 text-black">Update Billing Address</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <div>
            <label htmlFor="street" className="text-gray-600 mb-2 block">
              {dictionary.streetAddress}
            </label>
            <input
              type="text"
              name="street"
              defaultValue={formData.street}
              onChange={handleChange}
              id="street"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="Enter your street address"
            />
          </div>
          <div>
            <label htmlFor="city" className="text-gray-600 mb-2 block">
              {dictionary.city}
            </label>
            <input
              type="text"
              name="city"
              defaultValue={formData.city}
              onChange={handleChange}
              id="city"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="City"
            />
          </div>
          <div>
            <label htmlFor="state" className="text-gray-600 mb-2 block">
              {dictionary.countryRegion}
            </label>
            <input
              type="text"
              name="state"
              defaultValue={formData.state}
              onChange={handleChange}
              id="state"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="Enter your state name"
            />
          </div>
          <div>
            <label htmlFor="zip" className="text-gray-600 mb-2 block">
              ZIP
            </label>
            <input
              type="text"
              name="zip"
              defaultValue={formData.zip}
              onChange={handleChange}
              id="zip"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="Postal Code"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-600 mb-2 block">
              {dictionary.phoneNumber}
            </label>
            <input
              type="text"
              name="phone"
              defaultValue={formData.phone}
              onChange={handleChange}
              id="phone"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="Billing Phone number"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Update Billing Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingEditForm;
