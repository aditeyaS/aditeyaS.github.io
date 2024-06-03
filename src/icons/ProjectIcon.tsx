import React from "react";
import IconProps from "../common/IconProps";

const ProjectIcon: React.FC<IconProps> = ({ size = "sm" }) => {
  return (
    <svg
      className={size === "sm" ? "h-6 w-6" : "h-28 w-28"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
          className={size === "sm" ? "stroke-base-content" : "stroke-primary"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M10 21V3M3 10h18"
          className={size === "sm" ? "stroke-base-content" : "stroke-primary"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );
};

export default ProjectIcon;
