import React, { useState } from "react";
import "./Notification.css";

const Notification = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div
      className={`notification ${type} ${visible ? "show" : ""}`}
      onClick={handleClose}
    >
      {message}
    </div>
  );
};

export default Notification;
