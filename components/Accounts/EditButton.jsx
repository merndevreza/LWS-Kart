"use client";

import { useState } from "react";
import Modal from "../Modal/Modal";
import BillingEditForm from "./BillingEditForm";
import ProfileEditForm from "./ProfileEditForm";
import ShippingEditForm from "./ShippingEditForm";

const EditButton = ({ dictionary, type, user }) => {
   const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={()=>setShow(true)} className="text-primary">
        {dictionary.edit} 
      </button>
      {show && <Modal setShow={setShow}>
          {type === "profile" && (
            <ProfileEditForm user={user} dictionary={dictionary} />
          )}
          {type === "shipping" && (
            <ShippingEditForm user={user} dictionary={dictionary} />
          )}
          {type === "billing" && (
            <BillingEditForm user={user} dictionary={dictionary} />
          )}
        </Modal>}
    </>
  );
};

export default EditButton;
