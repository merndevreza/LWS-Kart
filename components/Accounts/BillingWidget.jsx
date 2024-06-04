"use client";

import useAuth from "@/app/hooks/useAuth";
import EditButton from "./EditButton";

const BillingWidget = ({ dictionary }) => {
  const { userInfo } = useAuth();
  return (
    <section className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800 text-lg">
          {dictionary.billingAddress}
        </h3>
        <EditButton type="billing" dictionary={dictionary} />
      </div>
      {userInfo?.billingAddress ? (
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">{userInfo?.name}</h4>
          <p className="text-gray-800">
            {userInfo?.billingAddress?.street}, {userInfo?.billingAddress?.city}
            ,{userInfo?.billingAddress?.state}
          </p>
          <p className="text-gray-800">{userInfo?.billingAddress?.zip}</p>
          <p className="text-gray-800">{userInfo?.billingAddress?.phone}</p>
        </div>
      ) : (
        <span>No Billing info</span>
      )}
    </section>
  );
};

export default BillingWidget;
