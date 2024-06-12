"use client";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import useAuth from "@/app/hooks/useAuth";
import { placeOrder } from "@/app/actions";
import Modal from "../Modal/Modal";
import Success from "../Modal/Success"; 
import useCurrentLocale from "@/app/hooks/useCurrentLocale";
import { useRouter } from "next/navigation";

const CheckoutWrapper = ({ dictionary,session }) => {
  const locale = useCurrentLocale();
  const router = useRouter();
  if (!session?.user) {
   router.push(`${locale}/login`)
  }

  const [showModal, setShowModal] = useState(false);
  const { userInfo, setCart } = useAuth();
  const [formData, setFormData] = useState({
    fName: userInfo?.name.split(" ")[0] || "",
    lName: userInfo?.name.split(" ")[1] || "",
    email: userInfo?.email || "",
    street: userInfo?.shippingAddress?.street || "",
    city: userInfo?.shippingAddress?.city || "",
    state: userInfo?.shippingAddress?.state || "",
    zip: userInfo?.shippingAddress?.zip || "",
    phone: userInfo?.shippingAddress?.phone || "",
    company: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fName) newErrors.message = "First Name is required";
    if (!formData.lName) newErrors.message = "Last Name is required";
    if (!formData.email) newErrors.message = "Email is required";
    if (!formData.street) newErrors.message = "Street address is required";
    if (!formData.city) newErrors.message = "City is required";
    if (!formData.state) newErrors.message = "State is required";
    if (!formData.zip) newErrors.message = "ZIP code is required";
    if (!formData.phone) newErrors.message = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async (e, totalPrice) => {
    e.preventDefault();
    const OrderDetails = {
      name: formData.fName + formData.lName,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      amount: totalPrice,
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
    };
    if (validateForm()) {
      const response = await placeOrder(OrderDetails);
      if (response.success) {
        setShowModal(true);
        setCart([]);
        setFormData({
          fName: "",
          lName: "",
          email: "",
          street: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          company: "",
        });
      }
      console.log("Order placed:", formData);
    } else {
      console.log("error", errors);
    }
  };

  return (
    <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
      <section className="col-span-8 border border-gray-200 p-4 rounded">
        <h3 className="text-lg font-medium capitalize mb-4">
          {dictionary.checkout}
        </h3>
        <CheckoutForm
          formData={formData}
          setFormData={setFormData}
          dictionary={dictionary}
        />
      </section>
      <CheckoutSummary
        handlePlaceOrder={handlePlaceOrder}
        formData={formData}
        dictionary={dictionary}
        errors={errors}
      />
      {showModal && (
        <Modal setShow={setShowModal}>
          <Success message="Order Placed successfully" />
        </Modal>
      )}
    </div>
  );
};

export default CheckoutWrapper;
