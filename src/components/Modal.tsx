import React from 'react';
import './Modal.css'; // Estilos para el modal

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
