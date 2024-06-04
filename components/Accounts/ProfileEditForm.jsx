"use client";
import { updateUserProfile } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { useState } from "react";

const ProfileEditForm = ({ setShow, dictionary }) => {
  const { userInfo, setUserInfo } = useAuth();
  const [formData, setFormData] = useState({
    name: userInfo?.name || "",
    email: userInfo?.email || "",
    phone: userInfo?.phone || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserProfile(formData, "profile");
      if (response.success) {
        setUserInfo({
          ...userInfo,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        });
        console.log("Profile updated successfully!");
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
      <h3 className="text-2xl text-center pb-2 text-black">Update Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              {dictionary.fullName}
            </label>
            <input
              type="text"
              name="name"
              defaultValue={formData.name}
              onChange={handleChange}
              id="name"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="fulan fulana"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              {dictionary.emailAddress}
            </label>
            <input
              type="email"
              name="email"
              defaultValue={formData.email}
              onChange={handleChange}
              id="email"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="example@gmail.com"
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
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
