import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Ensure the modal is properly bound to the app element
Modal.setAppElement('#root');

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
      <button onClick={openModal} style={buttonStyle}>
        <FontAwesomeIcon icon={icon} style={{ ...iconStyle, color: iconColor }} />
        <span style={{ ...textStyle, color: textColor }}>{text}</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
      >
        <h2>Enter Data</h2>
        {modalContent}
        <button type="button" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  padding: '10px',
};

const iconStyle = {
  marginRight: '8px',
};

const textStyle = {
  fontSize: '16px',
};

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    width: '50%',
  },
};

export default IconTextModal;
