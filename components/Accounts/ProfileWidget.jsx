"use client";
import useAuth from "@/app/hooks/useAuth";
import Logout from "../Auth/Logout";
import EditButton from "./EditButton";

const ProfileWidget = ({ dictionary }) => {
  const { userInfo } = useAuth(); 
  return (
    <section className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800 text-lg">
          {dictionary.personalProfile}
        </h3>
        <EditButton type="profile" dictionary={dictionary} />
      </div>
      {userInfo && (
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">{userInfo?.name}</h4>
          <p className="text-gray-800">{userInfo?.email}</p>
          <p className="text-gray-800">{userInfo?.phone}</p>

          <div className="pt-4">
            <Logout />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfileWidget;
