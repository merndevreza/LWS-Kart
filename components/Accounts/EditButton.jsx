"use client";

import { useState } from "react";
import Modal from "../Modal/Modal";
import BillingEditForm from "./BillingEditForm";
import ProfileEditForm from "./ProfileEditForm";
import ShippingEditForm from "./ShippingEditForm"; 

const EditButton = ({ dictionary, type }) => { 
   const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={()=>setShow(true)} className="text-primary">
        {dictionary.edit} 
      </button>
      {show && <Modal setShow={setShow}>
          {type === "profile" && (
            <ProfileEditForm setShow={setShow} dictionary={dictionary} />
          )}
          {type === "shipping" && (
            <ShippingEditForm setShow={setShow} dictionary={dictionary} />
          )}
          {type === "billing" && (
            <BillingEditForm setShow={setShow} dictionary={dictionary} />
          )}
        </Modal>}
    </>
  );
};

export default EditButton;
