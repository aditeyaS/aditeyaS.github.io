import React from "react";
import { useNavigate } from "react-router-dom";

interface AppContainerProps {
  body: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ body }) => {
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-primary flex items-center py-2 px-4 gap-4 rounded-t-md">
        <button
          className="rounded rounded-full bg-error w-4 h-4"
          onClick={onClose}
        ></button>
        <span className="primary-content"></span>
      </div>
      <div className="overflow-y-scroll bg-base-100 rounded-b-md">
        <div className="mt-8">{body}</div>
      </div>
    </>
  );
};

export default AppContainer;
