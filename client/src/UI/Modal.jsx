import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
function Modal({ children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();
  }, []);
  return createPortal(
    <>
      <div className=" bg-gray-900/50 fixed top-0 left-0 h-dvh w-full z-20" />

      <motion.dialog
      layout
        variants={{
          hidden: { y: -400, scale: 0.5 },
          visible: { y: 0, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        exit="visible"
        ref={dialog}
        onClose={onClose}
        className=" bg-transparent overflow-hidden border-none outline-none"
      >
        <div
          className="fixed top-4 right-4 text-4xl text-white cursor-pointer"
          onClick={onClose}
        >
          <IoMdClose />
        </div>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
