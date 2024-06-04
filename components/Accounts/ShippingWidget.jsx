"use client"
import useAuth from "@/app/hooks/useAuth";
import EditButton from "./EditButton";

const ShippingWidget = ({dictionary}) => {
  const { userInfo } = useAuth();
  return (
    <section className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4"> 
        <h3 className="font-medium text-gray-800 text-lg">{dictionary.shippingAddress}</h3>
        
        <EditButton type="shipping" dictionary={dictionary} />
      </div>
      
      {userInfo?.shippingAddress ? (
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">{userInfo?.name}</h4>
          <p className="text-gray-800">
            {userInfo?.shippingAddress?.street}, {userInfo?.shippingAddress?.city}
            ,{userInfo?.shippingAddress?.state}
          </p>
          <p className="text-gray-800">{userInfo?.shippingAddress?.zip}</p>
          <p className="text-gray-800">{userInfo?.shippingAddress?.phone}</p>
        </div>
      ) : (
        <span>No Shipping info</span>
      )}
    </section>
  );
};

export default ShippingWidget;
