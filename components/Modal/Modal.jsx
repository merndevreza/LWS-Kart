"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);
  const onHide = () => {
    router.back();
  };
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-lg flex flex-col dark:bg-body bg-white dark:text-white text-dark p-4 rounded-lg border-2 border-gray-600 w-3/4"
    >
      <span onClick={onHide} className="flex justify-end mb-2 cursor-pointer">
        <Image src="/close.png" alt="close" width={16} height={16} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-portal")
  );
};

export default Modal;

