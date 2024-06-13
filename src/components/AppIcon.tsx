import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../common";

interface AppIconProps {
  url: routes;
  icon: React.ReactNode;
}

export const AppIcon: React.FC<AppIconProps> = ({ url, icon }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(url);
  };
  return (
    <button className="bg-green-500 rounded-md p-2" onClick={onClick}>
      {icon}
    </button>
  );
};
