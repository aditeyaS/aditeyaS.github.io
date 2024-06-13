import React from "react";

export const ProjectIcon: React.FC = () => {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <g>
        <path
          d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
          className="stroke-base-100"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M10 21V3M3 10h18"
          className="stroke-base-100"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );
};
