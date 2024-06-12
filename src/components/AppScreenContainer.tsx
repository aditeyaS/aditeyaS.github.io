import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../common";

interface AppScreenContainerProps {
  body: React.ReactNode;
}

export const AppScreenContainer: React.FC<AppScreenContainerProps> = ({
  body,
}) => {
  const navigate = useNavigate();

  const onClose = () => {
    navigate(routes.HOME);
  };

  return (
    <div className="w-full h-full bg-base-100">
      <div className="fixed top-0 w-full bg-base-200 z-50">
        <div className="bg-primary flex items-center py-2 px-4 gap-4">
          <button
            className="rounded rounded-full bg-error w-4 h-4"
            onClick={onClose}
          ></button>
          <span className="primary-content"></span>
        </div>
      </div>
      <div className="pt-4 px-2">{body}</div>
    </div>
  );
};
