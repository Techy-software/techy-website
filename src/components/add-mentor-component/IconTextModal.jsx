import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Ensure the modal is properly bound to the app element
Modal.setAppElement("#root");

const IconTextModal = ({ text, icon, modalContent, iconColor, textColor }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="flex items-center gap-2 text-sm font-medium hover:underline"
      >
        <FontAwesomeIcon
          icon={icon}
          className="text-lg"
          style={{ color: iconColor }}
        />
        <span style={{ color: textColor }}>{text}</span>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="bg-white p-6 rounded-xl shadow-xl max-w-xl w-full mx-auto my-auto outline-none relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="text-lg font-semibold text-gray-800">{text}</h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div>{modalContent}</div>
      </Modal>
    </div>
  );
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  border: "none",
  background: "none",
  cursor: "pointer",
  padding: "10px",
};

const iconStyle = {
  marginRight: "8px",
};

const textStyle = {
  fontSize: "16px",
};

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    width: "50%",
  },
};

export default IconTextModal;
