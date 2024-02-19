import React, { useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Close the notification after 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "10px 20px",
        borderRadius: 5,
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
