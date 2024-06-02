"use client";
import Image from "next/image"; 
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import closeIcon from "@/public/assets/images/close.svg"

const Modal = ({ children, setShow }) => {
  const modalRef = useRef(null); 
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
      setShow(true);
    }
  }, [setShow]);
  const onHide = () => {
    modalRef.current?.close();
    setShow(false);
  };
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-lg flex flex-col dark:bg-body bg-white dark:text-white text-dark p-4 rounded-lg border-2 border-gray-600 w-1/2 relative"
    >
      <span onClick={onHide} className="absolute top-2 right-2 cursor-pointer">
        <Image src={closeIcon} alt="close" width={32} height={32} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-portal")
  );
};

export default Modal;

