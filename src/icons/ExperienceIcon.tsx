import React from "react";
import IconProps from "../common/IconProps";

const ExperienceIcon: React.FC<IconProps> = ({ size = "sm" }) => {
  return (
    <svg
      className={size === "sm" ? "h-6 w-6" : "h-28 w-28"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15"
          className={size === "sm" ? "stroke-base-content" : "stroke-primary"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default ExperienceIcon;
