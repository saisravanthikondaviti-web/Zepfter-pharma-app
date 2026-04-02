import React from "react";
import "./ServiceModal.css";

function ServiceModal({ service, onClose }) {
  if (!service) return null;

  const handleContact = () => {
    alert("Our team will contact you within a few hours 😊");
  };

  return (
    <div className="modalbox-overlay" onClick={onClose}>
      <div className="modaltype-box" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <span className="close-btn" onClick={onClose}>×</span>

        <div className="modal-content">

          {/* LEFT IMAGE */}
          <div className="modal-image">
            <img src={service.image} alt={service.title} />
          </div>

          {/* RIGHT CONTENT */}
          <div className="modal-text">
            <h2>{service.title}</h2>
            <p>{service.fullDesc}</p>

            <button className="contact-btn" onClick={handleContact}>
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServiceModal;