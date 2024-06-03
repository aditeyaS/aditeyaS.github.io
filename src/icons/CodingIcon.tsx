import React from "react";
import IconProps from "../common/IconProps";

const CodingIcon: React.FC<IconProps> = ({ size = "sm" }) => {
  return (
    <svg
      className={size === "sm" ? "h-6 w-6" : "h-28 w-28"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g
          className={size === "sm" ? "stroke-base-content" : "stroke-primary"}
          strokeLinecap="round"
          strokeWidth="2"
        >
          <path strokeLinejoin="round" d="M7 8l-4 4 4 4"></path>
          <path d="M10.5 18l3-12"></path>
          <path strokeLinejoin="round" d="M17 8l4 4-4 4"></path>
        </g>
      </g>
    </svg>
  );
};

export default CodingIcon;
