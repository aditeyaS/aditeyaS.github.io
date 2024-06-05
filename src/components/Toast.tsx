import React, { useEffect } from "react";
import ToastModel from "../common/ToastModel";

interface ToastProps {
  data: ToastModel;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ data, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const color = data.type === "SUCCESS" ? "alert-success" : "alert-error";

  return (
    <div className="toast toast-start z-[100]">
      <div className={`alert ${color}`}>
        <span>{data.message}</span>
      </div>
    </div>
  );
};

export default Toast;
